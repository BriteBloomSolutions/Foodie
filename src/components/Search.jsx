import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="searchbox">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <RiSearchLine />
      </div>
    </form>
  );
};

export default Search;
