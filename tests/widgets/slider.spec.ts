import { test } from '@playwright/test';
import { SliderPage } from '../../pages/SliderPage';

test.describe('Slider Interaction', () => {

  test('User can move slider handles', async ({ page }) => {
    const sliderPage = new SliderPage(page);

    // Open the page
    await sliderPage.open();

    // Move slider handles
    await sliderPage.moveSlider();
  });

});
