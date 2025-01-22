import './writePost.css'

export default function WritePost() {
    return (
        <div className="writePost">
            <form className="writePostForm">
                <div className="title-container">
                    <label htmlFor="title" className="labelTitle">Title</label>
                    <input className="inputTitle" type="text" name="title" id="inputTitle" placeholder="Enter Title"/>
                </div>
                <div className="category-container">
                    <label htmlFor="category" className="labelCategory">Choose category:</label>
                    <slect name="category" id="selectCategory" defaultValue="Angular">
                        <option value="Angular">Angular</option>
                        <option value="Javascript">Javascript</option>
                        <option value="CSS">CSS</option>
                    </slect>
                </div>
                <div className="description-container">
                    <label htmlFor="description" className="labelDescription">Your thoughts</label>
                    <input className="inputDescription" type="text area" name="description" id="inputDescription"/>
                </div>
            </form>
        </div>
    )

}