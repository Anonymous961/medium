import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { Home } from "./pages/Home";
import { useRecoilValue } from "recoil";
import { UserAtom } from "./store/userAtom";

function App() {
  const user = useRecoilValue(UserAtom);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={user ? <Navigate to={"/blogs"} /> : <Signup />}
          />
          <Route
            path="/signin"
            element={user ? <Navigate to="/blogs" /> : <Signin />}
          />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
