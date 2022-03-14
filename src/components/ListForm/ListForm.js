import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
   };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <span>Title: </span>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Description: </span>
      <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>
        Add list
      </Button>
    </form>
	);
};

export default ListForm;
