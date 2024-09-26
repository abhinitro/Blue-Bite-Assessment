import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import SvgIcons from "../svg-icon";

interface CardButtonProps {
    key?: number;
    text: string;
    onClick: () => void; // Function to be called on click
    style?: React.CSSProperties; // Optional additional styles
    icon?: string;
}

const CardButton: React.FC<CardButtonProps> = ({ text, onClick, style, icon }) => {
    return (
        <Card
            className="mb-3 cursor-pointer custom-card"
            onClick={onClick}
            color={"primary"}
            style={{ ...style, cursor: "pointer", userSelect: "none" }} // Pointer cursor for button-like interaction
        >
            <CardBody>
                <CardText className="card-btn-txt">{text}</CardText>
                {icon && (
                    <div className="icon-container">
                        <SvgIcons condition={icon} />
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

export default CardButton;
