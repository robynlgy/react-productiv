import React from "react";

function Quote({ quote }) {
	if (quote.text === "") {
		return null;
	}
	return (
		<p>
			<i>
				{quote.text} -{quote.author}
			</i>
		</p>
	);
}

export default Quote;
