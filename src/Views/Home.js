import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HelloWorld from '../Components/HelloWorld'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home(){
    //const url =`https://5f24c004c85de20016292ae3.mockapi.io/api/v3/products/?page=1&limit=10`
    const url =`https://5f24c004c85de20016292ae3.mockapi.io/db/8`
    
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data.August,
                error: false
            })
        })
        .catch (() => {
            setProducts({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url] )

    let content = null

    if(products.error){
        content = <p>
            Error Occured
        </p>
    }
    
    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard 
                        product={product}
                    />
                </div>
            )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl">
                운동 캘린더
            </h1>
            {content}
        </div>
    )
}
export default Home