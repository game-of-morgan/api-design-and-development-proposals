import React from 'react';
import styles from './ErrorView.module.css';

const ErrorView = ({message}) => {
    return (
        <div className={styles.Container}>
            <div>
                <h1>Something went wrong.</h1>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ErrorView;
