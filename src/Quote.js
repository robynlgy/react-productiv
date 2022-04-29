import React from "react";

function Quote({ quote }) {
	if (quote.text === "") {
		return null;
	}
	return (
		<p>
			{quote.text} -{quote.author}
		</p>
	);
}

export default Quote;
