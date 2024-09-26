import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageComponent } from "./../../components";
import "@testing-library/jest-dom/extend-expect";

describe("ImageComponent", () => {
    it("renders the image with the correct src and alt", () => {
        render(<ImageComponent src="image.jpg" alt="Test Image" />);
        const image = screen.getByAltText("Test Image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "image.jpg");
        expect(image).toHaveAttribute("alt", "Test Image");
    });

    it("uses default alt text if alt prop is not provided", () => {
        render(<ImageComponent src="image.jpg" />);

        const image = screen.getByAltText("Image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "image.jpg");
        expect(image).toHaveAttribute("alt", "Image");
    });
});
