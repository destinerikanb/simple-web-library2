import client from "../../shared/http-client/Client";

const LoginService = () => {
    async function login(body){
        console.log("masuk service");
        console.log(body);
        const response = await client.post('/auth/login', body, {responseType : 'json'})
        return response;
    }

    return{
        login
    }
}

export default LoginService;