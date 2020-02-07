import React, {useState} from 'react';
import Navigation from "../Navigation/Navigation";
import FileContext from '../../context/FileContext';
import './App.scss';
import PageLayout from "../PageLayout/PageLayout";
import PageView from "../PageView/PageView";
import PageProperties from "../PageProperties/PageProperties";
import PageContentProvider from "../../providers/PageContentProvider";
import AddpProvider from "../../providers/AddpProvider";

function App() {
    const [Overview, setOverview] = useState(true);

    return (
        <div className="App">
            <AddpProvider>
                {({ADDP, pageData, setPageData}) =>
                    <FileContext.Provider value={{ ADDP, Overview: null }}>
                        <PageContentProvider pageData={pageData}>
                            {({pageContent, isLoadingPageContent}) => (
                                <PageLayout>
                                    <Navigation setPageData={setPageData} />
                                    <PageView
                                        pageData={pageData}
                                        pageContent={pageContent}
                                        isLoading={isLoadingPageContent}
                                    />
                                    <PageProperties
                                        pageData={pageData}
                                    />
                                </PageLayout>
                            )}
                        </PageContentProvider>
                    </FileContext.Provider>
                }
            </AddpProvider>
        </div>
    );
}

export default App;
