import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData()

    return (
        <div>
            <h3>This is from user</h3>
            {
                users.map(user=><User user={user}></User>)
            }
        </div>
    );
};

export default Users