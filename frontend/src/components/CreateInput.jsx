import { useContext, useState } from "react";
import { addUrl } from "../app/api";
import ButtonTemp from "./ButtonTemp";
import { UrlContext } from "../context/urlContext";

const CreateInput = () => {
  const { handleGetList } = useContext(UrlContext);
  const [text, setText] = useState("");

  const handleadd = async () => {
    await addUrl(text);
    handleGetList();
  };

  return (
    <section
      aria-label="Search Input Box"
      className="w-full flex bg-white border-2 border-gray-600"
    >
      <input
        type="text"
        placeholder="Enter Url"
        className="text-base p-2 w-full outline-none bg-transparent border-2 border-transparent focus:border-gray-600"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonTemp label="Create" onClick={handleadd} />
    </section>
  );
};

export default CreateInput;
