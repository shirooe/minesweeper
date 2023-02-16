import { Layout, Main, Leaders } from '@/pages';
import {
  RouteObject,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const routes: RouteObject[] = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Main />} />
    <Route path="leaders" element={<Leaders />} />
  </Route>,
);

export const router = createHashRouter(routes);
