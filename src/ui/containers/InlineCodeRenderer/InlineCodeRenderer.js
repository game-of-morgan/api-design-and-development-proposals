import React from 'react';
import styles from './InlineCodeRenderer.module.css';

const InlineCodeRenderer = ({ value }) => {
    return (
        <code className={styles.Wrapper}>
            {value}
        </code>
    );
};

export default InlineCodeRenderer;
