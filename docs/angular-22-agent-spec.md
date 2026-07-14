# Angular 22 Developer & Agent Specification

This specification documents the architecture standards and coding rules for the **Techno-Logic Blog Platform** using Angular v22. It serves as a guide for developer reference and agent instruction.

---

## 🚀 Core Principles

### 1. Standalone Components

All components, directives, and pipes must be standalone. Do not use `NgModule` structures.

- Components should declare their dependencies directly in their `@Component` decorator's `imports` array.
- Use `SCSS` for styling. Keep component styles scoped inside the component files unless declaring global design tokens in `styles.scss`.

_Example Component Structure:_

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  title = signal('Latest Tech Trends');
}
```

### 2. Signals-First State Management

Use Angular Signals as the primary mechanism for reactivity, local component state, and shared state.

- **Writable Signals**: `signal(value)` for state that can be updated.
- **Computed Signals**: `computed(() => dependency())` for derived read-only state.
- **Effects**: `effect(() => { ... })` ONLY for side effects like local storage updates or logging. Avoid using effects to write to other signals.
- Prefer Signals over RxJS Observables except when handling event streams, debounce, or complex combinations.

### 3. Dependency Injection (DI) with `inject()`

Always use the `inject()` function for dependency injection. Do not use constructor injection.

- Place injections at the class level for readability.

_Example DI:_

```typescript
import { Component, inject } from '@angular/core';
import { BlogService } from './blog.service';

@Component({ ... })
export class BlogComponent {
  private readonly blogService = inject(BlogService);
}
```

### 4. Asynchronous Data Fetching with `httpResource()`

For HTTP reads (GET requests) from the Strapi CMS backend, use the modern `httpResource()` API from `@angular/common/http`.

- Do not subscribe manually. `httpResource` creates a reactive, eager data loader that updates automatically when dependency signals change.
- Utilize the `.value()`, `.isLoading()`, and `.error()` signals in your templates.

_Example Data Fetching:_

```typescript
import { Component, signal, inject } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  template: `
    @if (posts.isLoading()) {
      <p>Loading posts...</p>
    } @else if (posts.error()) {
      <p>Error: {{ posts.error() }}</p>
    } @else {
      @for (post of posts.value(); track post.id) {
        <h2>{{ post.title }}</h2>
      }
    }
  `,
})
export class BlogListComponent {
  category = signal('general');

  posts = httpResource(() => `https://api.techno-logic.us/api/posts?category=${this.category()}`);
}
```

### 5. Signal Forms (Experimental)

For simple form management, prefer Signal Forms (`@angular/forms/signals`).

- Initialize form states using the `form()` function wrapping a writable signal model.
- Bind parameters directly in components using the `[field]` directive.
- For complex enterprise forms, fallback to reactive forms using standard forms API.

### 6. UI & Accessibility (Angular Material & Angular Aria)

- Use **Angular Material v22** components for premium design system components.
- Ensure proper aria bindings, semantic HTML, and accessibility features on all templates.

### 7. Modern Control Flow

Always use the native `@if`, `@for`, `@switch` templates syntax. Do not use legacy directives like `*ngIf` or `*ngFor`.

### 8. Global Design Tokens & Theme Switching

The design system is split into two layers:

- **Global Structural Tokens** (`_tokens.scss`): Non-theme specific values such as spacing (`--tl-space-*`), border-radii (`--tl-radius-*`), font families (`--tl-font-family-*`), and standard animation transitions (`--tl-transition-*`).
- **Theme Tokens** (`_themes.scss`): Theme-specific system colors mapped to custom properties (`var(--tl-sys-*)`) such as backgrounds, surfaces, primary, secondary, text, and border colors.

#### Theme Switching Strategy

- Themes are managed using a custom data attribute on the HTML document root: `[data-tl-theme="theme-name"]`.
- Supported theme values:
  - `default-light` / `default-dark`
  - `christmas-light` / `christmas-dark`
  - `threekings-light` / `threekings-dark` (Stubbed)
- To switch themes programmatically, set the attribute on the `document.documentElement` object.
- In Angular components, bind a Signal or state service to set this attribute dynamically during initial execution or in response to a user theme-toggle event.

_Example Service Method:_

```typescript
import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal('default-dark');

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-tl-theme', this.theme());
    });
  }
}
```

---

## 🛠 MCP Server Setup in Antigravity IDE

To integrate the Angular CLI Model Context Protocol (MCP) server directly inside the **Antigravity IDE**, follow these instructions:

### Antigravity IDE Configuration Flow:

1. Open the **Antigravity IDE**.
2. Navigate to the **Agent / MCP** area.
3. Click on the **Manage MCP Servers** button.
4. Select **View raw config** to open the global `mcp_config.json` configuration file.
5. In the `mcpServers` block, paste the following server definition:

```json
{
  "mcpServers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    }
  }
}
```

6. Save the file and restart the agent/MCP session to load the new server. This config allows Antigravity to use tools like `get_best_practices` and `search_documentation` directly.
