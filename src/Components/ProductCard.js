import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props)
{
    var dict = props.product;
    var arr = [];
    var num = 1;

    for (var key in dict)
    {
        arr.push(dict[key]);
    }

    return (
        <div>{arr.map((product) =>
            <div key={num}>
                <div className="border mb-4 rounded overflow-hidden">
                    {/*
            <Link to={`/products/${props.product.id}`}>
                    style={{
                        'backgroundImage': `url('${props.product.images[0].images}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
                */}
                    <div className="p-3">
                        <h3 className="font-bold text-xl mb-3">
                            <Link to={`/products/${props.product.id}`}>
                                {num++}일
                    </Link>
                        </h3>
                        <div className="font-bold mb-3">
                            {product}
                        </div>
                        <Link
                            to={`/products/${props.product.id}`}
                            className="bg-blue-500 text-white p-2 flex justify-center w-full"
                        >
                            No touch
                </Link>
                    </div>
                </div>
            </div>

        )}</div>




    )
}
export default ProductCard