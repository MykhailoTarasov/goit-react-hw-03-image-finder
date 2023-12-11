const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form
        onSubmit={(values, actions) => {
          const valueSearch = values.searchValue;
          onSubmit(valueSearch);
          actions.resetForm();
        }}
      >
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
