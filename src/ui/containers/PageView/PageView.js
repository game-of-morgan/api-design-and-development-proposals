import React from 'react';
import styles from './PageView.module.css';
import ReactMarkdown from "react-markdown";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import CodeBlock from "../CodeBlock/CodeBlock";
import TextRenderer from "../TextRenderer/TextRenderer";
import InlineCodeRenderer from "../InlineCodeRenderer/InlineCodeRenderer";

const PageView = ({ pageContent, pageData, isLoading }) => {
    return (
        <div className={styles.Container}>
            {isLoading || !pageContent ? <LoadingSpinner /> : (
                <React.Fragment>
                    <h5 className='ADDPNumber'>ADDP-{pageData.number}</h5>
                    <ReactMarkdown
                        source={pageContent}
                        renderers={{ code: CodeBlock, strong: TextRenderer, inlineCode: InlineCodeRenderer }}
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export default PageView;
