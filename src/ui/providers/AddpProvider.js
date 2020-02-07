import React, {useState} from 'react';
import {buildPageDataFromADDP, fetchADDPs} from "../helpers/addp";
import {flattenADDPs} from "../helpers";
import ErrorView from "../containers/ErrorView/ErrorView";
import LoadingView from "../containers/LoadingView/LoadingView";

const AddpProvider = ({children}) => {
    const [ADDP, setADDP] = useState(null);
    const [isLoadingADDPs, setIsLoadingADDPs] = useState(false);
    const [noData, setNoData] = useState(false);
    const [pageData, setPageData] = useState(null);

    const sortADDPs = (ADDPs) => {
        const priorities = {
            // Default 1
            Other: 2,
        };

        const addpArray = Object.entries(ADDPs);

        addpArray.sort(([c1Key], [c2Key]) => {
            const p1 = priorities[c1Key] ? priorities[c1Key] : 1;
            const p2 = priorities[c2Key] ? priorities[c2Key] : 1;

            return p1 - p2;
        });

        return addpArray;
    };

    if (!ADDP && !isLoadingADDPs) {
        setIsLoadingADDPs(true);
        fetchADDPs()
            .then(res => {
                setTimeout(() => {
                    const sorted = sortADDPs(res);
                    const flattened = flattenADDPs(sorted);
                    if (flattened.length === 0) {
                        setNoData(true);
                        return;
                    }
                    setPageData(buildPageDataFromADDP(flattened[0]));
                    console.log('res', res, sorted, flattened);
                    setADDP(sorted);
                    setIsLoadingADDPs(false);
                }, 750);
            });
    }

    if (noData) {
        return <ErrorView message={'No ADDPs found.'} />;
    }

    if (isLoadingADDPs || !ADDP) {
        return <LoadingView />
    }

    return (
        <React.Fragment>
            {children({
                ADDP,
                pageData,
                setPageData,
            })}
        </React.Fragment>
    );
};

export default AddpProvider;
