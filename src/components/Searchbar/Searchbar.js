const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" placeholder="Search" />

        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
