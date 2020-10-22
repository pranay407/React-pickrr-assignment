import React, { useState } from 'react';
import { Input } from 'antd';
import './Searchbar.css'

const { Search } = Input;
// const onSearch = value => console.log(value);




function Searchbar(){
    const [ser, setSearch] = useState("");
    // const [query, setQuery] = useState("");
    const handleBeers = (e) =>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    // const HandleSearch =() =>{
    //     useEffect(() =>{
    //         fetch('https://api.punkapi.com/v2/beers?beer_name=${ser}')
    //             .then(res => res.json())
    //             .then(data => setSearch(data))
                
    //     })
    // }
    
    return(
        <>
            <Search 
            className="searchStyle" 
            placeholder="search for beer..." 
            enterButton="search" 
            size="large" 
            value={ser}
            // onSearch={HandleSearch}
            onChange={(e) => handleBeers(e)}
             />
        </>
    );
}

export default Searchbar;