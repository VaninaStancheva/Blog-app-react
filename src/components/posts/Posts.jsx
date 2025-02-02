import Post from "../post/Post.jsx";
import {Link} from "react-router-dom";
import './posts.css'

export default function Posts() {
    const getPosts = JSON.parse(localStorage.getItem("post"));
    return (
        <ul className="posts">
            {getPosts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li><Post id={post.id} title={post.title} category={post.category} date={post.date} content={post.content}/></li>
                </Link>
            ))}
        </ul>
    )
}