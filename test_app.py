from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:9000')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/tmp/test_v2.png', full_page=True)
    print("Screenshot saved to /tmp/test_v2.png")
    browser.close()