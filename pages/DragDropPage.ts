import { Page, expect } from '@playwright/test';

/**
 * DragDropPage handles drag-and-drop interactions.
 */
export class DragDropPage {
  constructor(private page: Page) {}

  /** Open the page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Perform drag-and-drop from draggable to droppable
   * Preserves working locators from your script
   */
  async dragItemToTarget() {
    const draggable = this.page.locator('#draggable');
    const droppable = this.page.locator('#droppable');

    // Perform drag and drop
    await draggable.dragTo(droppable);

    // Assertion: Verify the drop was successful
    await expect(droppable).toContainText('Dropped');
  }
}
