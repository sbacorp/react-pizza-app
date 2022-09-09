import React from 'react'
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";



function Pagination({ onChangePage,items }) {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={1}
			pageCount={2}
			// forcePage={currentPage - 1}
		/>
	);
}

export default Pagination