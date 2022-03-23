import React,{useContext,useState,useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";



function Admin() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  const [users,setUsers] = useState([]); 
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/user/users/`)
    .then(res => {
     console.log(res.data)
     setUsers (res.data)
    })
  },[]);
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   axios.delete(`http://127.0.0.1:8000/user/users/${id}/`);
  //  navigate("/adminpanelcrud")

  // };
  const styles ={
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor:'red',
    };
  const stylesone ={
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor:'green',
    };

  return (

      



    
  

<table class="table">
  <thead>
    <tr>
      <th scope="col">SiNo</th>
      <th scope="col">Username</th>
      <th scope="col">  </th>
      <th scope="col">  </th>
      <th scope="col"> <Link to="/admin/adduser"><button style={{backgroundColor:"blue"}}>Add</button></Link></th> 
    </tr>
  </thead>
  {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody> */}



{/* 
      <div className='text-center'>
      <table className='center' striped bordered hover>
  <table> */}

    {/* <tr>
      <th>No</th>
      <th>Username</th>
      
      <th>Edit</th>
      <th>Delete</th>
      
    </tr>
  </table> */}
  <tbody>
    {
      users.map((value,index)=>
        <tr>
          <td>{index + 1}</td>
        <td>{value.username}</td>
        
        <td><Link to={`/admin/edituser/${value.id}`}><button  style={stylesone}>Edit</button></Link></td>
        
        <td><button onClick={()=>{
            axios.delete(`http://127.0.0.1:8000/user/users/${value.id}/`).then(res =>{
              window.location.reload(false);
            })

        }} style={styles}>Delete</button></td>
      </tr>

      )
    }
   
  </tbody>
</table>


  )
}

export default Admin