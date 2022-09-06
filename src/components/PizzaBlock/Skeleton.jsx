import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader
	className="pizza-block"
		speed={2}
		width={280}
		height={460}
		viewBox="0 0 280 460"
		backgroundColor="#cccccc"
		foregroundColor="#bfbfbf"
		{...props}
	>
		<rect x="0" y="268" rx="15" ry="15" width="280" height="30" />
		<rect x="1" y="320" rx="15" ry="15" width="280" height="88" />
		<rect x="25	" y="10" rx="150" ry="150" width="230" height="230" />
		<rect x="7" y="418" rx="15" ry="15" width="90" height="45" />
		<rect x="144" y="418" rx="15" ry="15" width="130" height="45" />
	</ContentLoader>
);

export default Skeleton;
