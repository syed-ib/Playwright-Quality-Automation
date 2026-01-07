import { test } from '@playwright/test';
import { MenuPage } from '../../pages/MenuPage';

test.describe('Menu & Hover interactions', () => {

  test('User can hover over menu and navigate', async ({ page }) => {
    const menuPage = new MenuPage(page);

    // Open the page
    await menuPage.open();

    // Perform hover and navigation
    await menuPage.hoverAndNavigate();
  });

});
