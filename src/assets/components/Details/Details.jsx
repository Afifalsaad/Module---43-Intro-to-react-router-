import React from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const data = useLoaderData()

    const {usersId} = useParams()
    console.log(usersId)

    return (
        <div>
            <h3>{data.name}</h3>
            <h4>ID: {usersId}</h4>
        </div>
    );
};

export default Details;