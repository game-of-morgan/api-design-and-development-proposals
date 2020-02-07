import React from 'react';
import styles from './PageLayout.module.css';

const PageLayout = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
};

export default PageLayout;
