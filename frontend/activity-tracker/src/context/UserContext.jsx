import { createContext,useState } from "react";
export const UserContxt = createContext({});
export const UserContxtProvider = ({ children }) => {
    const [userInfo, setUserInterval] = useState({});
    return (
        <UserContxt.Provider value={{ userInfo, setUserInterval}}>
            {children}
        </UserContxt.Provider>
    )
}