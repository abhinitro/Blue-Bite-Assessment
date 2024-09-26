import React from "react";

interface ConditionProps {
    variable: string;
    value: string;
    currentValues: Record<string, unknown>;
    children: React.ReactNode;
}

const Condition: React.FC<ConditionProps> = ({ variable, value, currentValues, children }) => {
    return currentValues[variable] === value ? <>{children}</> : null;
};

export default Condition;
