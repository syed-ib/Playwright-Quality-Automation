import { Page, expect } from '@playwright/test';

/**
 * SliderPage handles slider interactions on the page.
 */
export class SliderPage {
  constructor(private page: Page) {}

  /** Open the page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Move min and max handles of the slider and verify range
   */
  async moveSlider() {
    const handles = this.page.locator('#slider-range .ui-slider-handle');

    const minHandle = handles.nth(0);
    const maxHandle = handles.nth(1);

    // Move min handle to the right
    await minHandle.focus();
    await this.page.keyboard.press('ArrowRight');
    await this.page.keyboard.press('ArrowRight');

    // Move max handle to the left
    await maxHandle.focus();
    await this.page.keyboard.press('ArrowLeft');
    await this.page.keyboard.press('ArrowLeft');

    // Verify the slider range is visible
    const range = this.page.locator('#slider-range .ui-slider-range');
    await expect(range).toBeVisible();
  }
}
