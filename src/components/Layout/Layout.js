import { Outlet } from 'react-router-dom';
import Header from './LayoutComponents/Header';
import NavBar from './LayoutComponents/NavBar';

function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
