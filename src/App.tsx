import { ErrorBoundary } from './components';
import { Router } from './routes';

export const App = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
);

export default App;
