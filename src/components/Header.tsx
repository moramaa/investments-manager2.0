import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">השקעות</a>
      </div>
      <div className="navbar-end">
       
          <div className="dropdown-end dropdown">
            {sessionData?.user ? (
              <div className="dropdown">
                <label tabIndex={0} className="btn-ghost btn-circle avatar btn">

                  <div className="w-10 rounded-full">
                    <img
                      src={sessionData?.user?.image ?? ""}
                      alt={sessionData?.user?.name ?? ""} />
                  </div>
                </label>

                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a onClick={() => void signOut()}>התנתק</a></li>
                  <li><a>פרטים אישים</a></li>
                </ul>


              </div>
            ) : (
              <button
                className="btn-ghost rounded-btn btn"
                onClick={() => void signIn()}
              >
                התחבר
              </button>
            )}
          </div>
      </div>
    </div>
    
    
  );
};
