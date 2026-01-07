import { test } from '@playwright/test';
import { AlertPage } from '../../pages/AlertPage';

test.describe('Alerts', () => {

  test('User can handle all alert types', async ({ page }) => {
    const alertPage = new AlertPage(page);

    await alertPage.open();

    await alertPage.triggerSimpleAlert();
    await alertPage.triggerConfirmationAlert();
    await alertPage.triggerPromptAlert();
  });

});
