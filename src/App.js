import "./App.css";
import { useState } from "react";
import MyReads from "./pages/MyReads";
import SearchBook from "./pages/SearchBook";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook />
      ) : (
        <MyReads />
      )}
    </div>
  );
}

export default App;
