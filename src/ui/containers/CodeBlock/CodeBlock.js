import React, { PureComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeBlock extends PureComponent {
    render() {
        const { language, value } = this.props;
        return (
            <SyntaxHighlighter language={language} style={github}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
