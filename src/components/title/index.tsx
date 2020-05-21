import * as React from 'react';
import styles from './index.module.scss';

const Title = () => {
  return (
    <>
        <h1 className={styles.mainTitle}><strong>Jest Example</strong></h1>
        <h3 className={styles.subTitle}>React with CSS Modules automated tests</h3>
    </>
  );
};

export default Title;
