# Setup Guide – Classveew Test Automation

This guide explains how to set up the project on a new computer from zero.

## 1. Install the tools
1. **Node.js (LTS version)**: download from https://nodejs.org and install with the default options.
2. **VS Code**: download from https://code.visualstudio.com
3. **Git**: download from https://git-scm.com (GitHub Desktop is optional).

Check that they work. Open a terminal and run:
    node -v
    npm -v
    git --version
Each command should print a version number.

## 2. Tell Git who you are (one time only)
    git config --global user.name "Your Name"
    git config --global user.email "your.email@company.com"

## 3. Get the project
Clone the repository from the company GitHub organization, then open the folder in VS Code.

## 4. Install the project's tools
In the VS Code terminal (Terminal > New Terminal), inside the project folder, run:
    npm install
    npx playwright install
- `npm install` downloads everything listed in package.json into node_modules.
- `npx playwright install` downloads the browsers Playwright uses.

Note: do NOT run `npm init playwright`. That command was only used once to create the project.

## 5. Run the tests
    npx playwright test
When the run finishes, an HTML report opens in your browser. Press Ctrl + C in the terminal to close it.

## Troubleshooting
- **"running scripts is disabled on this system"** (Windows): this is a PowerShell security setting. Ask the team lead for help before changing it.