import Appbar from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="font-mono">
          {blogs.map((blog, index) => (
            <BlogCard
              id={blog.id}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd Feb 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
