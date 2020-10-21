import React from 'react';
import { Layout, Space } from 'antd';
import Navbar from '../../Components/Navbar/NavBar';
import Searchbar from '../../Components/Searchbar/Searchbar';

function Favourites() {
    return (
        <>
            <Layout>
                <Space direction="vertical">
                    <Navbar ></Navbar>
                    <Searchbar></Searchbar>
                </Space>
            </Layout>
        </>
    );
}

export default Favourites;