import { useContext } from "react";
import UserInfo from "../Components/UserInfo";
import AuthContext from "../context/AuthContext";
import Admin from "./Admin";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
       {user?(user.is_superuser?(<Admin></Admin>):(<UserInfo user={user} />)):(<h1 className="text-center mt-5"> </h1>)}
      {user.is_superuser === 1 ? 'You are on home page! ': ''}
    </section>
  );
};

export default Home;