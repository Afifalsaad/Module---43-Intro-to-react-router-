import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {

    const user = useLoaderData()
    console.log(user)

    return (
        <div>
            <h3>This is from user</h3>
        </div>
    );
};

export default User