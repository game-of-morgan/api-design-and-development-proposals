import React, {useEffect, useState} from 'react';

const PageContentProvider = ({pageData, children}) => {
    const [pageContent, setPageContent] = useState(null);
    const [isLoadingPageContent, setIsLoadingPageContent] = useState(false);

    useEffect(() => {
        if (pageData && !isLoadingPageContent) {
            const {location} = pageData;
            setIsLoadingPageContent(true);
            fetch(process.env.PUBLIC_URL + location)
                .then(response => response.text())
                .then(source => {
                    setPageContent(source);
                    setIsLoadingPageContent(false);
                })
                .catch(() => setIsLoadingPageContent(false));
        }
    }, [pageData]);

    if (!pageData) {
        return null;
    }

    return (
        <React.Fragment>
            {children({
                pageContent,
                isLoadingPageContent,
            })}
        </React.Fragment>
    );
};

export default PageContentProvider;
