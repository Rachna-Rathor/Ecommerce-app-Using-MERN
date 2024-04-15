import React, { createContext, useContext, useState } from 'react'

export const authContext=createContext();
function AuthProvider({children}) {
    const initialAuthUser=localStorage.getItem("user")
    const [authUser,setauthUser]=useState(
        initialAuthUser?JSON.parse(initialAuthUser):undefined

    );
  return (
   <authContext.Provider value={[authUser,setauthUser]}>
    {children}
   </authContext.Provider>
  )
}
 export const useAuth=()=>useContext(authContext)
export default AuthProvider