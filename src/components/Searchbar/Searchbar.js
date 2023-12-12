const SearchBar = ({onSubmit}) => {
    return (
        <header>
        <form onSubmit={onSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
      
          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
}

export default SearchBar;


