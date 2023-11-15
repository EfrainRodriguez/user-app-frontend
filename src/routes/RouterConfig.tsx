import {
  lazy,
  LazyExoticComponent,
  Fragment,
  Suspense,
  ReactNode
} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

interface GuardProps {
  children: ReactNode;
}

interface RouteObject {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  children?: RouteObject[];
  guard?: LazyExoticComponent<(props: GuardProps) => JSX.Element> | undefined;
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazy(async () => await import('@/layouts/DashboardLayout')),
    children: [
      {
        path: '',
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: 'products',
        element: lazy(async () => await import('@/pages/Products'))
      }
    ],
    guard: lazy(async () => await import('@/guards/AuthGuard'))
  },
  {
    path: '/login',
    element: lazy(async () => await import('@/pages/Login'))
  }
];

const renderRoutes = (routes: RouteObject[]) => {
  return routes.map(({ path, element, children, guard }) => {
    const Element = element || Fragment;
    const Guard = guard || Fragment;
    return (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<CircularProgress />}>
            <Guard>
              <Element />
            </Guard>
          </Suspense>
        }
      >
        {children && renderRoutes(children)}
      </Route>
    );
  });
};

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;