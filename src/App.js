import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import CharacterGrid from "./component/CharacterGrid";
import Search from "./component/Search";
import Pagination from "./component/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={(items, currentItems)} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
