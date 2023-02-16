import { router } from '@/shared/router';
import { RouterProvider } from 'react-router-dom';
import { withProviders } from './providers';
import './styles.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default withProviders(App);
