import { ErrorBoundary } from './shared';
import { AppRoutes } from './app/routes';

export const App = () => (
  <ErrorBoundary>
    <AppRoutes />
  </ErrorBoundary>
);

export default App;
