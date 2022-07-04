import { useNavigate, useParams } from "react-router-dom"

const RouteNavigation = () => {
    const navigate = useNavigate();
    const params = useParams();

    const nav = (url) => {
        navigate(url)
    }

    return {
        nav,
        params
    }
}

export default RouteNavigation;