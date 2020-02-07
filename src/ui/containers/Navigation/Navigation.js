import React, { useContext } from 'react';
import FileContext from "../../context/FileContext";
import styles from './Navigation.module.css';
import {buildPageDataFromADDP} from "../../helpers/addp";

const Navigation = ({ setPageData }) => {
    const { ADDP } = useContext(FileContext);

    const onSetPageData = (event, ADDP) => {
        event.preventDefault();
        setPageData(
            buildPageDataFromADDP(ADDP)
        );
    };

    return (
        <div className={`contrast ${styles.Container}`}>
            {ADDP.map(([category, pages]) => (
                <React.Fragment key={`nav-category-${category}`}>
                    <h3>{category}</h3>
                    <ul>
                        {Object.entries(pages).map((ADDP) => {
                            const pageData = buildPageDataFromADDP(ADDP);
                            return (
                                <li key={`nav-item-addp-${pageData.number}`}>
                                    <a href={pageData.location} onClick={(e) => onSetPageData(e, ADDP)}>ADDP {pageData.number}</a>
                                </li>
                            );
                        })}
                    </ul>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Navigation;
