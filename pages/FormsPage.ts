import { Page, expect } from '@playwright/test';

/**
 * FormPage encapsulates all form interactions on the test site
 * Principles:
 * - Keep locators in one place
 * - Keep tests clean and business-focused
 * - Stable, non-flaky interactions
 */
export class FormPage {
  constructor(private page: Page) {}

  /** Navigate to the main page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /** Fill a single text field by accessible name */
  async fillTextField(label: string, value: string) {
    await this.page.getByRole('textbox', { name: label }).fill(value);
  }

  /** Select a radio button by accessible name */
  async selectRadio(name: string) {
    await this.page.getByRole('radio', { name, exact: true }).check();
  }

  /** Select a checkbox by accessible name */
  async selectCheckbox(name: string) {
    await this.page.getByRole('checkbox', { name }).check();
  }

  /** Select an option from a dropdown by label */
  async selectDropdown(label: string, value: string) {
    await this.page.getByLabel(label).selectOption(value);
  }

  /** Submit the form inside a container element */
  async submitForm(containerSelector: string) {
    const container = this.page.locator(containerSelector);
    await container.getByRole('button', { name: 'Submit' }).click();
  }

  /** Fill placeholders for date fields */
  async fillDateField(placeholder: string, value: string) {
    await this.page.getByPlaceholder(placeholder).fill(value);
  }

  // /** Navigate calendar to a specific year and month, then select a day */
  // async selectDateInCalendar(targetYear: number, targetMonth: string, day: string) {
  //   const title = this.page.locator('.ui-datepicker-title');
    
  //   await expect(title).toBeVisible();

  //   // Move until correct year
  //   while (!(await title.textContent())?.includes(targetYear.toString())) {
  //     await this.page.locator('.ui-datepicker-next').click();
  //   }

  //   // Move until correct month
  //   while (!(await title.textContent())?.toLowerCase().includes(targetMonth.toLowerCase())) {
  //     await this.page.locator('.ui-datepicker-next').click();
  //   }

  //   // Select day
  //   await this.page.getByRole('link', { name: day, exact: true }).click();
  // }
}
