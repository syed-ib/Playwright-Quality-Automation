import { test, expect } from '@playwright/test';
import { FormPage } from '../../pages/FormPage';

test.describe('Forms', () => {

  test('User can fill basic form and submit successfully', async ({ page }) => {
    const formPage = new FormPage(page);

    // Open the page
    await formPage.open();

    // Fill text fields
    await formPage.fillTextField('Enter Name', 'Ali');
    await formPage.fillTextField('Enter Email', 'ali@test.com');
    await formPage.fillTextField('Enter Phone', '1234567890');
    await formPage.fillTextField('Address', 'test address');

    // Select radio button
    await formPage.selectRadio('Male');

    // Select checkbox
    await formPage.selectCheckbox('Monday');

    // Select dropdowns
    await formPage.selectDropdown('Country:', 'Canada');
    await formPage.selectDropdown('colors', 'Red');
    await formPage.selectDropdown('Sorted List', 'Lion');

    // Fill date fields
    await formPage.fillDateField('Start Date', '2025-08-21');
    await formPage.fillDateField('End Date', '2026-05-21');

    // Submit the form
    await formPage.submitForm('#post-body-1307673142697428135');
  });

});
