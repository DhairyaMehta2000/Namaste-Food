import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import { Outlet } from "react-router";


function App() {
  return (
    <div className="App">
      
      {/* making sure that header stays on every page render as App route is parent of every route */}
      <Header />

      {/* rendering child routes of App here based on what the path is */}
      <Outlet />
    </div>
  );
}

export default App;
