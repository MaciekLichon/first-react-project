import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import {Navigate} from 'react-router-dom';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCards(state));

  if(favoriteCards.length == 0) return <Navigate to="/" />
    return (
      <>
        <PageTitle>
          Favorite
        </PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite}/>)}
          </ul>
        </article>
      </>
    );
};

export default Favorite;
