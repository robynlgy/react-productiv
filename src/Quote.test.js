import React from "react";
import { render } from "@testing-library/react";
import Quote from "./Quote";

describe("Quote container", function () {
	const testQuote = {
		text: "Test text",
		author: "Testy Testman",
	};

	it("renders without crashing", function () {
		render(<Quote quote={testQuote} />);
	});

	it("renders expected text", function () {
		const result = render(<Quote quote={testQuote} />);
		expect(result.queryByText("Test text -Testy Testman")).toBeInTheDocument();
	});

	it("does not render anything when no quote is passed", function () {
		const { container } = render(<Quote />);
		expect(container.querySelector(".Quote-quote")).not.toBeInTheDocument();
	});

	it("matches snapshot", function () {
		const { container } = render(<Quote quote={testQuote} />);
		expect(container).toMatchSnapshot();
	});
});
