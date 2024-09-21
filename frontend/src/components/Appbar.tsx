import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { UserAtom } from "../store/userAtom";
import { useSetRecoilState } from "recoil";

const Appbar = () => {
  const setUser = useSetRecoilState(UserAtom);
  const navigate = useNavigate();
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/"}>
        <div className="flex flex-col justify-center cursor-pointer font-serif text-4xl font-semibold">
          Medium
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New
          </button>
        </Link>

        <Avatar name={"Anil"} size={"big"} />
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            localStorage.removeItem("token");
            setUser(null);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Appbar;
