import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form">
      <div class="row" id="search-headline">
        <div class="col-6">
          <input
            type="text"
            placeholder="search your city"
            class="form-control"
            id="search-bar-input"
            autocomplete="off"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            class="form-control"
            id="search-button"
          />
        </div>
        <div class="col-3" id="current-location-button">
          <input
            type="submit"
            value="Current"
            class="form-control"
            id="current-location"
          />
        </div>
      </div>
    </form>
  );
}
