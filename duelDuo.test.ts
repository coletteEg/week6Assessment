
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("draw button", async () => {
    await driver.findElement(By.id('draw')).click()
    let choice = await driver.findElement(By.id('choices'))
    let displayed = await choice.isDisplayed()
    expect(displayed).toBe(true)
})

// test("removes", async () => {
//     await driver.findElement(By.id('draw')).click()
//     await driver.findElement(By.css(".bot-btn")).click()

// })