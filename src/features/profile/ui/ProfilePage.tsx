import { NavLink, Outlet } from "react-router-dom";
import avatar from "/public/images/avatar.jpg"


const BtnsPanel = () => {

  return(
    <div className="flex flex-wrap gap-3 border-b pb-3 justify-center sm:justify-start">
      <NavLink to='/profile/history' className={({isActive}) => (isActive ? "bg-[#00d1b2] text-white " : "") + "px-4 py-2 rounded-lg transition"}>
        History
      </NavLink>
      
      <NavLink to='/profile' className={({isActive}) => (isActive ? "bg-[#00d1b2] text-white " : "") + "px-4 py-2 rounded-lg transition"} end>
          Selected
      </NavLink>
    </div>
  );
}


const ProfilePage = () => {

  return (
    <section id="profile" className="w-full py-6 sm:py-10 px-3 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col gap-6 sm:gap-8">

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center md:items-start text-center md:text-left">

          <div className="max-w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center bg-gray-50">
            <img
              src={avatar}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold">User name</h2>
            <p><span className="font-semibold">Email: </span>User email</p>
            <p> <span className="font-semibold">Number: </span>+380990626544</p>
            <p><span className="font-semibold">Description: </span>User description</p>
            {/* <p><span className="font-semibold">Items in cart: </span>52</p> */}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <BtnsPanel/>
          <Outlet/>
        </div>

      </div>
    </section>
  );
};

export default ProfilePage;