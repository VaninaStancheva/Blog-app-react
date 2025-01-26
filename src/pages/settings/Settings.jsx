import './settings.css'

export default function Settings() {
    return (
        <div className="settings-container">
            <div className="settingsTitle">
                <h2>Update your account</h2>
                <h4>Delete account</h4>
            </div>
            <form className="settingsForm">
                <div className="setProfilePicture">
                    <img className='profileImg'
                         src="../../../public/envato-labs-ai-93cd669d-a337-49b7-bae2-16597d5cc558.jpg"
                         alt="profile-img"/>
                    <label htmlFor="fileInput">
                        <i className="changePhotoIcon fa-solid fa-camera"></i>
                    </label>
                    <input type="file" id="profilePictureEdit" className='changeProfileImg' style={{display: "none"}}/>
                </div>
                <label className="update-label">Name</label>
                <input id="nameInput" className="update-input" type="text" placeholder="Name"/>
                <label className="update-label">Email</label>
                <input id="emailInput" className="update-input" type="email" placeholder="Email"/>
                <label className="update-label">Password</label>
                <input id="passwordInput" className="update-input" type="password" placeholder="Password"/>
                <button className="submitBtn" type="submit">Update</button>
            </form>

        </div>
    )
}