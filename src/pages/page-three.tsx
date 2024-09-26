import React from "react";
import { useApi } from "../hooks/useApi";
import PageRenderer from "../components/page-renderer";

const PageThree = () => {
    const { data } = useApi();

    return <div>{data?.data && <PageRenderer pageData={{ ...data.data }}></PageRenderer>}</div>;
};

export default PageThree;
