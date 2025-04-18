// NODE MODULES...
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

// CSS LINKS
import './index.css';
import router from '@/routes';

// AUTH CONTEXT...
import { AuthContextProvider } from './contexts/AuthContext';

// COMPONENTS...
import { Toaster } from '@/components/ui/sonner';
import { ToggleContextProvider } from './contexts/ToggleContext';
import LoadingPage from './components/LoadingPage';
import { LoanContextProvider } from './contexts/LoanContext';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <HelmetProvider>
      <LoanContextProvider>
        <ToggleContextProvider>
          <RouterProvider router={router} />
          <Toaster
            theme='dark'
            toastOptions={{ duration: 5000 }}
          />
        </ToggleContextProvider>
      </LoanContextProvider>
    </HelmetProvider>
  </AuthContextProvider>,
);
