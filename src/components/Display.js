import React, {useState} from 'react';

const Display = () => {
    const [number, setnumber] = useState(0);
    //const {list} = props;
    const handlesumbutton = (event) => {
        setnumber((number) => number + 1);
        console.log('aaaaa');
    };
    const handleminusbutton = (event) => {
        setnumber((number) => number - 1);
    };
    return (
        <div>
            <span>this is {number} </span>
            <button onClick={(event) => handlesumbutton(event)}>+</button>
            <button onClick={(event) => handleminusbutton(event)}>-</button>
        </div>
    );
};
export default Display;
