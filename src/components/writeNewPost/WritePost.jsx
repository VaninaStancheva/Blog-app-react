import './writePost.css'
import {useState, useEffect} from 'react'

export default function WritePost() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//
//     useEffect(() => {
//             let postData = {
//                 title: title,
//                 description: description,
//             }
//             localStorage.setItem('postData', JSON.stringify(postData));
//             alert('Data recorded successfully.');
//             window.location.reload();
//         }, [title, description]);


    return (
            <form className="writePostForm">
                <div className="container">
                    <label htmlFor="title" className="label" id="titlePost">Title</label>
                    <input className="input" type="text"
                           name="title"
                           id="inputTitle"
                           placeholder="Title"
                           autoFocus={true}
                        //onChange={(e) => setTitle(e.target.value)}
                        //value={title}
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
                    <select name="category" id="selectCategory" className="input" defaultValue="Angular">
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
                        //onChange={(e) => setDescription(e.target.value)}
                        //value={description}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
    )

}