import React,{useState,useContext} from 'react'
import AuthContext from "../context/AuthContext";
import { Link } from 'react-router-dom';

function Adduser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { addUser,user } = useContext(AuthContext);
  
    const handleSubmit = async e => {
      e.preventDefault();
      addUser(username, password, password2);
    };
  
  return (
    <section>
    {user?(
        <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-3">Add user</h1>
        <hr />
        <div className="text-center mt-3">
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
       
        <div className="mt-3">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="mt-3">
          <label htmlFor="confirm-password">Confirm Password : </label>
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        
        <button type='submit'>Add</button>
        </div>
      </form>
        
    ):(
      <h1 className="text-center mt-3">Add user</h1>
  )}
</section>
  )
}

export default Adduser