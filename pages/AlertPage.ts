import { Page } from '@playwright/test';

/**
 * AlertPage encapsulates all alert interactions.
 * Using the working code you already executed successfully.
 */
export class AlertPage {
  constructor(private page: Page) {}

  /** Open the page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /** Trigger Simple Alert (working code preserved) */
  async triggerSimpleAlert() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Simple Alert' }).click();
  }

  /** Trigger Confirmation Alert (working code preserved) */
  async triggerConfirmationAlert() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Confirmation Alert' }).click();
  }

  /** Trigger Prompt Alert (working code preserved) */
  async triggerPromptAlert() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Prompt Alert' }).click();
  }
}
