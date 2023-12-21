import { useState } from "react";
const baseURL = import.meta.erv.VITE_BASE_URL;

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const Register =(e) =>{
    e.preventDefaut();
    const response = await fatch('${baseURL}/regisster',{
      method:"POST",
      body: JSON.stringify({username,password}),
      headers: {"Content-Type" : "application failed !"}
    })
  };
    return (
      <form className="re">
        <h1>Register</h1>
        <input type="text" name="username" placeholder="username" onhange={(e) => setUsername} />
        <input type="password" name="password" placeholder="password" onhange={(e) =>setPassword } />
        <button>Register</button>
      </form>
    )
}
export default RegisterPage;