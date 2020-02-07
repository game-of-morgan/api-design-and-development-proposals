import React from 'react';
import styles from './LoadingSpinner.module.css';
import RawSpinner from "../RawSpinner/RawSpinner";

const LoadingSpinner = () => {
    return (
        <div className={styles.Container}>
            <RawSpinner />
        </div>
    );
};

export default LoadingSpinner;
