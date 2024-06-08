import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateBlogInput } from "@anonymous961/medium-common";

export const Publish = () => {
  const [post, setPost] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-8">
        <div className="max-w-screen-lg w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your email
          </label>
          <input
            type="text"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Title"
          />
          <TextEditor
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <button
            type="submit"
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                post,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 "
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
        <div className="px-4 py-2 bg-white rounded-b-lg w-full">
          <label className="sr-only">Publish post</label>
          <textarea
            onChange={onChange}
            rows={8}
            className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 "
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </form>
  );
}
