import React, { useState } from "react";


const GoogleSearchForm = () => {
  // State to hold the search query
  const [query, setQuery] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (query.trim()) {
      // Construct the Google search URL
      const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

      // Open the Google search results page in a new tab
      window.open(searchURL, "_blank");

      // Clear the input field
      setQuery("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Made with &#9825; by Pankaj " 
          required
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </>
  );
};

export default GoogleSearchForm;
