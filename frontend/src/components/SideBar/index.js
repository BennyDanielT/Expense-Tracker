import {Menu, MenuItem, ProSidebar, SidebarContent, SubMenu} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import {routes} from "../../constants";
import {useState} from "react";

function SideBar() {

    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value);
    }


    return (
        <ProSidebar
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            breakPoint="md"
        >
            <SidebarContent>
                <Menu>
                    <MenuItem> <Link to={routes.home.path}>HomePage</Link></MenuItem>
                    <SubMenu title={"User Management"}>
                        <MenuItem> <Link to={routes.login.path}>Login</Link></MenuItem>
                        <MenuItem><Link to={routes.register.path}>Register</Link></MenuItem>
                        <MenuItem><Link to={routes.forgotPassword.path}>Forgot Password</Link></MenuItem>
                        <MenuItem><Link to={routes.passwordChanged.path}>Change Password</Link></MenuItem>
                    </SubMenu>
                    <SubMenu title={"Group Expense Tracking"}>
                        <MenuItem> <Link to={routes.group.path}>Group</Link></MenuItem>
                        <MenuItem> <Link to={routes.createGroup.path}>Create Group</Link></MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    )
}

export {SideBar}