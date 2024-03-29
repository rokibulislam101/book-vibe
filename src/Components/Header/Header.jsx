import { Link, NavLink } from "react-router-dom";



const Header = () => {
        const links =<>
        <li><NavLink to='/'
         className=
         {({isActive})=>isActive? 'text-green-500 rounded-lg py-2 px-5 font-bold border-2 border-green-500': ' text-black rounded-lg py-2 px-5  font-bold'}>Home</NavLink></li>
        <li><NavLink to='/listed'
         className=
         {({isActive})=>isActive? 'text-green-500 rounded-lg py-2 px-5 font-bold border-2 border-green-500': ' text-black rounded-lg py-2 px-5  font-bold'}>Listed Books</NavLink></li>
        <li><NavLink to='pages'
         className=
         {({isActive})=>isActive? 'text-green-500 rounded-lg py-2 px-5 font-bold border-2 border-green-500': ' text-black rounded-lg py-2 px-5  font-bold'}>Pages to Read</NavLink></li>
        <li><NavLink to='classics'
         className=
         {({isActive})=>isActive? 'text-green-500 rounded-lg py-2 px-5 font-bold border-2 border-green-500': ' text-black rounded-lg py-2 px-5  font-bold'}>Classics</NavLink></li>
        <li><NavLink to='bestsellers'
         className=
        {({isActive})=>isActive? 'text-green-500 rounded-lg py-2 px-5 font-bold border-2 border-green-500': ' text-black rounded-lg py-2 px-5  font-bold'}>Bestsellers</NavLink></li>
       
        </>
    return (
      <div className="navbar shadow-2xl px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Books Feel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-5">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <Link className="btn bg-green-500">Log In</Link>
          <Link className="btn bg-teal-500">Register</Link>
        </div>
      </div>
    );
};

export default Header;