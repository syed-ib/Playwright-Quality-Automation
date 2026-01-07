import { test } from '@playwright/test';
import { DropdownPage } from '../../pages/DropdownPage';

test.describe('Dropdown Widget', () => {

  test('User can select an item from custom dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    // Open the page
    await dropdownPage.open();

    // Select "Item 1" from the dropdown (already working)
    await dropdownPage.selectDropdownItem('Item 1');
  });

});
