# Progress – Classveew Test Automation

## Status
Current step: Step 3 – Credentials (.env locally, GitHub Secrets in CI)

## Done
- [x] Step 1: Machine setup (Node.js LTS, VS Code, Git) – confirmed installed on Windows
- [x] Step 2: Playwright project initialized in the repo – sample tests ran: 4 passed

## Next
- [ ] Step 3: Credentials – .env file locally (gitignored), GitHub Secrets for CI
- [ ] Step 4: Project structure (Page Object Model)
- [ ] Step 5: Login setup for every role
- [ ] Step 6: Smoke tests
- [ ] Step 7: Role-access (RBAC) tests
- [ ] Step 8: Main feature tests
- [ ] Step 9: Reliable local runs
- [ ] Step 10: GitHub Actions
- [ ] Step 11: Daily schedule + failure notifications
- [ ] Step 12: Daily monitoring
- [ ] Step 13: Continuous improvement

## Decisions made
- Language: TypeScript
- Test folder: `tests/`
- Did NOT add the installer's GitHub Actions workflow. We will build our own in Step 10.
- `node_modules/` is never committed. Teammates run `npm install` instead.
- The sample test (`tests/example.spec.ts`) tests Playwright's website, not Classveew. It will be removed later.

## What we know about Classveew
Nothing recorded yet. We will only write down what we actually see in the test environment.
- Test environment URL: (to be filled in)
- Login: (to be filled in)
- Main modules: (to be filled in)
- Roles in scope: Super Admin, Admin, Teacher, Guardian, Student