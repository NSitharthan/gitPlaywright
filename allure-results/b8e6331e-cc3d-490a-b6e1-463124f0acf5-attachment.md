# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.js >> Handling Frames
- Location: tests\frames.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//a[@class="analytic"])[2]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18] [cursor=pointer]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e41]:
    - generic [ref=e45]:
      - list [ref=e48]:
        - listitem [ref=e49]:
          - link "Single Iframe" [ref=e50]:
            - /url: "#Single"
        - listitem [ref=e51]:
          - link "Iframe with in an Iframe" [ref=e52] [cursor=pointer]:
            - /url: "#Multiple"
      - iframe [active] [ref=e54]: <p>Your browser does not support iframes.</p>
    - generic [ref=e56]:
      - insertion [ref=e59]:
        - generic [ref=e62]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e64]: Discover more
          - link "Learn to Code" [ref=e65] [cursor=pointer]
          - link "Source Robotics" [ref=e70] [cursor=pointer]
          - link "Try Dev Tools" [ref=e75] [cursor=pointer]
          - link "Try Cloud Tools" [ref=e80] [cursor=pointer]
          - link "Compare Browsers" [ref=e85] [cursor=pointer]
          - link "Try CMS Tools" [ref=e90] [cursor=pointer]
          - link "Binge Hit Series" [ref=e95] [cursor=pointer]
          - link "Compare TVs" [ref=e100] [cursor=pointer]
      - insertion [ref=e107]:
        - generic [ref=e110]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e112]: Discover more
          - link "Learn to Code" [ref=e113] [cursor=pointer]
          - link "Source Robotics" [ref=e118] [cursor=pointer]
          - link "Try Dev Tools" [ref=e123] [cursor=pointer]
          - link "Try Cloud Tools" [ref=e128] [cursor=pointer]
          - link "Compare Browsers" [ref=e133] [cursor=pointer]
          - link "Try CMS Tools" [ref=e138] [cursor=pointer]
          - link "Compare TVs" [ref=e143] [cursor=pointer]
          - link "Binge Hit Series" [ref=e148] [cursor=pointer]
      - insertion [ref=e155]:
        - generic [ref=e158]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e160]: Discover more
          - link "Compare Broadband" [ref=e161] [cursor=pointer]
          - link "Try Web Tools" [ref=e166] [cursor=pointer]
          - link "Read Ethics Books" [ref=e171] [cursor=pointer]
          - link "Know Your Rights" [ref=e176] [cursor=pointer]
          - link "Learn to Code" [ref=e181] [cursor=pointer]
          - link "Source Robotics" [ref=e186] [cursor=pointer]
          - link "Try Cloud Tools" [ref=e191] [cursor=pointer]
          - link "Try Dev Tools" [ref=e196] [cursor=pointer]
      - insertion [ref=e203]:
        - generic [ref=e206]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e208]: Discover more
          - link "Compare Browsers" [ref=e209] [cursor=pointer]
          - link "Try CMS Tools" [ref=e214] [cursor=pointer]
          - link "Compare TVs" [ref=e219] [cursor=pointer]
          - link "Binge Hit Series" [ref=e224] [cursor=pointer]
          - link "Compare Broadband" [ref=e229] [cursor=pointer]
          - link "Try Web Tools" [ref=e234] [cursor=pointer]
          - link "Read Ethics Books" [ref=e239] [cursor=pointer]
          - link "Know Your Rights" [ref=e244] [cursor=pointer]
      - generic [ref=e252]:
        - generic [ref=e253]:
          - text: "\"@ 2016\""
          - link "Automation Testing" [ref=e254] [cursor=pointer]:
            - /url: "#"
          - text: "\"All Rights Reserved.\""
        - generic [ref=e255]:
          - link "" [ref=e256] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
          - link "" [ref=e258] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
          - link "" [ref=e260] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
          - link "" [ref=e262] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
          - link "" [ref=e264] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Handling Frames', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://demo.automationtesting.in/Frames.html');
  6  | 
  7  |   const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]');
  8  | 
  9  |   await singleFrame.locator('//input[@type="text"]').fill('Handled SingleFrame');
  10 | 
> 11 |   await page.locator('(//a[@class="analytic"])[2]').click();
     |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  12 | 
  13 |   const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]');
  14 | 
  15 |   const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]');
  16 | 
  17 |   await innerFrame.locator('//input[@type="text"]').fill('Handled Nested Frame');
  18 | 
  19 |   await page.waitForTimeout(50000)
  20 |   
  21 | })
```