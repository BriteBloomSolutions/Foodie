import {Link, NavLink} from 'react-router-dom';
import "./NavBar.css";
import * as userService from "../utilities/users-service";



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
    <NavLink to="/orders"> Order History </NavLink>  
    <NavLink to="/order/new/"> New Order </NavLink>  
    &nbsp;&nbsp;<span>Welcome, {user.name}</span>
&nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>  
   
  );
};

export default NavBar;
  