import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Products</Link>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
