import React from 'react';
import styles from './TextRenderer.module.css';

const TextRenderer = ({children}) => {
    const getClassName = () => {
        if (children.length === 1) {
            const child = children[0];
            if (child.props && child.props.value) {
                const value = child.props.value;
                switch (true) {
                    case value.includes('must'):
                        return styles.Must;
                    case value.includes('should'):
                        return styles.Should;
                    case value.includes('may'):
                        return styles.May;
                    default:
                        return '';
                }
            }
        }
    };

    return (
        <span className={getClassName()}>
            {children}
        </span>
    );
};

export default TextRenderer;
