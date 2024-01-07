import { Link } from "react-router-dom";
import { UserContext, useContext, userEffect } from "react";
import { UserContxt } from "../context/UserContext";
const baseURL = import.meta.erv.VITE_BASE_URL;

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;

    const logout = () => {
        fetch(`${baseURL}/logout`, {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    };

    return (
        <>
            <nav class="bg-teal-50">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-teal-600">SE BLOG</span>
                    </Link>
                    <div class="flex flex-col md:flex-row w-full md:block md:w-auto" id="navbar-default">
                        {username && (
                            <>
                                <Link
                                    to={"/create"}
                                    class="text-teal-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center md:me-2 mb-2 md:mb-0"
                                >
                                    Create
                                </Link>
                                <button
                                    type="button"
                                    onClick={logout}
                                    class="text-yellow-50  hover:bg-teal-800 bg-teal-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"                >
                                    Logout({username})
                                </button>
                            </>
                        )}
                        {!username && (
                            <>
                                <Link
                                    to={"/login"}
                                    class="text-yellow-50  hover:bg-teal-800 bg-teal-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"                >
                                    Sign in
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
};
export default Header;