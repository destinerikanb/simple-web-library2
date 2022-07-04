import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <Nav vertical pills>
                <NavItem>
                    <NavLink to="home" className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="menus" className="nav-link">Article</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/auth/logout" className="nav-link">Logout</NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default SideBar;