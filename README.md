# React TypeScript Boilerplate

A modern, scalable React boilerplate with TypeScript, Material UI, and a feature-based architecture.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript 5** - Type safety with strict mode
- **Parcel 2** - Zero-config bundler
- **Material UI 7** - Component library
- **vanilla-extract** - Zero-runtime CSS-in-TypeScript
- **MobX 6** - State management
- **React Router 6** - Client-side routing
- **Vitest** - Unit testing framework
- **ESLint 9 + Prettier** - Code quality
- **Husky** - Git hooks
- **pnpm** - Fast package manager

## 📁 Project Structure

```
src/
├── app/                    # Application configuration
│   └── routes/             # Route definitions
│       └── AppRoutes.tsx
├── features/               # Feature-based modules
│   ├── auth/               # Authentication feature
│   │   ├── components/     # Feature-specific components
│   │   │   └── ProtectedRoute/
│   │   ├── hooks/          # Feature-specific hooks
│   │   │   └── useAuth.ts
│   │   ├── pages/          # Feature pages
│   │   │   └── LoginPage/
│   │   └── stores/         # Feature state (MobX)
│   │       └── auth.store.ts
│   └── home/               # Home feature
│       └── pages/
│           └── HomePage/
├── shared/                 # Shared/common code
│   └── components/         # Reusable components
│       └── ErrorBoundary/
├── core/                   # Core services (API, global stores)
│   ├── api/
│   └── stores/
├── App.tsx                 # Root component
└── index.tsx               # Entry point
```

## 🏗️ Architecture

This boilerplate follows a **feature-based architecture**:

- **`features/`** - Each feature is a self-contained module with its own components, pages, hooks, stores, and types
- **`shared/`** - Reusable components and utilities used across multiple features
- **`core/`** - Application-wide services like API clients and global state
- **`app/`** - Application configuration, routing, and providers

### Styling Convention

Styles are written using **vanilla-extract** in separate `.styles.css.ts` files:

```typescript
// Component.styles.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '24px',
});
```

```tsx
// Component.tsx
import * as styles from './Component.styles.css';

const Component = () => <div className={styles.container}>...</div>;
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/reactjs-boilerplate.git

# Navigate to project directory
cd reactjs-boilerplate

# Install dependencies
pnpm install

# Start development server
pnpm start
```

The app will open at `http://localhost:1234`

## 📜 Available Scripts

| Script               | Description                  |
| -------------------- | ---------------------------- |
| `pnpm start`         | Start development server     |
| `pnpm build`         | Build for production         |
| `pnpm typecheck`     | Run TypeScript type checking |
| `pnpm lint`          | Run ESLint                   |
| `pnpm format`        | Format code with Prettier    |
| `pnpm test`          | Run tests in watch mode      |
| `pnpm test:run`      | Run tests once               |
| `pnpm test:coverage` | Run tests with coverage      |

## 🔐 Authentication

This boilerplate includes a basic authentication setup:

- **Login page** with Material UI form
- **Protected routes** using `ProtectedRoute` component
- **Auth store** (MobX) managing authentication state
- **Token persistence** in localStorage

> Note: The current implementation uses a fake token for demonstration. Replace with your actual authentication logic.

## 🌐 API Client

The boilerplate includes a production-ready HTTP client built on Axios:

```typescript
import { httpClient } from '@/core/api';

// GET request
const response = await httpClient.get<User>('/users/me');

// POST request
await httpClient.post('/auth/login', { email, password });

// Other methods: put, patch, delete
```

**Features:**
- **Singleton pattern** - Single instance across the app
- **Automatic token injection** - Reads from localStorage and adds to request headers
- **Request/Response interceptors** - For logging, error handling, etc.
- **Comprehensive error handling** - Network errors, HTTP errors, specific status codes
- **TypeScript support** - Fully typed responses and errors
- **Configurable** - Base URL, timeout, and custom headers

**Error Handling:**
All API errors follow the `ApiError` interface:

```typescript
interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: unknown;
}
```

**Configuration:**
Configure the base URL and other options when initializing (optional):

```typescript
const client = HttpClient.getInstance({
  baseURL: 'https://api.example.com',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'value' }
});
```

## 🎨 Theming

Material UI theme is configured in `src/index.tsx`:

```typescript
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
```

## 📝 Adding a New Feature

1. Create a new folder under `src/features/`:

   ```
   src/features/my-feature/
   ├── components/
   ├── hooks/
   ├── pages/
   ├── stores/
   └── index.ts
   ```

2. Export public API from `index.ts`

3. Add routes in `src/app/routes/AppRoutes.tsx`

## 🧪 Testing

Tests are written using Vitest and React Testing Library:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## 📄 License

MIT
