import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import QuoteContainer from "./QuoteContainer";
import * as utils from "./utils";

utils.getRandomQuote = jest.fn(); //mock random quote

describe("Quote container", function () {
	it("renders without crashing", function () {
		render(<QuoteContainer />);
	});

	it("contains expected default button text", function () {
		const result = render(<QuoteContainer />);
		expect(
			result.queryByText("Click here for an inspirational quøte!")
		).toBeInTheDocument();
	});

	it("does not render a quote at first render", function () {
		const { container } = render(<QuoteContainer />);
		expect(container.querySelector(".Quote-quote")).not.toBeInTheDocument();
	});

	it("renders quote and changes button text on first button click", async function () {
		await utils.getRandomQuote.mockReturnValueOnce({
			text: "Test Quote",
			author: "Test Author",
		});

		const result = render(<QuoteContainer />);
		const container = result.container;

		const quoteBtn = container.querySelector("button");
		// act(() => {
		//     fireEvent.click(quoteBtn);
		// });
		fireEvent.click(quoteBtn);

		// console.log(result);

		// test button text changed
		// expect(result.queryByText("Test Quote -Text Author")).toBeInTheDocument();
		// expect(result.queryByText("Nu quote!")).toBeInTheDocument();
		expect(container.querySelector("button")).toContain("Nu quote!");
		// expect(
		// 	result.queryByText("Click here for an inspirational quøte!")
		// ).toBeInTheDocument();
	});

	it("matches snapshot", function () {
		const { container } = render(<QuoteContainer />);
		expect(container).toMatchSnapshot();
	});
});
