import React, {useState} from 'react'

function CounterExample(){
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className="font-bold">
                {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                더하기
            </h1>
            <h1 onClick={() => setCount(count - 1)}>
                빼기
            </h1>
        </div>
    )
}
export default CounterExample