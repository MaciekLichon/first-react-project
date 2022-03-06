import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { columnId: props.columnId, title: title } });
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>
        Add card
      </Button>
    </form>
	);
};

export default CardForm;
