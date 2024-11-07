import {test , expect} from '@playwright/test'
import {NavigationPage} from '../Page-objects/NavigationPage'

test.beforeEach("open URL", async ({ page }) => {
    await page.goto("http://localhost:8888/");
})

test("Navigate to Form Page" , async  ({ page }) => {
        const navigateto = new NavigationPage(page);
       await  navigateto.FormLayoutPage();

    })
