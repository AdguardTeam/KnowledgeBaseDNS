const fs = require('fs/promises');
const path = require('path');

// Live changelog fetched at build time and copied into the output as a
// same-origin static file. Hosts without the /api rewrite (e.g. PR previews
// on Cloudflare Pages) serve this copy so the ApiChangelog component still
// works. The copy lives at a separate path so the prod rewrite of
// /api/CHANGELOG.md keeps serving the live file.
const CHANGELOG_URL = 'https://adguard-dns.io/api/CHANGELOG.md';
const OUTPUT_REL_PATH = 'api/CHANGELOG.static.md';

module.exports = function apiChangelogStatic() {
  return {
    name: 'api-changelog-static',
    async postBuild({outDir}) {
      try {
        const response = await fetch(CHANGELOG_URL);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const outputPath = path.join(outDir, OUTPUT_REL_PATH);
        await fs.mkdir(path.dirname(outputPath), {recursive: true});
        await fs.writeFile(outputPath, await response.text());
      } catch (error) {
        // Non-fatal: without the copy, hosts lacking the rewrite fall back to
        // the error UI with a link to the original changelog.
        console.warn(
          `[api-changelog-static] failed to fetch ${CHANGELOG_URL}: ${error.message}`,
        );
      }
    },
  };
};
