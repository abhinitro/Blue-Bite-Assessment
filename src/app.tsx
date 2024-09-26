import React, { useEffect } from "react";
import { useParams } from "react-router";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";
import PageThree from "./pages/page-three";
import { Container } from "reactstrap";
import { useApi } from "./hooks/useApi";
import config from "./config";
import { getRequest } from "./helpers";

const pageMap: { [key: string]: JSX.Element } = {
    "page-one": <PageOne />,
    "page-two": <PageTwo />,
    "page-three": <PageThree />,
};

const getPage = (id: string): JSX.Element => {
    return pageMap[id] || <div>Not Found {id}</div>;
};

const App = () => {
    const { id } = useParams<{ id: string }>();
    const { setData } = useApi(); // Use the custom hook to access the context

    useEffect(() => {
        const basePath = config.basePath;
        getRequest(`${basePath}page/${id}`)
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id, setData]);
    return <Container className="page-wrappper">{getPage(id)}</Container>;
};

export default App;
