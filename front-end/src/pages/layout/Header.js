import { Navbar, NavbarBrand } from "reactstrap"

const Header = () => {
    return (
        <Navbar dark color="primary" className="shadow mb-4">
            <NavbarBrand className="mr-auto">LIBRARY MANAGEMENT</NavbarBrand>
        </Navbar>
    )
}

export default Header;