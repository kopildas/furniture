import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { useStateValue } from "../../context/StateProvider";
import Home from "../../pages/Home/Home";


export default function PrivateAdminRoute() {

  const [{user}, dispatch] = useStateValue();
  console.log(user);
  const [useremail, setUseremail] = useState (null);

  useEffect(()=> {
    if(user)
    {
     setUseremail(user.email)
    }
   },[user])

  
//   const { loggedIn, checkingStatus, idd } = useAuthStatus();

//   if (checkingStatus || !useremail) {
//     return <Spinner />;
//   }


  console.log(user.email);
  if (user && useremail === "w3@gmail.co") {
    return <Outlet />;
  
} else {
  return <Home />;
}


}