import React from "react";
import "./App.scss";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <h1>DiscordClone with typescript</h1> */}
      {/* sidebar */}
      <Sidebar />

      {/* home */}
      <Chat />
    </div>
  );
}

export default App;
