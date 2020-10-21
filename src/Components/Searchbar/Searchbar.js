import React, { useState } from 'react';
import { Input } from 'antd';
import './Searchbar.css'

const { Search } = Input;
// const onSearch = value => console.log(value);




function Searchbar(){
    const [ser, setSearch] = useState("");
    const handleBeers = (e) =>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    return(
        <>
            <Search 
            className="searchStyle" 
            placeholder="search for beer..." 
            enterButton="Search" 
            size="large" 
            // onSearch={onSearch}
            onChange={(e) => handleBeers(e)} />
        </>
    );
}

export default Searchbar;