import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import styles from "./index.module.scss";
import { RootState } from "../../redux/store";
import { set } from "../../redux/slices/theme/slice";
type Props = {
	className?:string
};
const Theme = ({ className }:Props) => {
	const theme = useSelector((state:RootState) => state.theme);
	const dispatch = useDispatch();

	React.useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleChange = () =>
		dispatch(set(theme === "dark" ? "light" : "dark"));

	return (
		<div
			className={cn(
				className,
				styles.root,
				theme === "dark" ? styles.dark : styles.light
			)}
			onClick={handleChange}
		/>
	);
};

export default Theme;
