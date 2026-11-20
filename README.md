# news-image-20261119-bot

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/NubbiesSec1337/news-image-20261119-bot/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/NubbiesSec1337/news-image-20261119-bot/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A dense newspaper front page summing up Thursday 19 November 2026 in one
1024x1024 image: 33 stories across six regions, led by the Trump–Xi–Putin
summit in Shenzhen, the ICJ's Rohingya genocide ruling against Myanmar, and
COP31 in Antalya — plus a world map with numbered pins, a 20-item day-in-brief
list, and a date check that names the big stories left out because they were
first reported on other days.

## Run it

```sh
node main.ts
```

Writes `/output/entry.png` (PNG, 1024x1024, under 1 MiB). The program only
copies the finished image the repository holds, so two runs write identical
bytes. No network.

## How the image was made

`page.html` is the front page as HTML with inline SVG illustrations drawn by
hand in code (summit table with three flags, ICJ courthouse and scales,
COP31 thermometer, cyclone spiral, and the rest), screenshotted to
`entry.png` with Puppeteer + stock Chromium.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dvpy2ses&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
