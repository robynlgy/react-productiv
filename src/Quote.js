import React from "react";

function Quote({ quote = null }) {
	const quoteHTML = quote && (
		<p className="Quote-quote">
			<i>
				{quote.text} -{quote.author}
			</i>
		</p>
	);

	return <div>{quoteHTML}</div>;
}

export default Quote;
