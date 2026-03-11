import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
