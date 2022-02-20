import styles from './Column.module.scss';

const Column = param => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + param.icon}></span>
        {param.title}
      </h2>
    </article>
  )
}

export default Column;
