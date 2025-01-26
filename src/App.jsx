import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/navbar/NavBar.jsx';
import Homepage from "./pages/homePage/Homepage.jsx";
import SinglePostPage from "./pages/singlePostPage/Single.jsx";
import Write from "./pages/writePage/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";

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
              <Routes>
                  <Route path="/write" element={<Write />} />
              </Routes>
              <Routes>
                  <Route path="/settings" element={<Settings />} />
              </Routes>
              <Routes>
                  <Route path="/admin" element={<AdminLogin />} />
              </Routes>
          </Router>
  )
}

export default App
