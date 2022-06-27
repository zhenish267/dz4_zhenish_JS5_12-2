import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getUsersAction} from "../../action/actions";
import {inputReducer} from "../../redux/inputReducer";


function PostsPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const handleUsers = () => {
        const data = {
            name: name,
            email: email,
        }
        dispatch(getUsersAction(data))
    }



    return (
        <div>

            <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={handleUsers}>post user</button>
        </div>
    )
}

export default PostsPage;