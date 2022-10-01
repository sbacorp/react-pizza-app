import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filter/slice";
import { SortType } from "../redux/slices/filter/types";

type PopupClick = MouseEvent & {
	path: Node[];
};
export const sortsList: SortType[] = [
	{ name: "популярности", sortProp: "rating" },
	{ name: "цене", sortProp: "price" },
	{ name: "алфавиту", sortProp: "title" },
];
function Sort() {
	const dispath = useDispatch();
	const sort = useSelector((state: any) => state.filter.sort);
	const sortRef = React.useRef<HTMLDivElement>(null);

	const onChangeSort = (obj: SortType) => {
		dispath(setSort(obj));
	};

	const [popupActive, setPopupActive] = useState(false);

	React.useEffect(() => {
		const handleBodyClick = (event: MouseEvent) => {
			const _event = event as PopupClick;
			if (sortRef.current && !_event.path.includes(sortRef.current)) {
				setPopupActive(false);
			}
		};

		document.body.addEventListener("click", handleBodyClick);

		return () => {
			document.body.removeEventListener("click", handleBodyClick);
		};
	}, []);

	return (
		<div ref={sortRef} className="sort">
			<div
				onClick={() => {
					setPopupActive(true);
				}}
				className="sort__label"
			>
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Сортировка по:</b>
				<span>{sort.name}</span>
			</div>
			{popupActive && (
				<div className="sort__popup">
					<ul>
						{sortsList.map((obj, i) => (
							<li
								key={i}
								onClick={() => {
									onChangeSort(obj);
									setPopupActive(false);
								}}
								className={
									sort.sortProp === obj.sortProp
										? "active"
										: ""
								}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Sort;
