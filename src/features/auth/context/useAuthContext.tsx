import { createContext, ReactNode, useContext, useState } from "react";
import { SuccessReturn } from "../api/authApi";


export type User = {
    userEmail : string;
    userName : string;
    userPhoneNumber : string;
    userId : string | "none";
    role: "admin" | "user" | "anon";
    authStatus : "identify" | "not_identify";
}


type AuthContextType = {
    user: User;
    setUserAsIdentify : () => void;
    setUserAsNotIdentify : () => void;
    setUserData : (email: string, name: string, number: string) => void;
    setUserFullData: (newUser: Partial<User>) => void;
    setUserDataFromResponce: (result : SuccessReturn) => void;
}


const AuthContext = createContext<AuthContextType | null>( null );


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

const defaultUserData : User = {
        role: "anon",
        authStatus : "not_identify",
        userEmail : "",
        userName : "user", 
        userPhoneNumber : "",
        userId: "none",
    };

export const AuthProvider = ({children} : {children : ReactNode}) => {
    let [authState, setAuthState] = useState<User>(defaultUserData);

    const setUserAsIdentify = () => {
        setAuthState((prev) => ({...prev, authStatus: "identify"}) );
    }

    const setUserAsNotIdentify = () => {
        setAuthState((prev) => ({...prev, authStatus: "not_identify"}) );
        setUserFullData(defaultUserData);
    }

    const setUserData = (email: string, name: string, number: string) => {
        setAuthState((prev) => ({...prev, userEmail: email, userName: name, userPhoneNumber: number}));
    }

    const setUserFullData = (newUser: Partial<User>) => {
        setAuthState(prev => ({ ...prev, ...newUser }));
    }

    const setUserDataFromResponce = (result : SuccessReturn) => {
        const responceUser = result.body.user;
        let userData = {
            userEmail: responceUser.email,
            userName: "",
            userPhoneNumber: "",
            userId: responceUser.uid,
            role: "user",
            authStatus: "identify",
        } as User;
        setUserFullData(userData);
    }


    return(
        <AuthContext.Provider value={{
            user: authState,
            setUserAsIdentify,
            setUserAsNotIdentify,
            setUserData,
            setUserFullData,
            setUserDataFromResponce,
        }}>
            {children}
        </AuthContext.Provider>
    );
}



































