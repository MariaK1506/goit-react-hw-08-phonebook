import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import authOperations from '../redux/auth/auth-operations';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* </Container> */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
// export default function App() {
//   const { data: contacts, isFetching } = useGetContactsQuery();
//   return (
//     <>
//       <GlobalStyle />
//       {isFetching && <Loader />}

//       {!isFetching && (
//         <>
//           <h1>Phonebook</h1>
//           <Section>
//             <Container>
//               <ContactForm />
//             </Container>
//           </Section>
//           <Section title="Contacts">
//             <Container>
//               <Filter />
//               {contacts && <ContactsList />}
//             </Container>
//           </Section>
//         </>
//       )}
//       <ToastContainer position="top-center" autoClose={1500} />
//     </>
//   );
// }
