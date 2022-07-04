import { useNavigate } from "react-router-dom";

const LoginBloc = (loginRepository) => {
    let {login} = loginRepository();
    const navigate = useNavigate();

    const handlelogin = async (values) => {
        console.log("masuk bloc");
        try{
            let res = await login(values)
            const dataToken = res.data.token;
            sessionStorage.setItem("token", dataToken);
            console.log("session token : ", sessionStorage.getItem);
            navigate("/protected");
        }catch (error) {
            alert("Incorrect username or password!");
        }
    }

    return {
        handlelogin
    }
}

export default LoginBloc;