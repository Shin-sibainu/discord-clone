import React, { useEffect } from "react";
import "./App.scss";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useAppSelector((state) => state.user.user);
  // console.log(user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          {/* sidebar */}
          <Sidebar />
          {/* home */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
