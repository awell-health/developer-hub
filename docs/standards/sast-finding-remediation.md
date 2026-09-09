# SAST and secret findings — the developer-hub register

Companion to the `awell-security` plugin's `sast-remediation` skill: what was fixed, what is
deliberately suppressed and why, in **this** repository. Update it in the same PR as the decision.

- **Aikido repo name:** `developer-hub` (GitHub group 6344).
  `aikido_issues_list(issue_types=['sast','leaked_secret'], repo_name='developer-hub')`.
- This is a statically generated Next.js documentation site. Almost every string it renders is
  authored in this repository (`content/*.mdx`, `pages/*.tsx`) at build time; the one exception is
  noted below.

## Fixed

| Finding | Where | Fix |
| --- | --- | --- |
| 16462351 (sast, medium 60) `AIK_yaml_github-workflow-action-commit-hash` | `.github/workflows/pr-agent.yml`, `Codium-ai/pr-agent@main` | **Pinned** to `f3b385ea2927247ddcff2fe252472380b9c8f5fc` (v0.45.0, 2026-09-09). Moving off `main` also means the action no longer changes under us on every upstream push; bump the SHA deliberately. `markprompt.yml`'s `actions/checkout@v3` pinned to v4.2.2 with `persist-credentials: false` in the same change (the job only uploads). |
| 16462372 (`pages/playground.tsx:19`), 16462371 (`codegen.yml:5`) — leaked_secret, medium 50 | files no longer in the tree | **History only.** Both files were deleted (codegen.yml in 17e8946); nothing to change. Closed from the dashboard by a human. |
| 385950593 (leaked_secret, medium 50) curl header token | `content/awell-orchestration/api-reference/overview/requests-and-responses.mdx:35` | Already fixed by #234 (`-H "apiKey: $AWELL_API_KEY"`); the feed lags. |
| 69368361, 69368362, 55180281, 55180283, 55180286, 55180287, 55180289, 55180290, 55180292, 55180293, 55180295, 55180296, 55180298, 55180299, 55180301, 55180302, 55180304, 55180305, 55180308 (sast, medium 60–65) `AIK_ts_generic_path_traversal` | every `getDoc` / `getApiDoc` / `getDeveloperToolsPage` / `getPageContent` in `src/utils/content/**` — `join(<content dir>, \`${slug}.mdx\`)` + `readFileSync` | **One choke point.** All ten call sites now go through `src/utils/content/readMdx.ts`, which joins the slug under its content directory (`join`, so the leading slash two literal callers pass stays inside it) and refuses anything whose `relative()` escapes it (`..` segments, empty). Every page that supplies a slug uses `getStaticPaths` with `fallback: false`, so at build time the slug is always one `getAllDocs()` listed; the guard makes that hold if a caller ever changes. 2026-09-08. |
| 16462346 (sast, high 70) `AIK_js_insecure-document-method` | `src/utils/string/stripHtml.ts` (`tmp.innerHTML = html`) | **Deleted.** The helper had no callers (`git grep stripHtml` found only its own export); dead code is the cheapest sink to remove. |
| 385950590, 385950591 (leaked_secret, high 70) "authorization token in a curl header" | `content/awell-orchestration/api-reference/overview/{requests-and-responses,authorization}.mdx` | The placeholder `-H 'apiKey: YOUR_API_KEY'` became `-H "apiKey: $AWELL_API_KEY"`: an environment-variable reference, which is also the shape a reader should copy. No key was ever present. The local scanner does not run this rule, so the close is expected on the next platform scan rather than proven. |

## Suppressed in code (`// nosemgrep`)

| Finding | Where | Why the rule fires | Why it is safe |
| --- | --- | --- | --- |
| 163931996 (sast, medium 50) `AIK_js_ssrf` | `pages/awell-extensions/marketplace/[...extensionKey].tsx`, `getServerSideProps` fetch URL | Sink detector on `fetch(<non-literal url>)`; a guard in front of it does not clear the rule. | **Guarded, then anchored.** The host is `NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT` (our own extensions API, from env); the only variable part is the catch-all route segment, which is joined and must match `^[A-Za-z0-9_-]+$` (all 62 extension keys in `awell-extensions` do — `slack`, `calDotCom`, …) or the page returns 404. Before, `../` or `?` in the route reached the API host as a path. 2026-09-09. |
| 222860788 (sast, medium 50) `AIK_yaml_github-workflow-binary-integrity-check-missing` | `.github/workflows/markprompt.yml`, the `curl … --data-binary @data.zip` step | The rule treats any `curl <url>` in a `run:` as a download of an artifact. | This curl **uploads** the zipped docs to Markprompt's `/v1/train`; nothing is fetched or executed, so there is no artifact to checksum. `--fail-with-body` added so a rejected upload fails the job; the token is read from `$MARKPROMPT_TOKEN` rather than interpolated. Anchor on the line above `run:`. 2026-09-09. |
| 16462347, 16462348 (sast, medium 55) `AIK_js_ssrf` | `src/components/ScoreExplorer/hooks/useMakeRequest/useMakeRequest.tsx`, `axios.get` / `axios.post` | Sink detector on `axios.<method>(<non-literal url>)`. | The hook runs in the visitor's browser (React state hook, no server), `request.endpoint` is one of the awell-score URLs in `src/config/awell-score/endpoints` chosen from a dropdown, and the request leaves the visitor's own machine for the public awell-score API. There is no server-side requester to forge from, so SSRF does not apply. |
| (the two anchors in `src/utils/content/readMdx.ts`; formerly 55180307 on `getContentofPage.tsx`, whose anchors were removed when it moved onto `readMdx`) `AIK_ts_generic_path_traversal` | `readMdx()` — the `join(baseDir, \`${slug}.mdx\`)` line and the `readFileSync(fullPath)` line | Sink detector: it fires on the path build and on the read whatever guard precedes them. | The containment check between the two lines throws before the read for any slug that resolves outside `baseDir`; verified with `..`, nested-`..` and `/../..` slugs, and with the leading-slash literals still reading. Re-open if `readMdx` gains a caller that bypasses `getStaticPaths`. |
| 70865029 (`FAQ.tsx`), 16462350 (`Properties.tsx`) — `AIK_react-dangerouslysetinnerhtml`, high 70 | the `dangerouslySetInnerHTML` props | Sink detector on any non-literal `__html`. | FAQ answers are hardcoded in `pages/awell-extensions/index.tsx`, `pages/awell-orchestration/developer-tools/api/e164-phone-validation.tsx` and `content/faq.mdx`; `<Properties>` is used only from `content/awell-extensions/docs/**/*.mdx`. All authored in this repository by Awell, rendered at build time. |
| 16462349 (`ExtensionDetail.tsx`) — `AIK_react-dangerouslysetinnerhtml`, high 70 | `extension.htmlDocs` | Same rule. | **The one non-repo source.** `pages/awell-extensions/marketplace/[...extensionKey].tsx` fetches `${NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT}${extensionKey}` server-side and renders `htmlDocs` from the response. The endpoint is Awell's own extension-server, which renders the HTML from the `awell-extensions` repository's markdown; the route parameter selects *which* extension, not the HTML. Trust chain is Awell-authored end to end. **If that endpoint ever serves third-party or user-authored markdown, sanitise here (e.g. `isomorphic-dompurify`) and drop this suppression.** |

All suppressions verified with `aikido_full_scan`: each anchor flags without its comment and is
clean with it.

## Repo-specific traps

- `// nosemgrep` works between JSX attributes (TSX allows line comments inside an opening tag),
  placed on the line immediately above the `dangerouslySetInnerHTML` attribute.
- `next lint` on `main` carries one pre-existing warning (`import/no-named-as-default` in
  `UseCasesComparisonTable.tsx`); `npx tsc --noEmit -p .` is the type-check.
