import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import config from "../../config";
import { getRequest } from "../../helpers";
import { SvgIcons } from "../../components";

interface WeatherForecast {
    day: string;
    condition: string;
    conditionName: string;
}

interface WeatherData {
    lon: string;
    lat: string;
    condition: string;
    conditionName: string;
    temperature: number;
    unit: string;
    location: string;
    upcomming: WeatherForecast[];
}

interface WeatherComponentProps {
    lat: string;
    lon: string;
}

interface IWeatherResponse {
    data: WeatherData;
}

const WeatherComponent: React.FC<WeatherComponentProps> = ({ lat, lon }) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response: IWeatherResponse = await getRequest(
                    `${config.basePath}integration/weather?lat=${lat}&lon=${lon}`
                );
                setWeather(response?.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch weather data:", error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [lat, lon]);

    if (loading) {
        return <div>Loading weather data...</div>;
    }

    if (!weather) {
        return <div>Failed to load weather data.</div>;
    }

    return (
        <Card className="mb-3 custom-card">
            <CardBody>
                <Row>
                    <Col md={4} xs="6">
                        <CardText>
                            <div>
                                <SvgIcons
                                    condition={weather.condition}
                                    width={60}
                                    height={60}
                                ></SvgIcons>
                                <span className="degree-container">
                                    <span style={{ fontSize: "2em" }}>
                                        {weather?.temperature}°{weather?.unit.toUpperCase()}
                                    </span>
                                    <span className="weather-condition-name">
                                        {weather.conditionName}
                                    </span>
                                </span>
                            </div>
                        </CardText>
                    </Col>
                    <Col md={8} xs="6">
                        <CardTitle tag="span" style={{ float: "right" }}>
                            {weather.location}
                        </CardTitle>

                        <div className="upcoming-weather">
                            {weather?.upcomming?.map((forecast, index) => (
                                <div key={index} style={{ float: "left" }}>
                                    <CardText className="text-center">
                                        <SvgIcons
                                            condition={forecast.condition}
                                            width={40}
                                            height={40}
                                        />
                                        <br />
                                        <p>{forecast.day}</p>
                                    </CardText>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default WeatherComponent;
