import styles from './Button.module.scss';

const Button = param => {
    return (
      <button className={styles.button}>
        {param.children}
      </button>
    );
};

export default Button;
