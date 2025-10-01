import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {

    const postDetail = useLoaderData()
    const navigate = useNavigate()

    const handleNavigation = ()=>{
        navigate('/posts')
    }

    return (
        <div>
            <h4>{postDetail.title}</h4>
            <p>{postDetail.body}</p>
            <button onClick={handleNavigation}>Go Back</button>
        </div>
    );
};

export default PostDetail;