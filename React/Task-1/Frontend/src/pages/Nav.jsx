import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <div className="navbar">
                <h4><NavLink className={"NavLink"} to={"/"}>Home</NavLink></h4>
                <h4><NavLink className={"NavLink"} to={"/User"}>Users</NavLink></h4>
                <h4><NavLink className={"NavLink"} to={"/Product"}>Products</NavLink></h4>
                <h4><NavLink className={"NavLink"} to={"/About"}>About</NavLink></h4>
            </div>
        </div>
    )
}

export default Nav