import './post.css'

export default function Post() {
    return (
        <div className="post-container">
            <img className="postImage" src="" alt="post-image" />
            <h5 className="postTitle">Post title</h5>
            <span className="postDate">Date</span>
            <p className="postText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )

}