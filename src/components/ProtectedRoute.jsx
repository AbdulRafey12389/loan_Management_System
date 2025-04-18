// NODE MODULES...
import React from 'react';
import { Outlet, Navigate, useNavigation } from 'react-router';

// CONTEXTS
import { useAuth } from '@/contexts/AuthContext';

// COMPONENTS
import LoadingPage from './LoadingPage';

export const ProtectedRoute = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  if (!user)
    return (
      <Navigate
        to='/'
        replace
      />
    );

  return <>{navigation.state === 'loading' ? <LoadingPage /> : <Outlet />}</>;
};

export const PublicRoute = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  if (user)
    return (
      <Navigate
        to='/dashboard'
        replace
      />
    );

  return <>{navigation.state === 'loading' ? <LoadingPage /> : <Outlet />}</>;
};
