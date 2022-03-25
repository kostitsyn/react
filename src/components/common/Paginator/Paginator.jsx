import React from 'react';
import c from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, changeUsersOnPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pageNumbers = [];
    for(let i=1; i<=pagesCount; ++i) {
        pageNumbers.push(i);
    }
    return (
        <div>
            {pageNumbers.map(p => {
                return <span key={p} onClick={(e) => changeUsersOnPage(p)} className={currentPage === p ? c.selectedPage : undefined}>{p}</span>})}
        </div>
    )
}

export default Paginator;