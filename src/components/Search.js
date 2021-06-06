import React from "react";

function Search({change}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name="search"  onChange={change} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
