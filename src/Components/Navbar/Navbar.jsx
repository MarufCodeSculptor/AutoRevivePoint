import { Link, NavLink } from 'react-router-dom';
import navlogo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/about"> About </NavLink>
      </li>
      <li>
        <NavLink to="/services"> Services </NavLink>
      </li>
      <li>
        <NavLink to="/blogs"> Blogs </NavLink>
      </li>
      <li>
        <NavLink to="/contacts"> Contacts </NavLink>
      </li>
      <li>
        <NavLink to="/bookings"> Bookings </NavLink>
      </li>
      <li>
        <NavLink to="/login"> Login </NavLink>
      </li>
      {user && (
        <li>
          <button className="btn btn-error" onClick={handleSignOut}>
            log out
          </button>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <span className="border">
            <Link to="/">
              {' '}
              <img src={navlogo} alt="" />{' '}
            </Link>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/apoinment" className="btn btn-outline btn-warning">
            {' '}
            Apoinment{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
