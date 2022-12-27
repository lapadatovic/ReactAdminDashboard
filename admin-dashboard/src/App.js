import './app.css'
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="app-container">
        < Sidebar />
        <div className="others"></div>
      </div>
    </div>
  );
}

export default App;
