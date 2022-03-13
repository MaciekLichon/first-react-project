import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCardFavorite(props.id));
    console.log('propsFav', props.isFavorite);
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        type ="button"
        className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}
        onClick={handleClick}>
      </button>
    </li>
  );
};

export default Card;
