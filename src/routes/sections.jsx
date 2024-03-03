import { lazy, Suspense} from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

// import ProtectedRoute from '../components/protected/protected'; 



export const IndexPage = lazy(() => import('src/pages/app'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const UserPage = lazy(() => import('src/pages/user'));


export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },

        // Protected Routes
        // { path: 'admin', element: <ProtectedRoute component={AdminPage} role="admin" /> },
        // { path: 'user', element: <ProtectedRoute component={UserPage} role="user" /> },
        
        { path: 'user', element: <UserPage /> },
      
      ],
    },

    {
      path: 'register',
      element: <RegisterPage />,
    },

    {
      path: 'login',
      element: <LoginPage />,
    },



   
   
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '', // Empty path for the default route
      element: <Navigate to="/login" replace />, // Redirect to the login route
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);



  return routes;
}
