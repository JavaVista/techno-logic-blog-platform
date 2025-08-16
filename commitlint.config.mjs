// commitlint.config.mjs
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // enforce common types
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert'
      ]
    ],
    // require a scope for ALL commits
    'scope-empty': [2, 'never'],
    // limit header length
    'header-max-length': [2, 'always', 100],
    // optional: keep type lowercase
    'type-case': [2, 'always', 'lower-case'],
    // optional: keep scope lowercase (use hyphens for multi-words)
    'scope-case': [2, 'always', 'lower-case'],
    // optional: recommended subject style (sentence-case or lower-case)
    'subject-case': [0],
  },
  // helpful guardrails: allowed scopes for this repo
  // (adjust any time—commitlint will guide you if you use a different one)
  prompt: {
    questions: {
      scope: {
        description: 'Select the scope area this change affects',
        enum: {
          setup: { description: 'Repo/bootstrap/config scaffolding' },
          frontend: { description: 'Angular app' },
          cms: { description: 'Strapi API/CMS' },
          infra: { description: 'GCP/Docker/Cloud Run/SQL' },
          pwa: { description: 'Service Worker/installability/offline' },
          seo: { description: 'Meta/OG/structured data/SSR/prerender' },
          docs: { description: 'README/ADRs(Architecture Decision Records)/runbooks' },
          tests: { description: 'Unit/E2E/config' },
          security: { description: 'CSP/CORS/headers/secrets' },
          i18n: { description: 'Internationalization/localization' },
          ci: { description: 'GitHub Actions/CI/CD' }
        }
      }
    }
  }
};
