<img src="https://avatars.githubusercontent.com/u/145163861" alt="Ashiqur Rahman" width="120" align="right">

# Ashiqur Rahman

### I build iOS apps for about a hundred million people.

Seven years of it. Most recently Muslim Pro, where I moved the Quran from UIKit
to SwiftUI. I tend to end up with the parts other people would rather not
touch — migrations, monetization plumbing, the screen everybody is afraid to
break.

Dhaka, Bangladesh. Open to remote work (UTC+6).

**[theashiq.github.io](https://theashiq.github.io)** &nbsp;·&nbsp;
[CV](Ashiqur-Rahman-CV.pdf) &nbsp;·&nbsp;
[LinkedIn](https://linkedin.com/in/theashiq) &nbsp;·&nbsp;
[LeetCode](https://leetcode.com/theashiq) &nbsp;·&nbsp;
[ashiqur.rahman@hotmail.com](mailto:ashiqur.rahman@hotmail.com)

---

## Selected work

### 01 — Lazy Staggered Grid
Muslim Pro's Inspiration feed wanted a Pinterest-style masonry layout. SwiftUI
doesn't ship one, and the iOS versions we still supported didn't even have
`LazyVGrid`. So I wrote the layout myself, with pluggable chunking strategies so
the balancing rule could change without touching a single call site — then
lifted it out of the app and open-sourced it. It runs in production.

`Swift` `SwiftUI` `SPM` — [GitHub ↗](https://github.com/theashiq/LazyStaggeredGrid)

### 02 — The Quran, rebuilt in SwiftUI
I was first on the team to ship production SwiftUI, bridging new screens into a
large existing UIKit navigation stack through `UIHostingController`. Then I took
on the Quran itself. The reader page is the most-used surface in the whole app,
so I deliberately left it for last and migrated everything around it first — the
unglamorous sequencing call that kept the risky part from becoming everybody's
problem.

`Swift` `SwiftUI` `UIKit` — Muslim Pro, 100M+ installs — [App Store ↗](https://apps.apple.com/us/app/muslim-pro-quran-athan-prayer/id388389451)

### 03 — Tripling ad revenue in three months
Our mediation wasn't filling well, so I wrote our own waterfall layer. Shipping
it straight to the flagship would have been reckless, so it went out in phases —
smallest titles first, then mid-tier, then the games that actually paid the
bills. Three months later the ad revenue had tripled.

`AdMob` `AppLovin` `Meta Audience Network` `Tenjin` — Free Pixel Games

### 04 — One framework, twenty-plus titles
Every new game re-integrated the same handful of SDKs by hand, badly and
slightly differently each time. I built one integration layer for all of it and
moved the studio's titles onto it. A new game went from days of plumbing to
roughly two hours. Where an engine had no support, I wrote the bridge —
Objective-C wrappers with C# interop, Android plugins in Java, and post-build
Xcode and `Info.plist` configuration that ran itself.

`C#` `Objective-C` `Java` `StoreKit` `Google Play Billing` — Free Pixel Games

### 05 — Ummah Pro
A community layer inside a prayer app — posts, comments, reactions, sharing,
profiles, enrollment. Mostly UIKit, with SwiftUI where it earned its place. I
also built the Quran reading history and duration tracking, the Qalbox Courses
rails, and the whole search experience for the Dua feature.

`Swift` `UIKit` `SwiftUI` — Muslim Pro

### 06 — Picasso Pro
A text-to-image app built twice — once in SwiftUI, once in UIKit — so I could
feel the difference between them rather than argue about it.

`Swift` `SwiftUI` `UIKit` `Stable Diffusion API` —
[SwiftUI ↗](https://github.com/theashiq/PicassoPro) ·
[UIKit ↗](https://github.com/theashiq/PicassoProUIKit)

### 07 — Games, on both stores
Police vs. Thief 3D, Sea Monster City, Shark Attack, Jurassic Sniper. I built
the monetization, the analytics and the native iOS side of these — widgets, push
and local notifications, in-app search, review prompts, haptics, StoreKit and
Play Billing.

`Unity` `Cocos2d-x` `C#` `Objective-C` `Java` —
[Police vs. Thief ↗](https://apps.apple.com/us/app/police-vs-thief-3d-car-race/id1542502766) ·
[Sea Monster City ↗](https://apps.apple.com/us/app/sea-monster-city-battle-game/id1051258383) ·
[Shark Attack ↗](https://apps.apple.com/us/app/shark-attack-simulator-games/id1489941954) ·
[Jurassic Sniper ↗](https://apps.apple.com/us/app/jurassic-sniper-3d/id1535441769)

### 08 — Privy
Opens a link — or whatever text you've selected — straight into a private tab.
Tiny, and I use it constantly.

`JavaScript` — [GitHub ↗](https://github.com/theashiq/Privy)

### Smaller things
[Private Search](https://addons.mozilla.org/en-US/firefox/addon/privatesearchpro/) —
the same idea as Privy, as a Firefox add-on ·
[RockPaperScissors](https://github.com/theashiq/RockPaperScissors) — online
multiplayer, SwiftUI ·
[Task Master](https://github.com/theashiq/TaskMasterUIKit) — task tracking and
reminders, UIKit

---

## About

Most of what I do lives in the seams — bridging a legacy completion-handler API
to `async/await`, getting a SwiftUI view to sit convincingly inside a UIKit
stack, working out which half of a migration to ship first. It's rarely the part
anyone demos, and it's usually the part that decides whether the demo works.

I've spent most of my career on apps with a lot of people on the other end of
them, which has made me conservative about risk and stubborn about the small
stuff. I use Claude Code and Gemini CLI daily, mostly to get to the interesting
decisions faster.

Before iOS I shipped games, which is where I learned to care about frame budgets
and about how quickly a bad integration compounds.

**Where** &nbsp; Bitsmedia — Muslim Pro · 2024–26 &nbsp;·&nbsp; Free Pixel Games · 2018–24

**Studied** &nbsp; BSc Computer Science & Engineering, United International University · 2018 · CGPA 3.78/4.00

**Wrote** &nbsp; [PRESa2i: incremental decision trees for predicting A-to-I RNA editing sites ↗](https://f1000research.com/articles/9-262) · F1000Research, 2020

**Reach for** &nbsp; Swift · SwiftUI · UIKit · Swift Concurrency · Combine · StoreKit · WidgetKit · Firebase · Fastlane · Unity

The full formal record — every role, every responsibility — lives in
[the CV](Ashiqur-Rahman-CV.pdf).

---

## This repo

The site itself: hand-written HTML, CSS and JavaScript, no framework and no
build step. Open `index.html` and it runs.

| | |
|---|---|
| `index.html` | the whole page |
| `style.css` | warm paper and ink, one accent, light and dark |
| `script.js` | theme toggle, scroll reveals, clipboard — no dependencies |

Type is [Fraunces](https://fonts.google.com/specimen/Fraunces),
[Inter](https://fonts.google.com/specimen/Inter) and
[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono). The theme
follows your system until you pick one, then remembers. Motion is skipped
entirely under `prefers-reduced-motion`, and the page stays readable with
JavaScript or the webfonts blocked. Deployed with GitHub Pages.
