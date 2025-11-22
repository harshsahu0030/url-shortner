import React, { useContext } from "react";
import { deleteUrl, getList } from "../app/api";
import { UrlContext } from "../context/urlContext";

const UrlBox = ({ url }) => {
  const { handleGetList } = useContext(UrlContext);

  const handleCopyOriginalUrl = async () => {
    await navigator.clipboard.writeText(url.originalUrl);
  };

  const handleClick = async () => {
    await getList(url.shortId);
    window.open(url.originalUrl, "_blank");
  };

  const handleDelete = async () => {
    await deleteUrl(url.originalUrl);
    handleGetList();
  };

  return (
    <div className="h-20 w-full bg-white flex justify-between items-center border-2 border-gray-600">
      <div className="w-[70%] h-full flex flex-col justify-center gap-2 p-2">
        <div className="flex gap-5">
          <span className="font-bold">O Url:</span>
          <span
            className="cursor-pointer hover:underline"
            onClick={handleCopyOriginalUrl}
          >
            {url.originalUrl}
          </span>
        </div>
        <div className="flex gap-5">
          <span className="font-bold">S Url:</span>
          <span>{url.shortId}</span>
        </div>
      </div>
      <div className="w-[30%] h-full flex flex-col justify-center items-center gap-2 p-2 bg-green-400">
        <button className="font-bold cursor-pointer" onClick={handleClick}>
          Visit ({url.clicks})
        </button>
        <button
          className="text-red-600 font-bold cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UrlBox;
