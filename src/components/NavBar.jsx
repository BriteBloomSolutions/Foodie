import {Link, NavLink} from 'react-router-dom';
import "./NavBar.css";
import * as userService from "../utilities/users-service";
import Search from '../components/Search'


const NavBar = ({ user, setUser }) => {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    
    <nav>  
    <NavLink to="/recipe"> Browse by Category </NavLink>  
    {/* <NavLink to="/recipe/new/"> New Recipe </NavLink>   */}
    &nbsp;&nbsp;<span>Welcome, {user.name}</span>
&nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
<Search />
    </nav>  
   
  );
};

export default NavBar;
  