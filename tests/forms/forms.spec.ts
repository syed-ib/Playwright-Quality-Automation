import { test, expect } from '@playwright/test';
import { FormPage } from '../../pages/FormsPage';

// Correct path to your JSON file
const formData = require('../../test-data/formsdata.json');

test.describe('Forms', () => {

  test('User can fill basic form and submit successfully', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();

    // -------------------------------
    // Fill text fields
    // -------------------------------
    for (const label in formData.textFields) {
      await formPage.fillTextField(label, formData.textFields[label]);
    }

    // -------------------------------
    // Select radio button
    // -------------------------------
    await formPage.selectRadio(formData.radio);

    // -------------------------------
    // Select checkboxes
    // -------------------------------
    for (const checkbox of formData.checkboxes) {
      await formPage.selectCheckbox(checkbox);
    }

    // -------------------------------
    // Select dropdowns
    // -------------------------------
    for (const label in formData.dropdowns) {
      await formPage.selectDropdown(label, formData.dropdowns[label]);
    }

    // -------------------------------
    // Fill date fields
    // -------------------------------
    for (const placeholder in formData.dates) {
      await formPage.fillDateField(placeholder, formData.dates[placeholder]);
    }

    // -------------------------------
    // Submit the form
    // -------------------------------
    await formPage.submitForm(formData.submitContainer);

    // -------------------------------
    // Assertions: validate all inputs
    // -------------------------------
    for (const label in formData.textFields) {
      await expect(page.getByRole('textbox', { name: label })).toHaveValue(formData.textFields[label]);
    }

    await expect(page.getByRole('radio', { name: formData.radio, exact: true })).toBeChecked();

    for (const checkbox of formData.checkboxes) {
      await expect(page.getByRole('checkbox', { name: checkbox })).toBeChecked();
    }

    for (const label in formData.dropdowns) {
      const value = formData.dropdowns[label];
      if (label === 'Country:') {
        await expect(page.getByLabel(label)).toHaveValue(value);
      } else {
        await expect(page.getByRole('listbox', { name: label })).toHaveValue(value);
      }
    }

    for (const placeholder in formData.dates) {
      await expect(page.getByPlaceholder(placeholder)).toHaveValue(formData.dates[placeholder]);
    }

  });

});
