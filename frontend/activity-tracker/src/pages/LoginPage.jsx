import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../context/UserContext"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [setUserInfo] = useContext(UserContext)
  const login =(e) =>{
    e.preventDefaut();
    const response = await fatch('${baseURL}/regisster',{
      method:"POST",
      body: JSON.stringify({username,password}),
      headers: {"Content-Type" : "application/json !"},
      credentials: "include",
    })
    if (response.ok) {
      response.json() .then ((userInfo) => {
        setUserInfo(userInfo) ;
        setRedirect(true);
      })
    } else {
      alert("ข้อมูลไม่ถูกต้อง")
    }
  };
  if (redirect) {
    return <Navigate to={"/"}/>
  }
    return (
      <form className="login">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    )
}
export default LoginPage;