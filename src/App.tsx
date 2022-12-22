import React from "react";
import "./App.scss";
import { useSelector } from "./app/store";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  const user = useSelector((state) => state.user.user);
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
