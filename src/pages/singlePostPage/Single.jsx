import './single.css'
import {useParams} from "react-router";

export default function SinglePostPage() {
    const {id} = useParams();
    const savedPosts = JSON.parse(localStorage.getItem('post'));
    const singlePost = savedPosts.find(post => post.id === id);

    return (
        <div className="singlePost">
            <div className="singlePost-container">
                <img src=""
                     className="singlePost-img"
                     alt="single-post-img"
                />
                <h1 className="singlePostTitle">{singlePost.title}
                    <div className="singlePostEdit-container">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-eraser"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>Author: <b>John Doe</b></span>
                </div>
                <p className="singlePostText">
                    {singlePost.content}
                </p>

            </div>
        </div>
    )
}