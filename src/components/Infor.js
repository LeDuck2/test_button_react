import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Infor = () => {
    //https://jsonplaceholder.typicode.com/todos
    //https://jsonplaceholder.typicode.com/posts
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [api, setApi] = useState(
        'https://jsonplaceholder.typicode.com/todos'
    );

    const setTodo = () => {
        setApi('https://jsonplaceholder.typicode.com/todos');
    };
    useEffect(() => {
        getApi();
    }, [api]);
    const getApi = async () => {
        console.log('Goij api');
        const res = await axios.get(api);
        setData(res.data);
        setLoading(false);
    };

    return (
        <div>
            <button onClick={setTodo}>Todos</button>
            <button
                onClick={() => {
                    setApi('https://jsonplaceholder.typicode.com/posts');
                }}
            >
                Posts
            </button>
            <div>Data</div>
            {loading && <p>Loading...</p>}
            <ul>
                {data.map((item) => {
                    return <li>{item.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default Infor;
