import axios from "axios";

async function getRandomQuote() {
	const resp = await axios.get(
		"https://inspo-quotes-api.herokuapp.com/quotes/random"
	);

	return resp.data.quote;
}

export { getRandomQuote };
