# AI Scratchpad

Append-only log of completed work. Never rewrite history.

---

## 2026-01-09 | Repository Initialization

**Summary:** Created workflow structure with required files.

**Changes:**
- Created README.md with project purpose and TODO
- Created AI_PLAN.md with branch map and template
- Created AI_SCRATCHPAD.md (this file)
- Established `main` → `dev` branch structure

**Key Decisions:**
- This repo is a workflow reference, not a specific application
- Tech stack will be determined when first real feature is implemented

**Known Issues / Follow-ups:**
- None

**Verification:**
- N/A (initial setup, no code to test)

---

## 2026-01-09 | feature/test-workflow

**Summary:** E2E test of the workflow - created simple `add()` utility with TDD.

**Changes:**
- Added `src/utils.js` with `add()` function
- Added `tests/utils.test.js` with unit tests
- Set up Jest test framework (`package.json`)

**Key Decisions:**
- Used Jest for testing (simple, widely used)
- Followed strict TDD: wrote failing test first, then implementation

**Known Issues / Follow-ups:**
- See "Issues Found" section below for workflow improvements identified

**Verification:**
```
npm test
PASS tests/utils.test.js
  add
    ✓ adds two numbers (1 ms)
    ✓ handles negative numbers
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```
