# Playwright Quality Automation Framework

## Overview
This is a **professional, high-quality automation framework** built using **Playwright + TypeScript**.

Features:

- Page Object Model (POM) for clean code
- Thin, reusable, and business-focused tests
- Non-flaky, stable automation
- Fully commented and GitHub-ready
- CI setup using GitHub Actions

---

## Features Implemented

### Core Features

- Alerts handling (Simple, Confirmation, Prompt)
- Forms (Text fields, Radio buttons, Checkboxes, Dropdowns, Datepickers)
- Checkboxes & Table Selection with Pagination
- Hover & Menu interactions
- Drag & Drop
- Slider interactions
- Custom Dropdowns
- Popups / Multiple Windows

---

## Project Structure

-pages/ – All Page Objects

-AlertPage.ts

-CheckboxPage.ts

-DragDropPage.ts

-DropdownPage.ts

-FormPage.ts

-MenuPage.ts

-PopupPage.ts

-SliderPage.ts

tests/ – All test specifications

-alerts/ → alerts.spec.ts

-checkboxes/ → checkboxes.spec.ts

-forms/ → forms.spec.ts

-menu/ → menu.spec.ts

-popups/ → popup.spec.ts

-widgets/ – Grouped widget tests

-dragdrop.spec.ts

-slider.spec.ts

-dropdown.spec.ts

.github/workflows/ – GitHub Actions workflow

-playwright.yml

Others

-.gitignore

-package.json

-playwright.config.ts

-README.md