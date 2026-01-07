import { test } from '@playwright/test';
import { PopupPage } from '../../pages/PopupPage';

test.describe('Popup Windows', () => {

  test('Verify both popup windows open with correct URLs', async ({ page }) => {
    const popupPage = new PopupPage(page);

    // Open the page
    await popupPage.open();

    // Verify the popups
    await popupPage.verifyPopups();
  });

});
