import { useState, useEffect } from 'react';

const ADMIN_AUTH_KEY = 'hastat_admin_auth_v1';
const ADMIN_PASSWORD_KEY = 'hastat_admin_password_v1';
const DEFAULT_PASSWORD = 'admin123';

export const useAdminAuth = () => {
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    return hash.includes('admin') || path.includes('/admin');
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });

  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      setIsAdminRoute(hash.includes('admin') || path.includes('/admin'));
    };

    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  const login = (passwordAttempt: string): boolean => {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (passwordAttempt === storedPassword) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    setIsAuthenticated(false);
  };

  const changePassword = (newPassword: string) => {
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
  };

  const navigateToSite = () => {
    window.location.hash = '';
    setIsAdminRoute(false);
  };

  const navigateToAdmin = () => {
    window.location.hash = '#admin';
    setIsAdminRoute(true);
  };

  return {
    isAdminRoute,
    isAuthenticated,
    login,
    logout,
    changePassword,
    navigateToSite,
    navigateToAdmin,
  };
};
