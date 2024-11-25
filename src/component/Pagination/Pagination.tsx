import React from "react";
import Link from "next/link";
import css from './Pagination.module.css';


type PaginationProps = {
    currentPage: number;
    totalPages: number;
    query?:string;
}
const Pagination = ({ currentPage, totalPages, query}:  PaginationProps) => {

    const prevPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    const pagesToShow = 7;


    const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);

    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const buildPage = (page: number) => {

        const params = new URLSearchParams();

        params.set("page", page.toString());
        if (query) {
            params.set("query", query);
        }
        return `?${params.toString()}`;
    };


    return (
        <div className={css.buttons}>
            <Link href={buildPage(prevPage)}>
                <button disabled={currentPage === 1}> {`<Prev>`} </button>
            </Link>

            <div>
                {pageNumbers.map((number) => (
                    <Link key={number} href={buildPage(number)}>
                        <button
                            style={{
                                fontWeight: currentPage === number ? "bold" : "normal",
                                fontSize: currentPage === number ? '25px' : '15px',
                                color: currentPage === number? 'rgba(218,14,33,0.69)' :'white',
                                margin: "2px",
                            }}
                        >
                            {number}
                        </button>
                    </Link>
                ))}
            </div>

            <Link href={buildPage(nextPage)}>
                <button disabled={currentPage === totalPages}> {`<Next>`} </button>
            </Link>
        </div>
    );
};

export default Pagination;