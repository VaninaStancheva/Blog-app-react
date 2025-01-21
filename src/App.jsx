import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/navbar/NavBar.jsx';
import Homepage from "./pages/homePage/Homepage.jsx";
import SinglePostPage from "./pages/singlePostPage/Single.jsx";
import Posts from "./components/posts/Posts.jsx";

function App() {

  return (
          <Router>
              <NavBar />
              <Routes>
                  <Route exact path="/" element={<Homepage />} />
              </Routes>
              <Routes>
                  <Route path="/post/:postId" element={<SinglePostPage />} />
              </Routes>
          </Router>
  )
}

export default App
