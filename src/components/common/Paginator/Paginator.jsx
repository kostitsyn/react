import React, {useState} from 'react';
import c from './Paginator.module.css';


const Paginator = ({totalObjectsCount, pageSize, currentPage, changeUsersOnPage, portionSize=2, ...props}) => {
    let pagesCount = Math.ceil(totalObjectsCount / pageSize);

    let pageNumbers = [];
    for(let i=1; i<=pagesCount; ++i) {
        pageNumbers.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const checkoutPage = (e) => {
        if (e.target.innerText == 'PREVIOUS') {
            props.requestObjects(undefined, leftPortionPageNumber-portionSize);
        }else if (e.target.innerText == 'NEXT') {
            props.requestObjects(undefined, leftPortionPageNumber+portionSize);
        }

    }

    return (
        <div>
            {portionNumber > 1 && <button onClick={(e) => {
            setPortionNumber(portionNumber-1);
            checkoutPage(e);
            }}>PREVIOUS</button>}

            {pageNumbers.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <span key={p} onClick={(e) => changeUsersOnPage(p)}
                className={`${c.element} ${currentPage === p ? c.selectedPage : undefined}`}>{p}</span>})}

            {portionNumber < portionCount && <button onClick={(e) => {
            setPortionNumber(portionNumber+1);
            checkoutPage(e);
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator;