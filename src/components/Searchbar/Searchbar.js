import { Formik } from 'formik';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
  searchValue: Yup.string()
    .trim()
    .min(2, 'Minimum length - 2 characters')
    .max(20, 'Maximum length - 20 characters'),
});

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <Formik
        initialValues={{ searchValue: '' }}
        onSubmit={(values, actions) => {
          const valueSearch = values.searchValue;
          onSubmit(valueSearch);
          actions.resetForm();
        }}
        
        validationSchema={searchSchema}
      >
        <div>
          <input
            type="text"
            name="searchValue"
            id="searchValue"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button type="submit">Search</button>
        </div>
      </Formik>
    </header>
  );
};

export default SearchBar;
