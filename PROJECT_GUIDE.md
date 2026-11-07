# William Eagan — Website Project Guide

*A living reference for project architecture, development standards, design philosophy, and future development.*

## 1. About This Project

This is a custom-built professional portfolio website for William Eagan, a Composite Design & Manufacturing Engineer.

The website will showcase professional experience, engineering capabilities, manufacturing projects, automation work, and other relevant professional accomplishments.

The goal is to create a polished, professional website that communicates technical competence and experience while remaining straightforward to maintain and expand.

### Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, layouts, and responsive design |
| Vanilla JavaScript | Interactive functionality |
| JavaScript ES Modules | Organizing and sharing JavaScript code |
| GitHub Pages | Hosting and deployment |
| Python HTTP Server | Local development and testing |

The website intentionally avoids frameworks, website builders, unnecessary dependencies, and complicated build systems.

The objective is to retain complete ownership and control of the source code while keeping the project easy for a human developer to understand and maintain.

## 2. Project Organization

The project is organized around a simple principle: keep related things together and give each file a clear responsibility.

HTML, CSS, and JavaScript are separated so that individual pages and components can be developed and maintained independently.

### Current Directory Structure

```text
Website/
│
├── index.html
├── 404.html
├── PROJECT_GUIDE.md
│
├── components/
│   ├── header.html
│   └── footer.html
│
├── pages/
│   ├── experience.html
│   ├── engineering.html
│   ├── automation.html
│   ├── about.html
│   └── contact.html
│
├── css/
│   ├── style.css
│   │
│   ├── components/
│   │   ├── header.css
│   │   └── footer.css
│   │
│   └── pages/
│       └── home.css
│
├── Development/
│   └── launch.vs.example.json
│
├── js/
│   ├── components.js
│   │
│   ├── components/
│   │   └── navigation.js
│   │
│   └── pages/
│       └── home.js
│
└── Resources/
    └── Images, graphics, and other media
```

This represents the established organizational direction. Update it as actual files and directories are added.

### File Responsibilities

| Location | Responsibility |
|---|---|
| `index.html` | Homepage |
| `404.html` | Custom not-found page |
| `components/` | Reusable HTML components |
| `pages/` | Individual website pages |
| `css/style.css` | Global styles and design tokens |
| `css/components/` | Component-specific styling |
| `css/pages/` | Page-specific styling |
| `js/components.js` | Shared component loader |
| `js/components/` | Individual component functionality |
| `js/pages/` | Page-specific JavaScript |
| `Development/` | Development environment reference configurations |
| `Resources/` | Images, graphics, GIFs, and other media |

The structure should grow naturally as the website develops. Avoid creating empty files or directories simply to match a predefined architecture.

## 3. HTML Architecture

HTML defines the structure and content of the website.

Each major page has its own HTML file, while shared elements such as the header and footer are maintained independently.

### Individual Pages

Examples of current and planned pages:

- `index.html` — Homepage
- `pages/experience.html` — Professional experience
- `pages/engineering.html` — Engineering capabilities and projects
- `pages/automation.html` — Engineering automation projects
- `pages/about.html` — Personal and professional background
- `pages/contact.html` — Professional contact information

### Reusable Components

Common elements are maintained in the `components/` directory.

Currently:

- `components/header.html`
- `components/footer.html`

Individual pages contain placeholders where these components should appear:

```html
<div id="site-header"></div>

<main>
    <!-- Page-specific content -->
</main>

<div id="site-footer"></div>
```

The shared components are loaded through JavaScript rather than duplicated across every page.

### HTML Standards

- Use semantic HTML5 elements.
- Keep HTML focused on structure and content.
- Use meaningful class names and element IDs.
- Maintain accessibility through appropriate semantic elements and ARIA attributes.
- Avoid embedding large amounts of CSS or JavaScript directly into HTML.
- Use absolute website paths (leading `/`) for internal links and shared resources, assuming root-domain hosting.

## 4. CSS Architecture

CSS controls the visual presentation of the website.

Styles are separated into three categories: global styles, component styles, and page styles.

### Global Styles — `css/style.css`

This file defines the overall design system.

It contains:

- CSS variables and design tokens
- Global colors
- Typography
- Spacing conventions
- Container widths
- Global layout defaults
- Shared utility classes
- General responsive rules

Global styles should define reusable values rather than individual component appearances.

For example:

```css
:root {
    --color-navy: #...;
    --color-blue: #...;
    --color-blue-light: #...;

    --transition: ...;
    --border-radius: ...;
    --page-padding: ...;
}
```

Existing project variables should be preserved rather than arbitrarily replaced.

### Global Page Layout

The body uses a flex-column layout with a minimum viewport height.

The main content area uses `flex: 1` so that the footer stays at the bottom of the browser window when a page has limited content.

This allows the footer to naturally follow the content on longer pages while avoiding unnecessary whitespace below the footer on shorter pages.

Avoid adding arbitrary minimum heights to the HTML element, as this can introduce unwanted scrolling and whitespace.

### Component Styles — `css/components/`

Each reusable component has its own stylesheet.

Examples:

- `header.css`
- `footer.css`

These files contain everything specific to their respective components.

For example, `header.css` controls:

- Header layout
- Branding and logo typography
- Desktop navigation
- Mobile navigation
- Hamburger menu styling
- Responsive header behavior

Component styles should use global design tokens wherever possible.

### Page Styles — `css/pages/`

Each individual page has its own stylesheet.

Examples:

- `home.css`
- `experience.css`
- `engineering.css`
- `automation.css`
- `about.css`

These files contain layouts and styling unique to their respective pages.

### CSS Standards

- Keep styles organized into logical sections.
- Use descriptive comments to identify major sections.
- Avoid unnecessary duplication.
- Prefer reusable CSS classes over one-off styling.
- Avoid overly complicated selectors.
- Keep responsive rules close to the component or page they affect.
- Avoid unnecessary animations and complicated effects.
- Preserve existing design tokens and naming conventions.

### Stylesheet Loading

Stylesheets are loaded individually in each page's HTML document.

The recommended order is:

1. Global stylesheet
2. Shared component stylesheets
3. Page-specific stylesheet

Example:

```html
<link rel="stylesheet" href="/css/style.css">

<link rel="stylesheet" href="/css/components/header.css">
<link rel="stylesheet" href="/css/components/footer.css">

<link rel="stylesheet" href="/css/pages/home.css">
```

Not every page needs every stylesheet.

## 5. JavaScript Architecture and Local Development

JavaScript controls functionality and behavior.

The project uses native JavaScript ES Modules with named exports and imports. No JavaScript frameworks are currently used.

### Shared Component Loader — `js/components.js`

This file is responsible for loading reusable HTML components into the page.

Its responsibilities include:

- Loading the header.
- Loading the footer.
- Initializing shared component functionality after the HTML has finished loading.

It acts as the central initialization point for shared components.

### Component Functionality — `js/components/`

Individual JavaScript modules handle the behavior of reusable components.

Examples:

- `navigation.js` — Mobile navigation functionality.
- `footer.js` — Future footer functionality, if needed.

Each module should export the functionality required by other modules.

Example:

```javascript
export function initializeNavigation() {
    // Navigation functionality
}
```

The shared component loader imports the required functions:

```javascript
import {
    initializeNavigation
} from "./components/navigation.js";
```

Component initialization must occur after the corresponding HTML has finished loading.

### Page-Specific JavaScript — `js/pages/`

This directory contains functionality specific to individual pages.

Examples:

- `home.js`
- `experience.js`
- `engineering.js`
- `automation.js`

Only create page-specific JavaScript files when actual functionality is required.

Avoid creating empty files simply to match the directory structure.

### JavaScript Standards

- Use ES Modules (`type="module"`).
- Prefer named exports and imports.
- Use descriptive function and variable names.
- Keep individual modules focused on one responsibility.
- Avoid unnecessary global variables.
- Handle failed component loading gracefully.
- Do not introduce JavaScript for functionality that can be handled more simply with HTML or CSS.

### Script Loading

Shared and page-specific entry points are referenced in the HTML document.

Example:

```html
<script type="module" src="/js/components.js"></script>
<script type="module" src="/js/pages/home.js"></script>
```

Imported dependencies are loaded automatically by the browser.

Individual imported modules do not need their own script references in the HTML.

### Local Development Environment

The project uses Python's built-in HTTP server for local development.

Visual Studio 2022 can launch the development server directly through `.vs/launch.vs.json`.

The configuration:

- Starts the Python HTTP server on port `8000`.
- Automatically opens the website in the default browser.
- Allows the server to be stopped through Visual Studio.

A reference configuration is maintained in:

`Development/launch.vs.example.json`

The configuration may require adjustments to local Python installation paths and project directories when used on another computer.

Do not assume local executable paths are universal.

The local Visual Studio configuration is machine-specific and should not be treated as a universal project configuration.

## 6. Design Philosophy

The website should have a professional engineering aesthetic.

It should communicate technical competence, experience, attention to detail, and professionalism without looking overly decorative or like a generic portfolio template.

### Overall Visual Direction

The established visual direction includes:

- Dark navy as a primary brand color.
- Muted blue accents.
- Clean typography.
- Generous spacing.
- Clear visual hierarchy.
- Restrained use of borders and decorative elements.
- Professional photography and engineering imagery.
- Consistent layouts across pages.

### Design Principles

#### Simplicity Over Complexity

Avoid unnecessary visual effects, elaborate animations, and complicated interactions.

The engineering work should be the focus of the website, not the website itself.

#### Minimal Animations

Simple hover effects and subtle transitions are acceptable.

Avoid:

- Elaborate scroll animations.
- Parallax effects.
- Animation libraries.
- Unnecessary JavaScript-driven visual effects.

#### Static Content Wherever Practical

Prefer HTML and CSS for presentation.

Use GIFs, videos, and other media resources to demonstrate engineering processes or software functionality when appropriate.

For example, a short GIF demonstrating an automation tool is preferable to building a complicated custom animation.

#### Consistency

Maintain consistent:

- Typography
- Colors
- Spacing
- Section headings
- Buttons
- Cards
- Image treatments
- Layout patterns

#### Responsive Design

All pages should work appropriately on desktop, laptop, tablet, and mobile devices.

Responsive behavior should be considered during development rather than treated as a final step.

#### Maintainability

Avoid clever solutions when a straightforward solution will work.

The website should remain easy to understand and modify years from now.

## 7. Reusable Design Patterns

As the website grows, establish reusable visual patterns that can be used across multiple pages.

Potential patterns include:

- Standard content sections
- Two-column layouts
- Image and text feature sections
- Project cards
- Technical capability cards
- Professional experience timelines
- Image galleries
- Media demonstrations
- Section labels and headings

These should be developed as needed rather than building an elaborate design system prematurely.

The goal is to reuse proven layouts and styling without creating unnecessary abstractions.

## 8. Responsive Design Standards

Responsive behavior is part of every component and page.

### Current Header

The current header uses:

- Desktop navigation at wider screen sizes.
- Hamburger navigation at narrower screen sizes.
- A dropdown menu for mobile navigation.

The current header breakpoint is approximately `950px`.

### Testing Guidelines

Use Firefox Responsive Design Mode to test different viewport sizes.

Suggested test widths:

| Device | Width |
|---|---:|
| Small phone | 375px |
| Standard phone | 390px |
| Large phone | 430px |
| Tablet | 768px |
| Small laptop | 1024px |
| Desktop | 1440px |

Check for:

- Horizontal scrolling
- Overlapping content
- Awkward text wrapping
- Navigation problems
- Images that are too large or too small
- Inconsistent spacing
- Poor readability

Test both portrait and landscape orientations where appropriate.

## 9. AI Collaboration Guidelines

Any AI assistant working on this project should use this document as its starting reference.

The goal is to maintain consistency between development sessions and avoid repeatedly revisiting architectural decisions.

### Understand Before Changing

- Review this document before proposing architectural changes.
- Work with the existing file structure.
- Ask for relevant existing files when necessary.
- Do not assume a feature or file exists without checking.
- Preserve established design and development conventions.

### Work Incrementally

Keep changes small and focused.

When working on a component, concentrate on its relevant files.

For example, header modifications should generally involve:

- `components/header.html`
- `css/components/header.css`
- `js/components/navigation.js` (if functionality changes)

Avoid unnecessarily modifying unrelated pages or components.

### Preserve Existing Architecture

- Do not introduce frameworks without explicit discussion.
- Do not introduce unnecessary dependencies.
- Do not consolidate files simply to reduce the number of files.
- Do not move functionality between architectural layers without a good reason.
- Preserve existing naming conventions.
- Reuse existing CSS variables and patterns.

### Explain Changes

When providing code:

- Identify the exact file being modified.
- Provide complete replacement code when practical.
- Clearly identify partial additions or replacements.
- Explain where code belongs.
- Explain why a change is necessary.
- Identify dependencies or related files that must also be updated.

Avoid providing isolated code snippets without explaining where they go.

### Respect the Learning Process

The developer is comfortable with VB.NET and general software development concepts but is continuing to learn HTML, CSS, and JavaScript.

Explain unfamiliar web development concepts when they arise.

Use relevant VB.NET comparisons when they help explain concepts such as:

- JavaScript modules
- Imports and exports
- Function scope
- Event handling
- Asynchronous operations

Do not overexplain concepts that are already understood.

### Avoid Unnecessary Complexity

Always consider whether a simpler solution would accomplish the same objective.

The goal is maintainable software, not architectural sophistication.

## 10. Current Project Status

This section should be updated as development progresses.

### Established

- Modular HTML component architecture.
- Shared header and footer loading through the JavaScript component loader.
- Separate CSS files for global styles and components.
- Separate page-specific CSS organization.
- JavaScript ES Module architecture.
- Component-specific JavaScript modules.
- Mobile navigation functionality.
- Responsive desktop/mobile header behavior.
- Responsive footer layout.
- Sticky footer behavior using a flex-based page layout.
- Centralized global design tokens.
- GitHub Pages hosting approach.
- Project documentation approach.
- Visual Studio local development configuration.

### Current Header

The header is implemented and functioning.

Features include:

- Dark navy background.
- William Eagan branding.
- Engineering · Design · Manufacturing descriptor.
- Desktop navigation.
- Active page highlighting.
- Consistent navigation link styling without a visually emphasized Contact button.
- Sticky positioning.
- Responsive hamburger navigation.
- Mobile dropdown navigation.

### Current Footer

The footer is implemented and functioning.

Features include:

- Dark navy background consistent with the website's branding.
- William Eagan branding and professional descriptor.
- Location display (Woodinville, Washington).
- Copyright information.
- Engineering · Design · Manufacturing tagline.
- Responsive layout for smaller screens.
- Shared HTML component loaded through the component loader.
- Sticky footer behavior on pages with limited content.

The footer uses its own stylesheet at `css/components/footer.css`.

### Current Pages

The following pages have been established for initial navigation and development:

- Homepage
- About
- Automation
- Engineering
- Experience
- Contact
- Custom 404 page

### Next Development Objective

Begin developing the homepage hero section.

Planned initial elements:

- Professional introduction.
- Name and professional descriptor.
- Headshot.
- Clean, professional layout.
- Responsive desktop and mobile presentation.

The homepage should establish the visual direction for the remaining website.

## 11. Maintaining This Document

This document is intended to evolve alongside the website.

Whenever significant architectural or design decisions are made:

- Update the project structure if files or directories change.
- Document new reusable components.
- Document new development conventions.
- Update the project status.
- Record important design decisions that future development should preserve.

Keep the document focused on architecture, conventions, design philosophy, and project status.

It should not become a line-by-line code reference or a replacement for the actual source files.

The purpose is to give future developers and AI sessions a reliable understanding of how the project is organized and how it should evolve.

### Guiding Principle

Build a professional website that is visually polished, technically straightforward, independently maintainable, and entirely under the developer's control.

Prefer small, understandable pieces over large, complicated systems.

**HTML defines content. CSS defines appearance. JavaScript defines behavior.**

Keep it simple, keep it modular, and make it easy to maintain.

## 12. Instructions for AI Assistants

Before making changes to this project:

- Read this document to understand the established architecture, design philosophy, and development conventions.
- Inspect the relevant existing source files before proposing modifications.
- Treat the source code as authoritative if it differs from this document.
- Preserve established architectural decisions unless there is a compelling reason to change them.
- Work incrementally and keep changes focused on the task at hand.
- Update this document when significant architectural decisions, conventions, or project structures change.

Do not unnecessarily rewrite, reorganize, or modernize working code simply because an alternative approach exists.

The priority is consistency, maintainability, and ease of future development.

### 12.1 Verify Before Making Changes

The project guide describes the intended architecture, but the actual source code is the authoritative representation of the current implementation.

Before making changes:

- Verify relevant files and directories actually exist.
- Review existing implementations before replacing them.
- Check existing CSS variables and shared classes before introducing new ones.
- Do not assume planned functionality has already been implemented.
- If documentation and source code disagree, identify the discrepancy before making architectural changes.

### 12.2 Documentation Standards

Keep documentation concise and useful.

- Document architectural decisions, established conventions, reusable components, and significant project changes.
- Do not document routine code modifications, temporary debugging steps, or implementation details that are readily understood from the source code.
- Prefer updating existing sections over repeatedly adding new sections.
- Only introduce additional documentation files when the project's size or complexity genuinely warrants them.

### 12.3 Markdown Documentation and Output

All project documentation uses standard Markdown syntax.

When creating, modifying, or providing content intended for a Markdown file (`.md`):

- Provide the actual Markdown source, not a rendered or plain-text representation.
- Use appropriate Markdown heading levels (`#`, `##`, `###`) to establish document hierarchy.
- Use Markdown lists rather than unstructured lines of text.
- Use Markdown tables where tabular information is appropriate.
- Use fenced code blocks with language identifiers for code examples.
- Use relative file paths where appropriate.
- Preserve existing Markdown formatting conventions when modifying documents.

When providing Markdown content in a response, place the complete content inside a fenced code block so that the Markdown source can be copied directly into Visual Studio.

Do not omit Markdown syntax on the assumption that the receiving editor will automatically format plain text.

The objective is to produce documentation that is readable in Markdown preview while remaining properly structured and editable in the source editor.