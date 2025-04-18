// NODE MODULES...
import { createBrowserRouter } from 'react-router';

// LAYOUTS...
import RootLayout from '@/layouts/RootLayout';
import DashboardLayout from '@/layouts/DashboardLayout';

// PAGES...
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import UserDashboard from '@/pages/UserDashboard';
import Loans from '@/pages/Loans';
import Profile from '@/pages/Profile';
import RequestDetails from '@/pages/RequestDetail';
import MultiStepForm from '@/pages/MultiStepForm';

// ACTIONS...
import signupAction from '@/routes/actions/signupAction';
import signInAction from '@/routes/actions/signInAction';

// PROTECTED ROUTES...
import { ProtectedRoute, PublicRoute } from '@/components/ProtectedRoute';

// LOADERS...
import loaderLoans from './loader/loaderLoans';
import requestDetailLoader from './loader/requestDetailLoader';

// CONFIGURE ROUTING ELEMENTS...
const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute />,
    children: [
      {
        path: '',
        element: <RootLayout />,
        action: signupAction,
      },
      {
        path: 'signup',
        element: <SignUp />,
        action: signupAction,
      },

      {
        path: 'signin',
        element: <SignIn />,
        action: signInAction,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <UserDashboard />,
          },
          {
            path: 'loans',
            element: <Loans />,
            loader: loaderLoans,
          },

          {
            path: 'newLoan',
            element: <MultiStepForm />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },

      {
        path: 'requestDetail/:requestId',
        element: <RequestDetails />,
        loader: requestDetailLoader,
      },
    ],
    // action: signupAction,
  },
]);

export default router;
