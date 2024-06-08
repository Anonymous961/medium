import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBolg } from "../components/FullBlog";

const Blog = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <FullBolg blog={blog} />
    </>
  );
};

export default Blog;
