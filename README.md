![ITAMAESAN SushiJS Wallpaper Best Light NNextJS Framework with Husky fixed](https://user-images.githubusercontent.com/5947268/185643867-81854585-1f24-470e-9836-2a8b9c62c8dd.png)

# SushiJS

SushiJS, is a Typescript, NextJS, TailwindCSS with Framer Framework based on Agile. Intriduces NRNx2, an evolution of Next Right Now and Agile subsystem folder structure and development methodology. Makes anybody to understand the folder structure. A new revolutionary and evolved folder "modular" structure, developed in a week (1 week exactly) by the Harvard University student of Project Management, Miguel Gargallo, @miguelgargallo. ITAMAESAN ORG is an Open Source Code Foundation, leading in the development industry based on Agile and Project Management Methodologies applied to developments.

SushiJS, está programado en Typescript a través de la tecnología NextJS, TailwindCSS con Framer, es un Framework basado en Agile. Introduce NRNx2, una evolución de la estructura de carpetas del subsistema Next Right Now y Agile y la metodología de desarrollo. Hace que cualquiera entienda la estructura de carpetas. Una nueva estructura "modular" de carpetas revolucionaria y evolucionada, desarrollada en una semana (1 semana exactamente) por el estudiante de Gestión de Proyectos de la Universidad de Harvard, Miguel Gargallo, @miguelgargallo. ITAMAESAN ORG es una Fundación de Código Abierto, líder en la industria del desarrollo basada en Metodologías Ágiles y de Gestión de Proyectos aplicadas a los desarrollos.

SushiJS is a Typescript, NextJS, TailwindCSS and Motion Framer project to help developers build great tools!

✨ We are proud to announce, ITAMAESAN, a project to help developers, exclusive working with Open Source Pylar AI creative ML License on our code.

✨ ITAMAESAN は、オープンソースの Pylar AI creative ML ライセンスで開発する開発者を支援するプロジェクトです。
# Project Organizer

- [SushiJS](#sushijs)
- [Project Organizer](#project-organizer)
  - [Thanks Letter](#thanks-letter)
  - [Main Features](#main-features)
  - [Updates 2023](#updates-2023)
    - [github 2.1.1 | npm 2.1.1](#github-211--npm-211)
    - [Agile in NextJS](#agile-in-nextjs)
  - [Introduction to Common Internet Language also CIL](#introduction-to-common-internet-language-also-cil)
- [Code Internet Language in a real case use.](#code-internet-language-in-a-real-case-use)
- [NRNx2 Agile by ITAMAESAN](#nrnx2-agile-by-itamaesan)
  - [Project Management System](#project-management-system)
    - [Features](#features)
- [Why NRNx2](#why-nrnx2)
  - [HowTo](#howto)
- [Directories](#directories)
  - [NRNx2 Agile](#nrnx2-agile)
  - [Getting started](#getting-started)
  - [npm](#npm)
  - [Support](#support)
  - [License](#license)
  - [We run on](#we-run-on)
  - [Fix](#fix)


## Thanks Letter

We want to thank you for using our framework, we are very happy that you are part of our community and we hope that you continue to be part of it. Now we are over 1000 per month between sushis and [sushis-demo](https://npmjs.com/sushis-demo)


## Main Features

    ✨ Typescript
    📘 NextJS
    🌗 CSS
    😶‍🌫️ Framer Motion
    🦄 Favicons
    📱 Responsive Nav
    🍱 Easy, git clone & npm install/run
    🎉 Folder organized structure

- [Back to top 🔼](#Project-Organizer)


## Updates 2023

### github 2.1.1 | npm 2.1.1

For  this we added a new section, called Updates, where we will be adding the updates of the framework, so you can see what we are doing in the framework, and what we are adding to the framework. [See the updates here](/update.md)

We are going to update 1 time per month to mantain stable the project, not to risk anyone, since we are 1000 users per month!!!

- ✅ We constantly update the framework to make it more secure and stable.
- ✅ We perform this updates in Dependencies in the framework:
  - ⬆️ eslint-config-prettier to 8.6.0
  - ⬆️ framer-motion to 8.5.0
  - ⬆️ next-themes to 0.2.1
- ✅ We perform this updates in devDependencies in the framework:
  - ⬆️ types/node to 18.11.18
  - ⬆️ types/react to 18.0.27
  - ⬆️ typescript-eslint/eslint-plugin to 5.48.2
  - ⬆️ typescript-eslint/parser to 5.48.2
  - ⬆️ eslint to 8.32.0
  - ⬆️ eslint-config-next to 13.1.4
  - ⬆️ husky to 8.0.3
  - ⬆️ postcss to 8.4.21
  - ⬆️ prettier to 2.8.3
  - ⬆️ tailwindcss to 3.2.4
  - ⬆️ typescript to 4.9.4
- ✅ We perform successfull removals for non used Dependencies in the framework:
  - ❌ remove cmdk: 0.1.19
- ✅ We are now using using @next/codemod for the links!
- 📝 Now we updated the license, we are now using a Pylar AI creative ML License, you can see the license [here](https://huggingface.co/spaces/superdatas/LICENSE).

- [Back to top 🔼](#Project-Organizer)


### Agile in NextJS

First we would have to draw 4 column system.

🧠 Backlog | 👷 In Progress | ✅ Publish | 🎯 Review

Once you put the tasks on the board, you can see the order of the tasks from: 🧠 Backlog > 👷 In Progress > ✅ Publish > 🎯 Review and then, once you ended to code that component, as obviusly, you will need to develop the next one, so you return to 🧠 Backlog > 👷 In Progress > ✅ Publish > 🎯 Review with the new component, and one after one, repeatit until you have all the components done.
Then to upgrade components or add new components, you can just move the component to the next folder, and the order of the imports will be added susbecuencely the enumerations.

The second main feature of The SushiJS Framework is the ability to create components that are reusable but not necessarily general for all the pages. This is the reason why we have created the "uncommon" folder. This folder is part of the framework, and it is an extra way create components that are not general for all the pages. It contains, the same strcuture until you navigate to the "elements" folder, and the order of the imports is customizable 100% by the developer.

For example:
 - src/uncommon/components/elementsbypage/Home
 - src/uncommon/components/elementsbypage/AboutUs
 - src/uncommon/components/elementsbypage/ContactUs
 - src/uncommon/components/elementsbypage/Menu

Inside this folders you will encounter a basic folder:

    - 00 Header
    - 01 Head
    - 02 Body
    - 03 Footer

In every page, that is the reason why we have created the "uncommon" folder, it is not a folder you will use everyday, it's uncommonly to use, but is there in case you need for example, to create a specific component, for a specific page for: testing purpouse, SEO or a specific component as mentioned before, like a custome menu.

- [Back to top 🔼](#Project-Organizer)


## Introduction to Common Internet Language also CIL

Code Internet Language also CIL defined and term designed by ITAMAESAN from Miguel Gargallo in Andorra La Vella, Andorra, is to enumarate folders into a web dynamic project, to ensure a faster, reliable and efficient identification for:

    - Fast Error enclave communication.
    - Fast Error identification
    - Easy Dev to Dev communication language
    - Efficient shortened  name of high paths of files
    
eg

    -   ./src/common/components/elements/02 Body/03 Carrousel/index.ts:1:10
    
it converts into CIL, the ans is:
    
   -    C0203 or C-02/03
       
If we see the folder Strucuture:

        🔪---src
            ▒   🎋---app
            ▒   ▒   🥓---components
            ▒   ▒   🥓---styles
            ▒   🎋---common 👈👈👈 HERE FIRST REFERENCE ID FROM CIL
            ▒   ▒   🥓---components
            ▒   ▒   ▒   🔲elements
            ▒   ▒   ▒       ⬜️---00 Header
            ▒   ▒   ▒       ▒   ⬛️---00 Meta
            ▒   ▒   ▒       ⬜️---01 Head
            ▒   ▒   ▒       ▒   ⬛️---01 Menu
            ▒   ▒   ▒       ▒   ⬛️---02 SecondaryMenu
            ▒   ▒   ▒       ⬜️---02 Body 👈👈👈 HERE SECOND REFERENCE ID FROM CIL
            ▒   ▒   ▒       ▒   ⬛️---03 Carrousel 👈👈👈 HERE THIRD REFERENCE ID FROM CIL
            ▒   ▒   ▒       ⬜️---03 Footer
            ▒   ▒   ▒       ▒   ⬛️---04 Legal
            ▒   ▒   ▒       ▒   ⬛️---05 TermsAndConditions
            ▒   ▒   🥓---hooks
            ▒   ▒   🥓---types
            ▒   ▒   🥓---utils
            ▒   🎋---modules
            ▒   ▒   🥓---auth
            ▒   🎋---pages
            ▒       🥓---api
            ▒   🎋---uncommon
            ▒   ▒   🥓---components
            ▒   ▒   ▒   🔲elementsbypage
            ▒   ▒   ▒       ⬜️---01 Home
            ▒   ▒   ▒       ▒   ⬛️---00 Header
            ▒   ▒   ▒       ▒   ⬛️---01 Head
            ▒   ▒   ▒       ▒   ⬛️---02 Body
            ▒   ▒   ▒       ▒   ⬛️---03 Footer    
            ▒   ▒   ▒       ⬜️---02 404
            ▒   ▒   ▒       ▒   ⬛️---00 Header
            ▒   ▒   ▒       ▒   ⬛️---01 Head
            ▒   ▒   ▒       ▒   ⬛️---02 Body
            ▒   ▒   ▒       ▒   ⬛️---03 Footer    

You will notice, there is no error identifyn between a common and an ucommon component.
This how at SushiJS we solved many problems, making quicker, easier and common understandable, between devs, and non devs, also PM who knows to code but do need to know how the folder file system strcututire is, why and how to arrive to their destination.

- [Back to top 🔼](#Project-Organizer)


# Code Internet Language in a real case use.

We use 00 01 02 03 and many more identifications to locate so fast, efficient and reliable an error when is higlighted on the compile, server or in this case, VERCEL.

![image](https://user-images.githubusercontent.com/5947268/186480899-6200dc29-5b22-4fbc-a463-e547f4d2e63b.png)

As you may see in this picture,

        ./src/common/components/elements/02 Body/27 Carrousel/index.ts:1:10
        
If we looked deeper:

        ./...common/.../02...27...

Here is the reference: C0227 or also C-02/27, where the error is being easely to remember, anotate on your Agile tools and pas throught the notes into devs to fix ASAP, with an easy message, "fix please C0227", here is where we introduce the Code Internet Language also CIL.

- [Back to top 🔼](#Project-Organizer)


# NRNx2 Agile by ITAMAESAN

SuhsiJS introduced the NRNx2 Agile subsystem folder structure and development methodology.

This is the first main aspects of SushiJS, here you will find out a Project Management System, a simple and easy to use system to manage your folders.

- [Back to top 🔼](#Project-Organizer)


## Project Management System

It's based on Agile methodology, it's a system to manage your projects and tasks.

- [Back to top 🔼](#Project-Organizer)


### Features

Directories are the main feature of this system, you can create, delete, rename and move directories, but always under a precise level of numerical identification.
The following identification levels are available:
 - 00 Header
 - 01 Head
 - 02 Body
 - 03 Footer

Inside those directories, you will encounter a second independent system of enumeration, this system is called the NRNx2 Agile, introduced by Miguel Gargallo, a software engineer student and a project manager. He studied at Harvard University and is the main developer at SushiJS.

- [Back to top 🔼](#Project-Organizer)


# Why NRNx2
NRN means Next Right Now, and x2 means the addition of SushiJS Agile, a Numerical Reference Number, NRN, a system to manage the numerical identification of the directories.

- [Back to top 🔼](#Project-Organizer)


## HowTo

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


- [Back to top 🔼](#Project-Organizer)

# Directories

    🍣 SUSHIJS FRAMEWORK
    🔪---fonts
    🔪---lib
    🔪---public
    ▒   🎋---fonts
    ▒   🎋---static
    ▒       🥓---favicons
    🔪---src
    ▒   🎋---app
    ▒   ▒   🥓---components
    ▒   ▒   ▒   🔲---GlobalStyles
    ▒   ▒   🥓---styles
    ▒   🎋---common
    ▒   ▒   🥓---components
    ▒   ▒   ▒   🔲elements
    ▒   ▒   ▒       ⬜️---00 Header
    ▒   ▒   ▒       ▒   ⬛️---00 Meta
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Meta.tsx
    ▒   ▒   ▒       ⬜️---01 Head
    ▒   ▒   ▒       ▒   ⬛️---01 Menu
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Sushisho.tsx
    ▒   ▒   ▒       ▒   ⬛️---02 SecondaryMenu
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Sushiten.tsx
    ▒   ▒   ▒       ▒   ⬛️---03 MenuNotAnimated
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 SushishoUsed.tsx
    ▒   ▒   ▒       ▒   ⬛️---04 SecondaryMenuNotAnimated
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 SushitenUsed.tsx
    ▒   ▒   ▒       ▒   ⬛️---05 ToggleDarkModeButton
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Izakaya.tsx
    ▒   ▒   ▒       ⬜️---02 Body
    ▒   ▒   ▒       ▒   ⬛️---06 WelcomeDescriptionText
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Bento.tsx
    ▒   ▒   ▒       ▒   ⬛️---07 CardsProps
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Arubamu.tsx
    ▒   ▒   ▒       ▒   ⬛️---08 AboutUsImages
    ▒   ▒   ▒       ▒   ⬛️---09 BrandImages
    ▒   ▒   ▒       ▒       🐟-----🧂 logo1.png
    ▒   ▒   ▒       ▒       🐟-----🧂 logo2.png
    ▒   ▒   ▒       ▒       🐟-----🧂 logo3.png
    ▒   ▒   ▒       ▒   ⬛️---10 Container
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Container.tsx
    ▒   ▒   ▒       ▒   ⬛️---12 OurServices
    ▒   ▒   ▒       ▒   ⬛️---13 CardsPropsImproved
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 ShashinArubamu.tsx
    ▒   ▒   ▒       ▒   ⬛️---14 OurServicesText
    ▒   ▒   ▒       ▒   ⬛️---15 Bottom
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Bottom.tsx
    ▒   ▒   ▒       ▒   ⬛️---16 Appbar
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Appbar.tsx
    ▒   ▒   ▒       ▒   ⬛️---17 BigText
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 BigText.tsx
    ▒   ▒   ▒       ▒   ⬛️---18 BigTextExport
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 BigTextExport.tsx
    ▒   ▒   ▒       ▒   ⬛️---20 Section
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Section.tsx
    ▒   ▒   ▒       ▒   ⬛️---21 Page
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Page.tsx
    ▒   ▒   ▒       ▒   ⬛️---22 Carrousel
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Carrousel.tsx
    ▒   ▒   ▒       ▒   ⬛️---22 CarrouselCards
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Carrousel.tsx
    ▒   ▒   ▒       ▒   ⬛️---23 CoolError404
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 CooltError.tsx
    ▒   ▒   ▒       ▒   ⬛️---24 CoolError404Exporter
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Arubamu.tsx
    ▒   ▒   ▒       ⬜️---03 Footer
    ▒   ▒   ▒       ▒   ⬛️---25 Footer
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Footer.tsx
    ▒   ▒   🥓---hooks
    ▒   ▒   🥓---types
    ▒   ▒   🥓---utils
    ▒   🎋---modules
    ▒   ▒   🥓---auth
    ▒   ▒       🔲---api
    ▒   ▒       🔲---components
    ▒   🎋---pages
    ▒       🥓---api
    ▒           🔲---authAPI
    ▒           🔲---helloAPI
    ▒   🎋---uncommon
    ▒   ▒   🥓---components
    ▒   ▒   ▒   🔲elementsbypage
    ▒   ▒   ▒       ⬜️---01 Home
    ▒   ▒   ▒       ▒   ⬛️---00 Header
    ▒   ▒   ▒       ▒   ⬛️---01 Head
    ▒   ▒   ▒       ▒   ⬛️---02 Body
    ▒   ▒   ▒       ▒   ⬛️---03 Footer    
    ▒   ▒   ▒       ⬜️---02 404
    ▒   ▒   ▒       ▒   ⬛️---00 Header
    ▒   ▒   ▒       ▒   ⬛️---01 Head
    ▒   ▒   ▒       ▒   ⬛️---02 Body
    ▒   ▒   ▒       ▒   ⬛️---03 Footer    
    🔪---static
    ▒   🎋---favicons
    🔪---styles

- [Back to top 🔼](#Project-Organizer)


## NRNx2 Agile

Between 00 Header and 01 Head there is no main difference at all. The only difference is the order of the imports internally.
When you navigate to 02 Body, you will see that the order of the imports is a continuation of the order of the imports in 00 Header, and not a reset of the order in every directory.
If you delete the main folders:
    - 00 Header
    - 01 Head
    - 02 Body
    - 03 Footer

    More precisely, the following files are exported:

    ▒   ▒   ▒       ⬜️---00 Header
    ▒   ▒   ▒       ▒   ⬛️---00 Meta
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Meta.tsx
    ▒   ▒   ▒       ⬜️---01 Head
    ▒   ▒   ▒       ▒   ⬛️---01 Menu
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Sushisho.tsx
    ▒   ▒   ▒       ▒   ⬛️---02 SecondaryMenu
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Sushiten.tsx
    ▒   ▒   ▒       ▒   ⬛️---03 MenuNotAnimated
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 SushishoUsed.tsx
    ▒   ▒   ▒       ▒   ⬛️---04 SecondaryMenuNotAnimated
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 SushitenUsed.tsx
    ▒   ▒   ▒       ▒   ⬛️---05 ToggleDarkModeButton
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Izakaya.tsx
    ▒   ▒   ▒       ⬜️---02 Body
    ▒   ▒   ▒       ▒   ⬛️---06 WelcomeDescriptionText
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Bento.tsx
    ▒   ▒   ▒       ▒   ⬛️---07 CardsProps
    ▒   ▒   ▒       ▒       🐟-----🥣 index.ts
    ▒   ▒   ▒       ▒       ⏲-----🍚 Arubamu.tsx
    ▒   ▒   ▒       ▒   ⬛️---08 AboutUsImages
    ▒   ▒   ▒       ▒   ⬛️---09 BrandImages
    ▒   ▒   ▒       ▒       🐟-----🧂 logo1.png
    ▒   ▒   ▒       ▒       🐟-----🧂 logo2.png
    ▒   ▒   ▒       ▒       🐟-----🧂 logo3.png

And move all directories to the root of the elements project folder, you will see that the order of the imports is functional too.
The system is developed to be easy for non relates heavy developers, or also called head of areas, or project managers Who know the basis of the programming skills, but do not know the order of the imports or projects specifications at all.
This also enables a way to order tasks as the Agile Scrum Manifesto states.

- [Back to top 🔼](#Project-Organizer)


## Getting started

    ⬇️ git clone https://github.com/itamaesanorg/SushiJS.git
    🔄 npm install
    ➡️ npm run dev
    ✨ Enjoy

- [Back to top 🔼](#Project-Organizer)


## npm

    npm i @itamaesanorg/sushijs


    ⬜⬜⬜⬜⬜⬜⬜🟧🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜⬜⬜⬜
    ⬜⬜⬜⬜⬜🟧🟧🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧🟧⬜
    ⬜⬜⬜⬜🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧
    🟧🟧⬜🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧🟧
    🟧🟧🟧🟧🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧🟧⬜🟧
    ⬜🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧⬜🟧🟧
    ⬜🟧🟧🟧⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟧🟧🟧⬜
    🟧🟧🟧⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬛⬜⬜⬜
    🟧🟧⬜⬜⬛⬜⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬜⬛⬜⬜⬜
    ⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬛⬜⬜⬛⬜⬜⬜⬜⬜⬛⬜⬜⬜
    ⬜⬜⬜⬜⬛⬜🟪🟪⬜⬜⬛⬛⬛⬛⬜⬜🟪🟪⬜⬛⬜⬜⬜
    ⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬜
    ⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜

- [Back to top 🔼](#Project-Organizer)


## Support

    🐣 Twitter: https://twitter.com/itamaesanorg
    🌐 Homepage: https://itamaesan.org redirects to https://SushiJS.com

- [Back to top 🔼](#Project-Organizer)


## License

    ⚖️ We are now using Pylar AI creative ML license [here](https://huggingface.co/spaces/superdatas/LICENSE).

- [Back to top 🔼](#Project-Organizer)


## We run on

    Vercel 🍣 Thanks Vercel if you read that!

- [Back to top 🔼](#Project-Organizer)


## Fix

    😍 Before dealing with the deploy please take while to read this for 100% optimization.
    [Here are posible steps before](https://github.com/itamaesanorg/edu)

- [Back to top 🔼](#Project-Organizer)

