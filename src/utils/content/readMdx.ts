import fs from 'fs'
import { isAbsolute, join, relative } from 'path'

/**
 * Read `<slug>.mdx` from `baseDir`, refusing any slug that resolves outside it.
 *
 * Every content util builds its path from a route slug; the pages that call
 * them use `fallback: false`, so at build time the slug is always one that
 * `getAllDocs()` listed. This keeps that true if a caller ever changes.
 * `join` (not `resolve`) on purpose: two call sites pass slugs with a leading
 * slash ('/faq', '/system-status'), which `join` keeps under `baseDir`.
 */
export const readMdx = (baseDir: string, slug: string): string => {
  // The rule flags the path build as well as the read; both are covered by the
  // containment check that follows. Register: docs/standards/sast-finding-remediation.md
  // nosemgrep: AIK_ts_generic_path_traversal
  const fullPath = join(baseDir, `${slug}.mdx`)
  const rel = relative(baseDir, fullPath)
  if (rel === '' || rel.startsWith('..') || isAbsolute(rel)) {
    throw new Error(`Refusing to read "${slug}": it resolves outside ${baseDir}`)
  }
  // nosemgrep: AIK_ts_generic_path_traversal
  return fs.readFileSync(fullPath, 'utf-8')
}
