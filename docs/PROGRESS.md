# Progress – Classveew Test Automation

## Status
Current step: Step 3b – Make Playwright read the .env file

## Done
- [x] Step 1: Machine setup (Node.js LTS, VS Code, Git) – confirmed installed on Windows
- [x] Step 2: Playwright project initialized in the repo – sample tests ran: 4 passed
- [x] Step 3a: Created .env (private, gitignored) and .env.example (public template). Confirmed .env is NOT tracked by Git.

## Next
- [ ] Step 3b: Make Playwright read the .env file
- [ ] Step 4: Project structure (Page Object Model)
- [ ] Step 5: Login setup for every role
- [ ] Step 6: Smoke tests
- [ ] Step 7: Role-access (RBAC) tests
- [ ] Step 8: Main feature tests
- [ ] Step 9: Reliable local runs
- [ ] Step 10: GitHub Actions (including adding GitHub Secrets)
- [ ] Step 11: Daily schedule + failure notifications
- [ ] Step 12: Daily monitoring
- [ ] Step 13: Continuous improvement

## Decisions made
- Language: TypeScript
- Test folder: `tests/`
- Did NOT add the installer's GitHub Actions workflow. We will build our own in Step 10.
- `node_modules/` is never committed. Teammates run `npm install` instead.
- The sample test (`tests/example.spec.ts`) tests Playwright's website, not Classveew. It will be removed later.
- Credentials live only in `.env` (local) and GitHub Secrets (CI). Never in code, docs, or chat.
- `.env.example` lists the needed variables with empty values: BASE_URL plus USERNAME/PASSWORD for Super Admin, Admin, Teacher, Guardian, Student.
- `/playwright/.auth/` (saved login sessions) is gitignored because it contains login cookies.
- GitHub Secrets will be set up in Step 10, when we build the CI workflow.

## What we know about Classveew
Nothing recorded yet. We will only write down what we actually see in the test environment.
- Test environment URL: stored in `.env` as BASE_URL
- Login: (to be filled in)
- Main modules: (to be filled in)
- Roles in scope: Super Admin, Admin, Teacher, Guardian, Student