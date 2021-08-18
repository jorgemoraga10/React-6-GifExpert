

import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = [ 'Vans','Adidas','Nike'];
    const [categories , setCategories ] = useState([ 'WWE']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Maui&Sons'] );
    // };

    return (
        <>
            <h2> Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            {
                categories.map( category => 
                    <GifGrid category={ category } key={ category } />
                )
            }
        </>
    )
}
