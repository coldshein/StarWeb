import { Link, NavLink } from "react-router-dom";
import { styledActive } from "../helpers/styledActive";
import { NAV_LIST } from "../helpers/vars";

export const Header = () => {
  return (
    <header className="h-[80px] flex items-center px-5 mx-5 bg-secondary-bg rounded-md shadow-lg shadow-secondary-bg justify-between">
      <div className="md:flex-1">
        <Link
          to="/"
          className="text-lg md:text-3xl bg-yellow-400 p-3 rounded-md font-bold "
        >
          StarWeb
        </Link>
      </div>
      <ul className="flex items-center justify-center gap-6 md:flex-1">
        {NAV_LIST.map((navItem, index) => (
          <li key={index} className="uppercase">
            <NavLink to={navItem.path} className={styledActive}>
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden md:block md:flex-1"></div>
    </header>
  );
};
