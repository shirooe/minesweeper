import { RouterProvider } from 'react-router-dom';
import { withProviders } from './providers';
import { Provider } from '@/shared/context';
import { router } from '@/shared/router';
import './styles.scss';

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default withProviders(App);
