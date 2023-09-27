import "../pages/Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const DashHeader = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div className="dash__header__bar">
      <h2 style={{color:'white'}} className="dahsboard">Lavesh Vishwakarma</h2>

      <div className="header__right">
       {/*  */}
        <div className="flex items-center space-x-2 lg:space-x-5">
          <nav className="flex items-center space-x-2">
            <Link
              to="/"
              className="group text-xxl font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-purple-600 border border-purple-100 bg-purple-50 "
            >
              <span>Home</span>
            </Link>
            <Link
              to="/jobs"
              className="group text-xxl font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent hover:text-purple-600 hover:bg-purple-50 active:border-purple-100 "
            >
              <span>Jobs</span>
            </Link>
          </nav>
        </div>

        <div className="profile__icon">
          {isAuthenticated && <img src={user.picture} alt="userimage" />}

          <ul
            className="profile__dropdown"
          >
            <li>{user?.name}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
        <button
          className="menu__toggle "
          onClick={() => {
            document
              .querySelector(".sidebar__container")
              .classList.toggle("active");
          }}
        >
          <i className="ri-menu-4-line"></i>
        </button>
      </div>

    
    </div>
  );
};

export default DashHeader;
