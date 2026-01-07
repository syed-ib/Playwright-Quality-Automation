import { test, expect } from '@playwright/test';
import { AlertPage } from '../../pages/AlertPage';

/**
 * Grouping all alert tests together
 * Test suite name clearly describes the feature
 */
test.describe('Alerts', () => {

  /**
   * Test: User can handle all alert types
   * - Simple Alert
   * - Confirmation Alert
   * - Prompt Alert
   */
  test('User can handle all alert types', async ({ page }) => {
    // Initialize Page Object
    const alertPage = new AlertPage(page);

    // Navigate to the page
    await alertPage.open();

    // --- Simple Alert ---
    const simpleAlertText = await alertPage.triggerSimpleAlert();
    // Validate the alert message contains expected text
    expect(simpleAlertText).toContain('simple');

    // --- Confirmation Alert ---
    const confirmAlertText = await alertPage.triggerConfirmationAlert();
    expect(confirmAlertText).toContain('confirm');

    // --- Prompt Alert ---
    const promptAlertText = await alertPage.triggerPromptAlert();
    expect(promptAlertText).toContain('prompt');
  });
});
