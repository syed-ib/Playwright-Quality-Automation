import { test } from '@playwright/test';
import { FormPage } from '../../pages/FormsPage';

// Correct path to your JSON file
const formData = require('../../test-data/formsdata.json');

test.describe('Forms', () => {

  test('User can fill basic form and submit successfully', async ({ page }) => {
    // Declare formPage inside the test block (scope-safe)
    const formPage = new FormPage(page);

    await formPage.open();

    // Fill text fields
    for (const label in formData.textFields) {
      await formPage.fillTextField(label, formData.textFields[label]);
    }

    // Select radio button
    await formPage.selectRadio(formData.radio);

    // Select checkboxes
    for (const checkbox of formData.checkboxes) {
      await formPage.selectCheckbox(checkbox);
    }

    // Select dropdowns
    for (const label in formData.dropdowns) {
      await formPage.selectDropdown(label, formData.dropdowns[label]);
    }

    // Fill date fields
    for (const placeholder in formData.dates) {
      await formPage.fillDateField(placeholder, formData.dates[placeholder]);
    }

    // Submit the form
    await formPage.submitForm(formData.submitContainer);
  });

});
