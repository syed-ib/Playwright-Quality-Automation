import { test } from '@playwright/test';
import { CheckboxPage } from '../../pages/CheckboxPage';

test.describe('Checkboxes', () => {

  test('User can select multiple checkboxes across pages', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    // Open the page
    await checkboxPage.open();

    // Perform checkbox selections
    await checkboxPage.selectCheckboxes();
  });

});
