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
| 16462346 (sast, high 70) `AIK_js_insecure-document-method` | `src/utils/string/stripHtml.ts` (`tmp.innerHTML = html`) | **Deleted.** The helper had no callers (`git grep stripHtml` found only its own export); dead code is the cheapest sink to remove. |
| 385950590, 385950591 (leaked_secret, high 70) "authorization token in a curl header" | `content/awell-orchestration/api-reference/overview/{requests-and-responses,authorization}.mdx` | The placeholder `-H 'apiKey: YOUR_API_KEY'` became `-H "apiKey: $AWELL_API_KEY"`: an environment-variable reference, which is also the shape a reader should copy. No key was ever present. The local scanner does not run this rule, so the close is expected on the next platform scan rather than proven. |

## Suppressed in code (`// nosemgrep`)

| Finding | Where | Why the rule fires | Why it is safe |
| --- | --- | --- | --- |
| 55180307 (sast, high 70) `AIK_ts_generic_path_traversal` | `src/utils/content/getContentofPage.tsx`, `join(API_REFERENCE_PATH, \`${slug}.mdx\`)` and the `readFileSync` below it | Sink detector on a path built from a parameter. | `getPageContent` has two call sites, `pages/faq.tsx` and `pages/system-status.tsx`, and both pass a **string literal** (`'/faq'`, `'/system-status'`) from `getStaticProps` at build time. No route parameter or request reaches it. Two anchors (the `join` and the read), both suppressed. |
| 70865029 (`FAQ.tsx`), 16462350 (`Properties.tsx`) — `AIK_react-dangerouslysetinnerhtml`, high 70 | the `dangerouslySetInnerHTML` props | Sink detector on any non-literal `__html`. | FAQ answers are hardcoded in `pages/awell-extensions/index.tsx`, `pages/awell-orchestration/developer-tools/api/e164-phone-validation.tsx` and `content/faq.mdx`; `<Properties>` is used only from `content/awell-extensions/docs/**/*.mdx`. All authored in this repository by Awell, rendered at build time. |
| 16462349 (`ExtensionDetail.tsx`) — `AIK_react-dangerouslysetinnerhtml`, high 70 | `extension.htmlDocs` | Same rule. | **The one non-repo source.** `pages/awell-extensions/marketplace/[...extensionKey].tsx` fetches `${NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT}${extensionKey}` server-side and renders `htmlDocs` from the response. The endpoint is Awell's own extension-server, which renders the HTML from the `awell-extensions` repository's markdown; the route parameter selects *which* extension, not the HTML. Trust chain is Awell-authored end to end. **If that endpoint ever serves third-party or user-authored markdown, sanitise here (e.g. `isomorphic-dompurify`) and drop this suppression.** |

All suppressions verified with `aikido_full_scan`: each anchor flags without its comment and is
clean with it.

## Repo-specific traps

- `// nosemgrep` works between JSX attributes (TSX allows line comments inside an opening tag),
  placed on the line immediately above the `dangerouslySetInnerHTML` attribute.
- `next lint` on `main` carries one pre-existing warning (`import/no-named-as-default` in
  `UseCasesComparisonTable.tsx`); `npx tsc --noEmit -p .` is the type-check.
