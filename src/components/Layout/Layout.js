import { Outlet } from 'react-router-dom';
import Header from './LayoutComponents/Header';
import NavBar from './LayoutComponents/NavBar';
import Footer from './LayoutComponents/Footer';

function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
