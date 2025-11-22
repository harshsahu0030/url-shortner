import { createContext, useEffect, useState } from "react";
import { getLists } from "../app/api";

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urlLists, setUrlLists] = useState([]);

  const handleGetList = async () => {
    const lists = await getLists();
    setUrlLists(lists.urls);
  };

  return (
    <UrlContext.Provider value={{ urlLists, handleGetList }}>
      {children} {/* Children received here */}
    </UrlContext.Provider>
  );
};
