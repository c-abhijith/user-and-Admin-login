import { useContext } from "react";
import './Login.css'
import AuthContext from "../context/AuthContext";



const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
  //   <section style={{ backgroundImage: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`, backgroundRepeat: 'no-repeat',backgroundSize:" cover",height:"500px",
  // }}>
  <section className="login">
    
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        
        <div>
        <input type="text" id="username" placeholder="Enter Username" /><br></br>
        
        <input type="password" id="password" placeholder="Enter Password" /><br></br>
        </div>
        <button className="reg" type="submit">Login</button>
      </form>


     

      {/* <Card>
  <Box sx={{ p: 2, display: 'flex' }}>
    <Avatar variant="rounded" src="avatar1.jpg" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>Michael Scott</Typography>
      <Typography variant="body2" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} /> Scranton, PA
      </Typography>
    </Stack>
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
  </Box>
  <Divider />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
  >
    <Chip>Active account</Chip>
    <Switch />
  </Stack>
</Card> */}
    </section>
  );
};
export default Login