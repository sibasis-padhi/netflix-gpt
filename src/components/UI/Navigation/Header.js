import React, { useEffect } from "react";
import { LOGO } from "../../../utils/constants";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //signout
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="dropdown inline-block relative">
          <img
            className="md:block w-12 h-12 cursor-pointer rounded-lg"
            alt="usericon"
            src={user?.photoURL}
          />
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-32 -ml-10">
            <li
              className="bg-gray-200 hover:bg-gray-400 py-2 px-1 block whitespace-no-wrap font-bold text-black text-center cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
