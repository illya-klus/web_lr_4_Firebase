
import { SuccessReturn } from "../api/authApi";
import { useAuth, User } from "../context/useAuthContext"
import RegisterPage from "./RegisterPage"




const RegisterPageHok = () => {

    const {user, setUserFullData} = useAuth();

    const setUser = (result : SuccessReturn) => {
        console.log(user);

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
        console.log(user);
    }

    return <RegisterPage setUser={setUser} />
}

export default RegisterPageHok;