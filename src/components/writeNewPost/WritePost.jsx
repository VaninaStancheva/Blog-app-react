import './writePost.css'
import {useState} from "react";

export default function WritePost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        const formData = {id: crypto.randomUUID(), title, date: new Date(Date.now()).toLocaleDateString("en-GB"), category, content};
        const postsForStorage = [...posts, formData];
        localStorage.setItem('post', JSON.stringify(postsForStorage));
        setPosts((posts) => posts = [...posts, formData]);
        alert('Post saved to localStorage!');
        setTitle("");
        setCategory("");
        setContent("");
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        const categoryData = newCategory ;
        const categoryForStorage = [...categories, categoryData];
        localStorage.setItem("category", JSON.stringify(categoryForStorage));
        setCategories((newCategory) => newCategory = [...newCategory, categoryData]);
        setNewCategory("");
    }

    const storedCategories = JSON.parse(localStorage.getItem('category'));



    return (
        <form onSubmit={submit} className="writePostForm">
            <img
                className="writeImg"
                src="../../../public/000.jpg"
                alt=""
            />
            <div className="container-icon">
                <label htmlFor="fileInput">
                    <i className="addPhotoIcon fa-solid fa-camera"></i>
                </label>
                <input id="fileInput"
                       type="file"
                       style={{display: "none"}}
                       className="input"
                />
            </div>
            <div className="container">
                <label htmlFor="title" className="label" id="titlePost">Title:</label>
                <input className="input" type="text"
                       name="title"
                       id="inputTitle"
                       placeholder="Title"
                       autoFocus={true}
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="container">
                <label htmlFor="category" className="label">Choose category:</label>
                <input className="input" type="text"
                       name="new-category"
                       id="inputNewCategory"
                       placeholder="Select or Add Category"
                       value={newCategory}
                       onChange={(e) => setNewCategory(e.target.value)}
                />
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
                    {
                        storedCategories ?
                            storedCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            )) : null
                    }
                </select>
                <button className="addCategoryBtn" onClick={handleAddCategory}>
                    <i className="addCategoryIcon fa-solid fa-plus"></i>
                </button>
            </div>
            <div className="container textarea-container">
                <label htmlFor="description" className="label">Your thoughts:</label>
                <textarea className="input textarea"
                          type="text"
                          name="description"
                          id="inputDescription"
                          placeholder="Tell your story..."
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