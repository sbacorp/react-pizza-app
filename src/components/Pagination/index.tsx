import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";


type Props = {
	onChangePage: Function
};

function Pagination({ onChangePage }: Props) {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			
		/>
	);
}

export default Pagination;