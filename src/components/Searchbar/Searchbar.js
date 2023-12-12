
import { Header, StyledButton, StyledForm, StyledIcon, StyledInput } from './Searchbar.Styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <StyledForm
        onSubmit={evt => {
          evt.preventDefault();

          onSubmit(evt.target.elements.searchQuery.value);
          evt.target.reset();
        }}
      >
      
          <StyledButton type="submit">
            <StyledIcon />
          </StyledButton>
        

        <StyledInput
          name="searchQuery"
          type="text"
          placeholder="Search images and photos"
        />
      </StyledForm>
    </Header>
  );
};

export default SearchBar;
