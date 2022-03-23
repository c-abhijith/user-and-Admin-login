import React,{useState,useContext,useEffect} from 'react';
import AuthContext from "../context/AuthContext";
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
    

function EditUser() {
    const [userdetail,setUserdetail] = useState([]);
    const [username, setUsername] = useState(userdetail.username);
    const [email, setEmail] = useState(userdetail.email);
    const navigate = useNavigate();
    
    const { addUser,user } = useContext(AuthContext);
    const {id} = useParams();
    let details ={
        username:username,
        email:email,

    }

    console.log(id)
    console.log("helloooooooooooooo")
    const handleSubmit = async e => {
      e.preventDefault();
      console.log(details)
      axios.put(`http://127.0.0.1:8000/user/users/${id}/`,details);
     navigate("/admin")

    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/user/users/${id}/`)
        .then(res => {
         console.log(res.data)
         setUsername (res.data.username)
         setEmail (res.data.email)
        })
      },[]);
  return (
    <section>
    {user?(
        <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-3">Edit User</h1>
        <hr />
        <div className="text-center mt-3">
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        {/* <div className="mt-3">
          <label htmlFor="username">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div> */}
        
        <button type='submit'>Edit</button>
        </div>
      </form>
        
    ):(
      <h1 className="text-center mt-3">Edit user</h1>
  )}
</section>
  )
}

export default EditUser