import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import './Navbar.css';
import {Link} from 'react-router-dom';


const { Header} = Layout;
const { Text } = Typography;


function Navbar() {
    return (
        <>
            <Header className="headerStyle">
                <Text className="title"> Beans Loves Beers</Text>
                <Text className="title1">Beers</Text>
                <Menu className="menuStyle" theme="dark" mode="horizontal" >
                    <Menu.Item  key="1">
                    <Link to="/">
                        Home
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Link to="/favourites">
                        Favourite
                    </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    );
}

export default Navbar;