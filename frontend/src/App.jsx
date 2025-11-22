import { useContext, useEffect, useState } from "react";
import ButtonTemp from "./components/ButtonTemp";
import UrlBox from "./components/UrlBox";
import { UrlContext } from "./context/urlContext";
import CreateInput from "./components/CreateInput";

const App = () => {
  const [createUrl, setCreateUrl] = useState(false);
  const { urlLists, handleGetList } = useContext(UrlContext);

  console.log(urlLists);

  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <>
      <header className="h-[10vh] w-full bg-amber-400 flex items-center justify-between px-4">
        <h5 className="text-2xl font-bold">SHORT-URL</h5>
      </header>

      <hr />

      <main className="min-h-[80vh] w-full lg:w-[50%] bg-amber-400 mx-auto p-5 md:p-10">
        <CreateInput />

        <section
          aria-label="Url-Box-List"
          className="h-full w-full flex flex-col gap-2 py-5"
        >
          {urlLists ? (
            urlLists.length > 0 ? (
              urlLists.map((url) => <UrlBox key={url._id} url={url} />)
            ) : (
              <p className="text-center font-medium">No URLs Found</p>
            )
          ) : (
            <p className="text-center font-medium">Loading...</p>
          )}
        </section>
      </main>

      <hr />

      <footer className="h-[10vh] w-full bg-amber-400 flex items-center justify-center px-4">
        <p className="text-base font-medium">Created By Harsh</p>
      </footer>
    </>
  );
};

export default App;
