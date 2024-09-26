import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { CardButton, Condition, WeatherComponent, ImageComponent } from "../../components";

interface PageData {
    variables?: Variable[];
    lists: List[];
    components: Component[];
}

interface List {
    id: number;
    components: number[];
}

interface Component {
    id: number;
    type: string;
    options: { [key: string]: any };
    children?: number;
}

interface Variable {
    name: string;
    type: string;
    initialValue: string;
}

const PageRenderer: React.FC<{ pageData: PageData }> = ({ pageData }) => {
    const { lists, components, variables } = pageData;

    const [currentValues, setCurrentValues] = useState<Record<string, unknown>>({});

    useEffect(() => {
        const currentVariableList: Record<string, unknown> = {};
        variables?.forEach((variable) => {
            currentVariableList[variable.name] = variable.initialValue;
        });

        setCurrentValues(currentVariableList);
    }, [variables]);

    const handleButtonClick = (variable: string, value: string) => {
        setCurrentValues((prev) => ({ ...prev, [variable]: value }));
    };

    const renderComponent = (component: Component) => {
        switch (component.type) {
            case "image":
                return (
                    <ImageComponent
                        key={component.id}
                        src={component.options.src}
                        alt={component.options.alt}
                    />
                );

            case "weather":
                return (
                    <WeatherComponent
                        key={component.id}
                        lat={component.options.lat}
                        lon={component.options.lon}
                    />
                );

            case "button": {
                let icon = component.options.variable === "location" ? "location" : "";
                if (component.options.value === "show") {
                    icon = "eye";
                } else if (component.options.value === "hide") {
                    icon = "no-eye";
                }
                console.log(icon);
                return (
                    <CardButton
                        key={component.id}
                        onClick={() =>
                            handleButtonClick(component.options.variable, component.options.value)
                        }
                        text={component.options.text}
                        icon={icon}
                    />
                );
            }

            case "condition": {
                const getCurrentList = lists.find((rootList) => rootList.id === component.children);

                if (!getCurrentList) {
                    console.error(
                        `No matching list found for component.children: ${component.children}`
                    );
                    return null;
                }

                return (
                    <Condition
                        variable={component.options.variable}
                        value={component.options.value}
                        currentValues={currentValues}
                    >
                        {getCurrentList?.components.map((componentId: number, ind: number) => {
                            const childComponent = components.find(
                                (c: Component) => c.id === componentId
                            );
                            if (!childComponent) return null;
                            return <div key={ind}>{renderComponent(childComponent)}</div>;
                        })}
                    </Condition>
                );
            }

            default:
                return null;
        }
    };

    const renderPage = () => {
        const rootList = lists[0];
        return (
            <Row key={0}>
                {rootList.components.map((componentId: number) => {
                    const component = components.find((c: Component) => c.id === componentId);
                    if (!component) return null;
                    if (component.type === "condition") {
                        return <div key={componentId}>{renderComponent(component)}</div>;
                    } else {
                        return (
                            <Col md="6" key={componentId}>
                                {renderComponent(component)}
                            </Col>
                        );
                    }
                })}
            </Row>
        );
    };

    return <Container>{renderPage()}</Container>;
};

export default PageRenderer;
