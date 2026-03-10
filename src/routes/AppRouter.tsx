import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from '../components/Layout';
import { LoadingState } from '../components/LoadingState';
import { ExplorerPage } from '../pages/ExplorerPage';
import { FactorPage } from '../pages/FactorPage';
import { HomePage } from '../pages/HomePage';

const ComparisonPage = lazy(() => import('../pages/ComparisonPage').then((module) => ({ default: module.ComparisonPage })));
const LocalRealityPage = lazy(() => import('../pages/LocalRealityPage').then((module) => ({ default: module.LocalRealityPage })));
const SimulatorPage = lazy(() => import('../pages/SimulatorPage').then((module) => ({ default: module.SimulatorPage })));
const TakeawaysPage = lazy(() => import('../pages/TakeawaysPage').then((module) => ({ default: module.TakeawaysPage })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'explorer', element: <ExplorerPage /> },
      { path: 'explorer/:factorId', element: <FactorPage /> },
      {
        path: 'compare',
        element: (
          <Suspense fallback={<LoadingState />}>
            <ComparisonPage />
          </Suspense>
        )
      },
      {
        path: 'local-reality',
        element: (
          <Suspense fallback={<LoadingState />}>
            <LocalRealityPage />
          </Suspense>
        )
      },
      {
        path: 'simulator',
        element: (
          <Suspense fallback={<LoadingState />}>
            <SimulatorPage />
          </Suspense>
        )
      },
      {
        path: 'takeaways',
        element: (
          <Suspense fallback={<LoadingState />}>
            <TakeawaysPage />
          </Suspense>
        )
      }
    ]
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
