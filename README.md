> [!WARNING]  
> We have only 1 official domain: is itamaesan.org, anything else is non official.

![ITAMAESAN SushiJS Wallpaper Best Light NNextJS Framework with Husky fixed](https://raw.githubusercontent.com/itamaesanorg/presskit/main/SushiJS.png)

# 🍣 Sushis Framework aka SushiJS

A revolutionary framework blending Typescript, NextJS, TailwindCSS, and Framer Motion, founded on Agile principles. Introducing **NRNx2** — the evolution of Next Right Now. Crafted by the brilliant Harvard University student of Project Management, Miguel Gargallo, [@miguelgargallo](https://github.com/miguelgargallo). Brought to you by [ITAMAESAN ORG](https://itamaesan.org) — leading the development industry with Agile and Project Management methodologies.

![The main idea](./docs/assets/screens/structure.png)

## Thanks Letter

Our growth from August 2022 to May 2023 has been inspiring. With "sushis" averaging 273 monthly users and "sushis-demo" at 413 monthly users, we're thrilled by the community's support. Our commitment remains strong; we're scheduling regular bi-annual updates to ensure top-notch user experiences. See more about [Numbers](./docs/Numbers.md) and [Updates](./docs/UPDATES.md).

In 2022 alone, combined downloads for Sushi's software and Sushi's Demo exceeded 9815. The momentum continued into early 2023, with 4120 downloads for Sushi's software and 8250 for Sushi's Demo. This brings our total downloads to an impressive 12370.

We're also proud to note that our regular six-month update rhythm has positioned us as a reliable and comprehensive framework. For a detailed breakdown, please refer to the Downloads section.

## Table of Contents
- [🍣 Sushis Framework aka SushiJS](#-sushis-framework-aka-sushijs)
  - [Thanks Letter](#thanks-letter)
  - [Table of Contents](#table-of-contents)
  - [npm](#npm)
  - [🌟 Features](#-features)
  - [In this Update](#in-this-update)
    - [Agile with NextJS](#agile-with-nextjs)
    - [Introducing Next Right Now 2 (NRNx2)](#introducing-next-right-now-2-nrnx2)
  - [Introduction to Common Internet Language also CIL](#introduction-to-common-internet-language-also-cil)
  - [NRNx2 Agile by ITAMAESAN](#nrnx2-agile-by-itamaesan)
  - [🚀 Getting Started](#-getting-started)
    - [Installation](#installation)
    - [Basic Usage](#basic-usage)
    - [Folder Structure](#folder-structure)
  - [Why NRNx2](#why-nrnx2)
  - [Directories](#directories)
    - [HowTo](#howto)
  - [About LTS (Long Term Support)](#about-lts-long-term-support)
    - [What is the difference between LTS and Minor versions?](#what-is-the-difference-between-lts-and-minor-versions)
    - [The Continuum LTS (Long Term Support) Schedule](#the-continuum-lts-long-term-support-schedule)
  - [🤝 Contribute](#-contribute)
  - [📜 License](#-license)

## npm

```bash
npm i sushis
```

* If you came from < 3.0.0 Adapt the code documentation section is [here](./docs/Adapt.md)

## 🌟 Features

- **✨ Typescript**: Robust static typing for JS.
- **📘 NextJS**: Seamless server-side rendering.
- **🌗 TailwindCSS**: Highly customizable utility-first CSS.
- **😶‍🌫️ Framer Motion**: Smooth animations.
- **🦄 Favicons**: Rich and dynamic favicon support.
- **📱 Responsive Nav**: Fluid navigation across devices.
- **🍱 Quickstart**: Git clone, npm install, and run!
- **🎉 Organized Structure**: Intuitive "modular" folder system.

## In this Update

See more info about the update [here](./docs/UPDATES.md)

- [x] 3.0.0 LTS

 - We adapted the ´<a>´ into ´<Link>´, now is `<p>` instead of `<a>`.
 - src is replaced by pages
 - components are no longer in the src folder, they are in the ui folder.
 - ui components are now in 2 folders, "common" and "uncommon" parts.
 - Important staff is at the top.
 - Dependencies and devDependencies are updated.
 - `React-Use` is no longer used.
An LTS version is delivered every 6 months, and a Minor version is delivered at anytime. The LTS version is supported for 18 months, and the Minor versions is constantly updated.

### Agile with NextJS

Work seamlessly with our 4-column system:
🧠 Backlog | 👷 In Progress | ✅ Publish | 🎯 Review

### Introducing Next Right Now 2 (NRNx2)

NRN2 is the evolution of Next Right Now, a framework that introduced the Numerical Reference Number (NRN) system to manage directory identification. This system is now integrated into SushiJS.

## Introduction to Common Internet Language also CIL

CIL is a facilitator to name errors and organize your project, to enumerate folders into a web dynamic project, to ensure a faster, reliable, and efficient identification for:

- Fast Error enclave communication.
- Fast Error identification
- Easy Dev to Dev communication language
- Efficient shortened name of high paths of files

E.g.,

```tsx
./ui/uncommon/02 Body/03 Carrousel/index.ts:1:10
```

It converts into CIL, the answer is:

```rs
uu0203-1:10
```

With the introduction of SushiJS, we've solved many challenges, making the development process quicker, more straightforward, and universally understandable between devs and non-devs. This includes project managers who understand coding basics but aren't deeply involved in the project's intricate file structures.

[Go to top 🔼](#table-of-contents)

## NRNx2 Agile by ITAMAESAN

SushiJS introduced the NRNx2 Agile subsystem folder structure and development methodology. 

The second main feature of The SushiJS Framework is the ability to create components that are reusable but not necessarily general for all the pages. This is the reason why we have created the "uncommon" folder. This folder is part of the framework, and it is an extra way create components that are not general for all the pages. It contains, the same strcuture until you navigate to the "elements" folder, and the order of the imports is customizable 100% by the developer.

 - ui/common/
 - ui/uncommon/

NRNx2 Agile is a project management methodology that combines the best of Agile and Waterfall. It's a hybrid approach that allows for more flexibility and control over the development process.

[Go to top 🔼](#table-of-contents)

## 🚀 Getting Started

### Installation

```bash
git clone [repository_link]
npm install
```

### Basic Usage

```tsx
import Appbar from 'ui/uncommon/03_Body/13_Appbar'
```

### Folder Structure

```bash
- ui/common/
- ui/uncommon/
```

Delve deeper into folders like:
- 00 Header
- 01 Head
- 02 Body
- 03 Footer

> The "uncommon" directory is there for specialized components tailored for specific pages.

## Why NRNx2

NRN stands for Next Right Now, and x2 symbolizes the integration of SushiJS Agile. This framework introduced a Numerical Reference Number (NRN) system to manage directory identification.

## Directories

### HowTo

    01: 🍚, Cook rice. <- Prepare all your pages.
    02: 🧂, Mix Vinegar, Oil, Sugar & Salt.
    03: ⏲,  Cook until sugar is dissolved.
    04: 🥣, Stir into rice.
    05: 🐟, Prepear fillings.
    06: ⬛️, Put Nori on a bamboo mat.
    07: ⬜️, Put rice with hands.
    08: 🔲, Spride rice over the nori.
    09: 🥓, Lay the filling.
    10: 🎋, Roll the bamboo mat and press.
    11: 🔪, Cut with wet knife.
    12: 🍣, Enjoy!

Take a look into the following directory structure:

    🍣 SUSHIJS FRAMEWORK
    🔪---fonts
    🔪---lib
    🔪---pages
    🔪---static
    🔪---styles
    🔪---ui

```bash
    🍣 The UI Components Fix in 3.0.3
      ---pages
          --- *tsx files directly
    🔪---ui
    ▒   🎋---common
    ▒   ▒   🥓---00 Header
    ▒   ▒   ▒       ⬜️---00 Meta
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Meta.tsx
    ▒   🎋---uncommin
    ▒   ▒   🥓---02 Body
    ▒   ▒   ▒       ⬜️---06 WelcomeDescriptionText
    ▒   ▒   ▒       ▒   ⬛️---06 WelcomeDescriptionText
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Bento.tsx
```

[Go to top 🔼](#table-of-contents)

## About LTS (Long Term Support)

### What is the difference between LTS and Minor versions?

The LTS version is a major dependencies and devDependencies update, and the Minor version is a security update, bug fix, and possible new features.

### The Continuum LTS (Long Term Support) Schedule

- 3.0.0: 1st to 15th of August 2023
- 3.0.1/2/3/.../9: 15st to 1st of November 2023

## 🤝 Contribute

Feedback, contributions, and pull requests are welcome. For significant changes, please open an issue first to discuss your ideas.

## 📜 License

PylarAI Creative ML FREE License.

---

© 2023 ITAMAESAN ORG. All rights reserved.

[Go to top 🔼](#table-of-contents)
