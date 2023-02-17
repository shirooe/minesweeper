import { Layout, Leaders, Main } from '@/pages';
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Main />} />
    <Route path="leaders" element={<Leaders />} />
  </Route>,
);

export const router = createHashRouter(routes);
