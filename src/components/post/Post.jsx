import './post.css'

export default function Post({title, content}) {
    return (
        <div className="post-container">
            <img className="postImage" src="" alt="post-image"/>
            <h5 className="postTitle">{title}</h5>
            <span className="postDate">Date</span>
            <p className="postText">{content}</p>
        </div>
    )
}