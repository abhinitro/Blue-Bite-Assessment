import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardButton from "./index"; // Adjust the path as necessary

describe("CardButton component", () => {
    it("calls the onClick handler when clicked", () => {
        const handleClick = jest.fn(); // Mock function
        render(<CardButton text="Clickable Button" onClick={handleClick} />);
        const buttonElement = screen.getByText("Clickable Button");
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
