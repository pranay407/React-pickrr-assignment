import React, { useState} from 'react';
import { Input } from 'antd';
import './Searchbar.css'
import { Card, Space, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import LinesEllipsis from "react-lines-ellipsis";

const { Search } = Input;
const { Title } = Typography;
// const onSearch = value => console.log(value);




function Searchbar() {
    const [ser, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const handleBeers = (e) => {
        setQuery(e.target.value);
        // console.log(e.target.value);
        console.log(query);
    }

    const HandleSearch = (query) =>{
        
            fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
                .then(res => res.json())
                .then((data) =>{
                    setSearch(data);
                })
                
    
        
    }
    



    return (
        <>
            <Search
                className="searchStyle"
                placeholder="search for beer..."
                enterButton="search"
                size="large"
                value={query}
                onSearch={HandleSearch}
                onChange={(e) => handleBeers(e)}
            />
            <div className="card">
            {ser 
                ? ser.map((item) => {
                    return (
                        <div style={{ backgroundColor: 'white', padding: '10px' }}>


                            <Card style={{ height: '70%' }} key={item.id}
                                hoverable>
                                <StarOutlined
                                    className="iconStyle"

                                />
                                <Space>
                                    <img src={item.image_url} alt={item.name} style={{ width: 100, height: 300 }}></img>
                                    <Space direction="vertical">
                                        <Title level={3}>{item.name}</Title>
                                        <LinesEllipsis
                                            text={item.description}
                                            maxLine="3"
                                            ellipsis="..."
                                            trimRight
                                            basedOn="letters"
                                        />
                                    </Space>

                                </Space>
                            </Card>


                        </div>
                    )
                })
                :null}
            

        </div>


        </>
    );
}

export default Searchbar;