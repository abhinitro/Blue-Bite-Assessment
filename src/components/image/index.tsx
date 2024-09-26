import React from "react";
import { Card, CardImg } from "reactstrap";

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <Card className="mb-3 custom-card">
            <CardImg
                src={src}
                alt={alt || "Image"}
                className="card-img" // Ensures the image fits properly
            />
        </Card>
    );
};

export default ImageComponent;
