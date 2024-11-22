import { Link, NavLink } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { authContext } from "./AuthProvaider";

const Header = () => {
  const { user, handelSignout } = useContext(authContext);
  // toggle code
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  // navbar links
  const links = (
    <>
      <NavLink
        onClick={hideMenu}
        className={({ isActive }) => [isActive ? "text-blue-500" : ""]}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        onClick={hideMenu}
        className={({ isActive }) => [isActive ? "text-blue-500" : ""]}
        to={"/update-profile"}
      >
        Update Profile
      </NavLink>
      <NavLink
        onClick={hideMenu}
        className={({ isActive }) => [isActive ? "text-blue-500" : ""]}
        to={"/user-profile"}
      >
        My Profile
      </NavLink>
      {user && (
        <button>
          <div className="avatar tooltip" data-tip={user?.displayName}>
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </button>
      )}

      {user ? (
        <div>
          <NavLink
            onClick={handelSignout}
            className="btn bg-blue-500 hover:bg-blue-600 border-none shadow-none text-white"
          >
            Logout
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink
            onClick={hideMenu}
            to={"/login"}
            className="btn bg-blue-500 hover:bg-blue-600 border-none shadow-none text-white"
          >
            Login
          </NavLink>
        </div>
      )}
    </>
  );

  return (
    <>
      <div className="shadow-lg h-28 flex items-center sticky top-0 z-50 bg-white/70 backdrop-blur-md">
        <div className="navbar container mx-auto px-3">
          <div className="flex-1">
            <Link
              to={"/"}
              className="text-blue-500 bg-transparent border-none shadow-none sm:text-3xl text-xl font-bold flex items-center gap-2"
            >
              <img className="w-10" src="/adventure.png" alt="" />
              <i> Eco-Adventure</i>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-8 items-center font-medium hidden md:flex">
              {links}
            </ul>
            <div>
              <RxHamburgerMenu
                onClick={toggleMenu}
                className="text-2xl md:hidden"
              />
            </div>
            {isMenuVisible && (
              <ul className="flex flex-col gap-3 font-medium absolute w-full z-50 left-0 top-[112px] border-t bg-white p-8">
                {links}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
