import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setauthUser] = useAuth();
  const handleLogout = () => {
    try {
      setauthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("User Logout successfully");
    //   document.getElementById("my_modal_3").close();
    //   window.location.reload();
      setTimeout(() => {
        window.location.reload();

      }, 3000);
    } catch (error) {
      toast.error("error:", error.message);
      setTimeout(()=>{

      },2000)
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-orange-500  text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
