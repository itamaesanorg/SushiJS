
## ⚙️ Updates (v3.0.1 - Aug 18th, 2023)

- **More Intuitive Components**: Now labeled as "ui", categorized into common and uncommon parts.
- **Consistent Updates**: Bi-annual updates for robust maintenance and support.
- **Unified Versions**: `sushis` and `sushis-demo` now sync perfectly.
- **Live Demonstration**: Check [ITAMAESAN](https://itamaesan.org).
- **Real-World Implementation**: See [BCN Hostess](https://bcnhostess.com).
- **Refinements**: Removed unused `app` folder; retained the `common` folder.
- **Enhanced Performance**: Faster installation and fewer packages.
- **Dependency Updates**: All dependencies and devDependencies are up to date.
- **Bug Fixes**: Resolved issues with `<Link>` and replaced `react-use` package.

We simplify from this 2.0.0
 - src/uncommon/components/elementsbypage/Home
 - src/uncommon/components/elementsbypage/AboutUs
 - src/uncommon/components/elementsbypage/ContactUs
 - src/uncommon/components/elementsbypage/Menu

To this in 3.0.1
 - ui/common/
 - ui/uncommon/


```bash
    🍣 The UI Components Fix in 3.0.1
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

## About the Aug 16th 2023 Update (3.0.0)

### ✨ Updates 2023

### github 3.0.0 | npm 3.0.0

This update date on Wed 16, August 2023.

We have the honor to present sushis 3.0.0 maintaining the essence of the framework.

The unique 2 changes you need to be aware of are:
 - we need to do is to replace the <a> inside the <Link> to <p> to avoid the error of the links
 - use `import React, { useState, useEffect } from 'react';` instead of `import { useInterval } from 'react-use'` to avoid the error of the links
Don't worry, down bellow the table we shown you the "how-to" / "how we" changed the code.


1. **Number of Packages**: The gh 2.1.2 npm 2.1.1 has more packages (395) compared to the gh 3.0.0 npm 3.0.0 (372), with the difference primarily due to the presence of the `react-use` package.

2. **Installation Time**: The gh 2.1.2 npm 2.1.1 takes more time (9.1 seconds) to install the additional packages, whereas the gh 3.0.0 npm 3.0.0 installs fewer packages and completes faster (3.8 seconds).

3. **Package Integrity Check**: The gh 2.1.2 npm 2.1.1 mentions the integrity check of 6061 files during installation, which may have contributed to the longer installation time. This information is not present in the gh 3.0.0 npm 3.0.0.

4. **Package Versions**: Both setups share the same oackages (unless 1) for common packages, indicating consistency in dependencies.

5. **Output Format**: The outputs have slightly different formatting, but they both include information about the installed packages and installation times.

- 🧑‍💻 Due to the recent [numbers](./docs/Extra.md) we decided to update the framework every 6 months for a solid maintenance and support. Please read the [Letter](#thanks-letter) to know more about the numbers.

- 👍 Now `sushis` and `sushis-demo` are now on the same version, the transition has been complete at 100% from `2.1.2` to `3.0.0` in code and content. We notice that the this site, [ITAMAESAN](https://itamaesan.org) uses the same technology to demonstrate!

- 🎉 A real use case at [BCN Hostess](https://bcnhostess.com) uses our framework to build their commercial website!

- ✅ We maintain the essence of the framework, this means: no NextJS app folder or turbo are by the moment in our priorities, so we deleted the unused `app` and at 3.0.3 the `src` is replaced into `pages` folder and we delete the components folder, and called `ui` folder. You can create it, it is still compatible with the framework, but we do not use it anymore. At your choice.

- 🌱 We improved the installation time from 9.1 seconds to 3.8 seconds, that is x2.4 times faster than before by reducing the number of packages from 395 to 372.

- 🌿 We also updated the depenendencies and devDependencies to the latest version.

- 🌳 And we fixed the `<Link>` by replacing `<a>` into `<p>` and the `useInterval` into `useState, useEffect` to delete the `react-use` package.
