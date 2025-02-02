import './post.css'

export default function Post({id, title, date, category, content}) {
    return (
        <div id={id} className="post-container">
            <img className="postImage" src="" alt="post-image"/>
            <h5 className="postTitle">{title}</h5>
            <h6 className="postCategory">{category}</h6>
            <span className="postDate">{date}</span>
            <p className="postText">{content}</p>
        </div>
    )
}