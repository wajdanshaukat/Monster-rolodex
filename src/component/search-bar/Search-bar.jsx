import React from "react";
import "./Search-bar.css";

export const SearchBar = ({placeholder, handleChange}) => {
    return (
        <div>
            <input
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};