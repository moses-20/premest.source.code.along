import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogList from "./pages/Blog/blogs";
import BlogDetail from "./pages/Blog/detail";
import { ThemeContextProvider } from "./context/theme.context";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogList />} />
          <Route path=":blog" element={<BlogDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
