import React, {useState} from 'react';

const NewComp = () => {
    let [num, setnum] = useState(0);
    const handleOnclick = () => {};
    console.log('DFDS');

    return (
        <>
            <div>{num}</div>
            <button onClick={handleOnclick}>click </button>
        </>
    );
};

export default NewComp;
