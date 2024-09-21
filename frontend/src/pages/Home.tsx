import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center font-mono">
      <div className=" text-xl bg-slate-700 px-10 w-full pt-200 max-w-screen-xl pt-10 pb-6">
        <div className="">
          <h1 className="text-white text-3xl py">Medium </h1>
        </div>
      </div>
      <div className="grid grid-cols-4  text-xl px-10 w-full pt-200 max-w-screen-xl overflow-hidden pt-10">
        <div className="col-span-2 max-h-full ">
          <p className="inline-block w-full animate-typing overflow-hidden">
            Hi! Welcome to Medium – a place where your words matter. Write
            articles, share your knowledge, and connect with millions of
            readers.
          </p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="rounded-md bg-green-600 hover:bg-green-500 p-2 mt-4"
            onClick={() => navigate("/signup")}
          >
            <span className="text-white">Get Started!</span>
          </button>
        </div>
        <div className=" col-span-2 overflow-hidden">
          <img
            className=""
            src="https://i.postimg.cc/3RpLBXjj/boy-Illustration.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" text-xl px-10 w-full max-w-screen-xl pt-10 pb-6">
        <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover border-2">
          <h1 className="text-5xl text-white">Share your knowledge!</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 text-xl px-10 text-white bg-slate-700 w-full max-w-screen-xl  pt-10 pb-48">
        <div className=" text-2xl">Medium</div>
        <div>
          <h2 className="text-xl">Contact info</h2>
        </div>
        <div>
          <a
            href="https://github.com/Anonymous961"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgICA8cGF0aCBkPSJNMTUsM0M4LjM3MywzLDMsOC4zNzMsMywxNWMwLDUuNjIzLDMuODcyLDEwLjMyOCw5LjA5MiwxMS42M0MxMi4wMzYsMjYuNDY4LDEyLDI2LjI4LDEyLDI2LjA0N3YtMi4wNTEgYy0wLjQ4NywwLTEuMzAzLDAtMS41MDgsMGMtMC44MjEsMC0xLjU1MS0wLjM1My0xLjkwNS0xLjAwOWMtMC4zOTMtMC43MjktMC40NjEtMS44NDQtMS40MzUtMi41MjYgYy0wLjI4OS0wLjIyNy0wLjA2OS0wLjQ4NiwwLjI2NC0wLjQ1MWMwLjYxNSwwLjE3NCwxLjEyNSwwLjU5NiwxLjYwNSwxLjIyMmMwLjQ3OCwwLjYyNywwLjcwMywwLjc2OSwxLjU5NiwwLjc2OSBjMC40MzMsMCwxLjA4MS0wLjAyNSwxLjY5MS0wLjEyMWMwLjMyOC0wLjgzMywwLjg5NS0xLjYsMS41ODgtMS45NjJjLTMuOTk2LTAuNDExLTUuOTAzLTIuMzk5LTUuOTAzLTUuMDk4IGMwLTEuMTYyLDAuNDk1LTIuMjg2LDEuMzM2LTMuMjMzQzkuMDUzLDEwLjY0Nyw4LjcwNiw4LjczLDkuNDM1LDhjMS43OTgsMCwyLjg4NSwxLjE2NiwzLjE0NiwxLjQ4MUMxMy40NzcsOS4xNzQsMTQuNDYxLDksMTUuNDk1LDkgYzEuMDM2LDAsMi4wMjQsMC4xNzQsMi45MjIsMC40ODNDMTguNjc1LDkuMTcsMTkuNzYzLDgsMjEuNTY1LDhjMC43MzIsMC43MzEsMC4zODEsMi42NTYsMC4xMDIsMy41OTQgYzAuODM2LDAuOTQ1LDEuMzI4LDIuMDY2LDEuMzI4LDMuMjI2YzAsMi42OTctMS45MDQsNC42ODQtNS44OTQsNS4wOTdDMTguMTk5LDIwLjQ5LDE5LDIyLjEsMTksMjMuMzEzdjIuNzM0IGMwLDAuMTA0LTAuMDIzLDAuMTc5LTAuMDM1LDAuMjY4QzIzLjY0MSwyNC42NzYsMjcsMjAuMjM2LDI3LDE1QzI3LDguMzczLDIxLjYyNywzLDE1LDN6Ij48L3BhdGg+Cjwvc3ZnPg=="
            />
          </a>
        </div>
      </div>
    </div>
  );
}
