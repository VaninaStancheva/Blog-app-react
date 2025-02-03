import Post from "../post/Post.jsx";
import {Link} from "react-router-dom";
import './posts.css'

export default function Posts() {
    const getPosts = JSON.parse(localStorage.getItem("post"));
    return (
        <ul className="posts">
            {getPosts.map((post) => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`} style={{textDecoration:"none", color:"inherit"}}>
                        <Post id={post.id} title={post.title} category={post.category} date={post.date} content={post.content}/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}