import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'

function Product(){
    const { id } = useParams()
    //const url =`https://5f24c004c85de20016292ae3.mockapi.io/api/v3/products/${id}`
    const url =`https://5f24c004c85de20016292ae3.mockapi.io/api/v3/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch (() => {
            setProduct({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url] )
    if(product.error){
        content = <p>
            Error Occured
        </p>
    }
    
    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {id}번째 페이지. 　
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[1].images}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    ${product.data.price}
                </div>
                <div className="font-bold text-xl mb-3">
                    {product.data.desp}
                </div>
            </div>
    }

    return(
        <div>
            <h1>{content}</h1>
            <h1>로딩이 되었나</h1>
            <Loader></Loader>
        </div>
    )
    
}
export default Product