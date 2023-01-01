import './app.css'
import Home from './components/pages/home/Home';
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar />
      <div className="app-container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
