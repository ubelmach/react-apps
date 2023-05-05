import React from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ModalWindow.module.css';

const ModalWindow = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClickHandler={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClickHandler={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ModalWindow;