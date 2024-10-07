import { useAppContext } from "./context";

const SearchForm = () => {
  const { changeSearchValue } = useAppContext();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.search.value;

    if (searchQuery === "") return;

    changeSearchValue(searchQuery);
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmitForm}>
        <input
          type='text'
          name='search'
          className='form-input search-input'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
