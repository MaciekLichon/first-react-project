import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorites = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const removeSelectedCard = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          type ="button"
          className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}
          onClick={toggleFavorites}>
        </button>
        <button
          type ="button"
          className="fa fa-trash"
          onClick={removeSelectedCard}>
        </button>
      </div>
    </li>
  );
};

export default Card;
