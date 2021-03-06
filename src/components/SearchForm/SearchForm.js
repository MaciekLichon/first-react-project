import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [phrase, setPhrase] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(phrase));
  }

  useEffect(() => {
    dispatch(updateSearchString(''))
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput value={phrase} onChange={e => setPhrase(e.target.value)} placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
