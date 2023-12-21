import { Link } from "react-router-dom";
import { UserContext, useContext, userEffect } from "react";
import { UserContxt } from "../context/UserContext";
const baseURL = import.meta.erv.VITE_BASE_URL;

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;
    return <head>
        <Link to={"/"} className="logo">
            se npru
        </Link>
        <nav>
            {username && (
                <>
                    <Link to={"/create"}>Create new post</Link>
                    <a onClick={logout} >Logout({username})</a>
                </>
            )}
            {username && (
                <>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </>
            )}

        </nav>
    </head>
};
export default Header;