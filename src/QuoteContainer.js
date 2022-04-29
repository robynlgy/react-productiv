import { React, useState } from "react";
import Quote from "./Quote";
import { getRandomQuote } from "./utils";

/** Quote generator logic
 *
 * state: quote
 *
 * props:
 */

function QuoteContainer() {
	const [quote, setQuote] = useState(null);
	const [btnText, setBtnText] = useState(
		"Click here for an inspirational quøte!"
	);

	async function handleClick() {
		const newQuote = await getRandomQuote();

		setQuote(newQuote);
		console.log("***click**");
		setBtnText("Nu quote!");
	}

	return (
		<div className="container text-end pb-3">
			<Quote quote={quote} />
			<button
				onClick={handleClick}
				style={{ color: "white", backgroundColor: "brown" }}
			>
				{btnText}
			</button>
		</div>
	);
}

export default QuoteContainer;
