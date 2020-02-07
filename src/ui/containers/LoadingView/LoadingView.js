import React from 'react';
import styles from './LoadingView.module.css';
import RawSpinner from "../../components/RawSpinner/RawSpinner";

const LoadingView = () => {
    return (
        <div className={styles.Container}>
            <RawSpinner />
        </div>
    );
};

export default LoadingView;
