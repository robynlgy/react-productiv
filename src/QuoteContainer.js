import { React, useState } from "react";
import Quote from "./Quote";
import axios from "axios";

const initialQuote = {
	text: "",
	author: "",
};

/** Quote generator logic
 *
 * state: quote
 *
 * props:
 */

function QuoteContainer() {
	const [quote, setQuote] = useState(initialQuote);
	const [btnText, setBtnText] = useState(
		"Click here for an inspirational quote!"
	);
	//logic to make ajax call and get quote object
	//define function to get new quote

	async function handleClick() {
		const resp = await axios.get(
			"https://inspo-quotes-api.herokuapp.com/quotes/random"
		);

		const newQuote = resp.data.quote;

		setQuote(newQuote);
		setBtnText("Nu quote!");
	}

	return (
		<div className="container">
			<Quote quote={quote} />
			<button onClick={handleClick}>{btnText}</button>
		</div>
	);
}

export default QuoteContainer;
