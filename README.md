# Techno-Logic Blog Platform

**A Progressive Web App (PWA) blog** built with **Angular 22 + Angular Material** for the frontend and **Strapi Headless CMS** for the self-hosted CMS backend (`/cms`).

## 🚀 Upcoming Features

- **Responsive Angular Material UI** with light/dark theme
- **Parallax hero** with the latest 3 blog posts
- **Blog list view** with thumbnail, TLDR, and pagination
- **Post detail pages** with hero image, author info, and SEO meta
- **Sidebar modules**: About Me, Social Links, Google Translate, Tags
- **Search and Tag Filtering** with Signals-based state management
- **PWA support**: Installable app, offline reading, asset/API caching
- **Internationalization (EN/ES)** with Strapi i18n integration
- **Secure API handling** with Secret Manager and JWT authentication
- **Clean code & SOLID architecture** throughout

---

## 🛠 Tech Stack

### Frontend

- [Angular 22](https://angular.dev/) (standalone components, Signals-first, inject() DI, zoneless change detection)
- [Angular Material](https://material.angular.io/)
- Angular Service Worker for PWA
- SSR / Prerender for SEO

### Backend

- [Strapi Headless CMS](https://strapi.io/) (self-hosted)
- [PostgreSQL](https://www.postgresql.org/)

---

### Infrastructure

- **Google Cloud Run** for Strapi
- **Firebase Hosting** (or GCP Storage + CDN) for Angular app
- **GCP Secret Manager** for secure API key storage
- **GitHub Actions** for CI/CD

## ⚙️ Getting Started

### 1️⃣ Prerequisites

- **Node.js** 20.x (Angular CLI & Strapi compatible)
- **npm** or **yarn**
- **GCP CLI** (for deployment)
- **Docker** (for local Strapi dev)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/techno-logic-blog-platform.git
cd techno-logic-blog-platform
```

### 3️⃣ Install Dependencies

#### Frontend dependencies

```bash
cd frontend
npm install
```

#### Backend dependencies

```bash
cd cms
npm install
```

### 4️⃣ Run Locally

#### 👨🏾‍💻 Frontend

```bash
cd frontend
npm start
```

#### 🖥️ Backend (CMS)

```bash
cd cms
npm run develop
```

## 📐 Architecture Standards (Angular 22)

- **Zoneless**: No `zone.js` dependency. Reactivity is entirely driven by Angular Signals.
- **Signals-First**: Use `signal`, `computed`, and `effect` for component state and reactive derivations.
- **Dependency Injection**: Always inject dependencies using the `inject()` API at class level.
- **Data Fetching**: Use `httpResource()` for fetching data from the CMS.
- **Aria & Material**: Leverage Angular Material v22 and Angular Aria components to ensure a premium UI with complete accessibility.
- **Control Flow**: Use the native control flow (`@if`, `@for`, `@switch`) in templates.

For details, refer to the [Angular 22 Agent Spec](docs/angular-22-agent-spec.md).

## 🛠️ MCP Tooling Config (Antigravity IDE)

The project includes local `.vscode/mcp.json` containing the Angular CLI MCP server configuration.

To configure the Angular MCP server in the **Antigravity IDE**:

1. Open the **Antigravity IDE**.
2. Click **Manage MCP Servers** in the Agent/MCP panel.
3. Select **View raw config** to open `mcp_config.json`.
4. Paste the `angular-cli` server block inside the `mcpServers` object:
   ```json
   "angular-cli": {
     "command": "npx",
     "args": ["-y", "@angular/cli", "mcp"]
   }
   ```
5. Save the file and restart the agent/MCP session.

## Contact / Social Media

- Bluesky – [@code-vista.bsky.social‬](https://bsky.app/profile/code-vista.bsky.social)
- GitHub - [https://github.com/JavaVista/](https://github.com/JavaVista/)
- LinkedIn - [Javier Carrion](https://www.linkedin.com/in/technologic)
- Website - [techno-logic.us](https://www.techno-logic.us)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
