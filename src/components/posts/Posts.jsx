import Post from "../post/Post.jsx";
import './posts.css'

export default function Posts() {
    const getPosts = JSON.parse(localStorage.getItem("post"));
    console.log(Array.isArray(getPosts));
    return (
        <ul className="posts">
            {getPosts.map((post) => (
                <li key={post.id}><Post title={post.title} content={post.content} /></li>
            ))}
        </ul>
    )
}