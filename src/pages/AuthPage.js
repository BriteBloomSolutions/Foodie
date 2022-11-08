import { useState} from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm'

const AuthPage = ({setUser}) => {
  const [showSignUp, setSignUp] = useState(true);
    return (
      <main>
        <h1>Auth Page</h1>
        {showSignUp ? <SignUpForm setUser = {setUser}/> : <LoginForm setUser={setUser}/>}
  <button onClick={() => setSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}></button>
 </main>
    );
  };
  
  export default AuthPage;
  