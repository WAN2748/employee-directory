import React from "react";
import "../Search/style.css";

function Search({ searchChange }){
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e=> searchChange(e)}
                />
            </form>
        </div>
    );
}

export default Search;