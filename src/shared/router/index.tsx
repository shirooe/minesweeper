import { Home, Game, Leaders } from '@/pages';
import {
  RouteObject,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const routes: RouteObject[] = createRoutesFromElements(
  <Route path="/" element={<Home />}>
    <Route index element={<Game />} />
    <Route path="leaders" element={<Leaders />} />
  </Route>,
);

export const router = createHashRouter(routes);
