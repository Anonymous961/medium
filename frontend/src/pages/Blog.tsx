import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

const Blog = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div>
        <FullBlogSkeleton />
      </div>
    );
  }
  return (
    <>
      <FullBlog blog={blog} />
    </>
  );
};

export default Blog;
