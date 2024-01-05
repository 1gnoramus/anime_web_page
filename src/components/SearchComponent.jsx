export function SearchComponent(props) {
  return (
    <div className="search_box">
      <input
        value={props.searchAnime}
        onChange={(e) => {
          props.setSearchAnime(e.target.value);
        }} 
        type="text"
        placeholder="Search Anime"
      />
      <button onClick={props.handleSearch}>Search</button>
    </div>
  );
}
