import './app.css'
import Home from './components/pages/home/Home';
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from './components/pages/userList/UserList';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Topbar />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/users' element={<UserList/>}></Route>
        </Routes>
      </div>
    </Router> 
  );
}
export default App;
