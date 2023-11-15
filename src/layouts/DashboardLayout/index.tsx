import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <p>Header</p>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Products</Link>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default DashboardLayout;
