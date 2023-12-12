

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          
          onSubmit(evt.target.elements.searchQuery.value);
          evt.target.reset();
        }}
      >
        <button type="submit">
          <span>Search</span>
        </button>

        <input type="text" placeholder="Search images and photos" />
      </form>
    </header>
  );
};

export default SearchBar;

