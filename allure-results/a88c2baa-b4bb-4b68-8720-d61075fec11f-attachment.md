# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boring.spec.js >> Make My Trip
- Location: tests\boring.spec.js:3:5

# Error details

```
Error: page.goto: NS_ERROR_NET_RESET
Call log:
  - navigating to "https://www.makemytrip.com/", waiting until "load"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Secure Connection Failed" [level=1] [ref=e7]
    - paragraph [ref=e8]: The page you are trying to view cannot be shown because the authenticity of the received data could not be verified.
    - generic [ref=e9]:
      - heading "What can you do about it?" [level=3] [ref=e10]
      - paragraph [ref=e11]: The issue is most likely with the website, and there is nothing you can do to resolve it. You can notify the website’s administrator about the problem.
```