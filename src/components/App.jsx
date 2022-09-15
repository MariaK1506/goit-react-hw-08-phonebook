import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Container } from 'components/Container/Container';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container>
        {!isFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        )}
      </Container>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
