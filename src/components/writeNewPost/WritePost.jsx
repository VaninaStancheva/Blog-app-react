import './writePost.css'
import {useState} from "react";

export default function WritePost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Angular");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        const formData = {id: crypto.randomUUID(), title, category, content};
        const postsForStorage = [...posts, formData];
        localStorage.setItem('post', JSON.stringify(postsForStorage));
        setPosts((posts) => posts = [...posts, formData]);
        alert('Post saved to localStorage!');
        setTitle("");
        setCategory("Angular");
        setContent("");
    };


    return (
            <form onSubmit={submit} className="writePostForm">
                <div className="container">
                    <label htmlFor="title" className="label" id="titlePost">Title</label>
                    <input className="input" type="text"
                           name="title"
                           id="inputTitle"
                           placeholder="Title"
                           autoFocus={true}
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="fileInput" >
                        <i className="addPhotoIcon fa-solid fa-camera"></i>
                    </label>
                    <input id="fileInput"
                           type="file"
                           style={{display: "none"}}
                           className="input"
                    />
                </div>
                <div className="container">
                    <label htmlFor="category" className="label">Choose category:</label>
                    <select name="category"
                            id="selectCategory"
                            className="input"
                            defaultValue="Angular"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Angular">Angular</option>
                        <option value="Javascript">Javascript</option>
                        <option value="CSS">CSS</option>
                    </select>
                </div>
                <div className="container">
                    <label htmlFor="description" className="label">Your thoughts</label>
                    <textarea className="input"
                              type="text"
                              name="description"
                              id="inputDescription"
                              placeholder="Tell your story..."
                              autoFocus={true}
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
    )

}