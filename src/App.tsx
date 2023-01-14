import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.scss";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Chat from "./components/Chat";
import { ErrorFallback } from "./components/ErrorFallBack";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import { Suspense } from "react";

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
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {/* <Suspense fallback={<div>...Loading</div>}> */}
            <Sidebar />
            {/* </Suspense> */}
          </ErrorBoundary>
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
