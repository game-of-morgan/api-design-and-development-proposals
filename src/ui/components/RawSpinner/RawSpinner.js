import React from 'react';
import ReactLoading from "react-loading";
import styles from './RawSpinner.module.css';

const RawSpinner = () => {
    return (
        <div className={styles.Container}>
            <ReactLoading type={'bars'} color={'#465362'} height={'35px'} width={'35px'} />
            <p>
                One quick moment
            </p>
        </div>
    );
};

export default RawSpinner;
