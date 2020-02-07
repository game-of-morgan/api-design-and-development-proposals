import React from 'react';
import styles from './PageProperties.module.css';

const PageProperties = ({ pageData }) => {
    return (
        <div className={`contrast contrast--is-grey ${styles.Container}`}>
            <h5 className='ADDPNumber'>ADDP-{pageData.number}</h5>
        </div>
    );
};

export default PageProperties;
