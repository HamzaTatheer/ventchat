/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import App from "../views/App.js";
import React from "react";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
