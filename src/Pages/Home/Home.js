import React from 'react';
import { Layout} from 'antd';
import Navbar from '../../Components/Navbar/NavBar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import { Space } from 'antd';
import Beers from '../../Components/Beers/Beers';




function Home() {
    return (
        <>
            <Layout className="layout">
                <Space style={{backgroundColor:'#fff'}} direction="vertical">
                    <Navbar></Navbar>
                    <Searchbar></Searchbar>
                    <Beers></Beers>
                </Space>

            </Layout>

        </>
    );
}

export default Home;