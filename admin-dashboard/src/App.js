import './app.css'
import Home from './components/pages/home/Home';
// import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';
import NewUser from './components/pages/newUser/NewUser';
import ProductList from './components/pages/productList/ProductList';
import {
	BrowserRouter as Router,
	Routes,
	Route,
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
          <Route path='/user/:userId' element={<User/>}></Route>
          <Route path='/newUser' element={<NewUser />}></Route>
          <Route path='/products' element={<ProductList />}></Route>
        </Routes>
      </div>
    </Router> 
  );
}
export default App;
