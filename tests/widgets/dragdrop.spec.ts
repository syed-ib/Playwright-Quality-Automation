import { test } from '@playwright/test';
import { DragDropPage } from '../../pages/DragDropPage';

test.describe('Drag and Drop', () => {

  test('User can drag item to target', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);

    // Open the page
    await dragDropPage.open();

    // Perform drag-and-drop
    await dragDropPage.dragItemToTarget();
  });

});
