import React from "react";
import { MyApp } from "./App";

import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'http://localhost:3000/graphql',
});


export const App = () => {
    return (<Provider value={client}><MyApp /></Provider>)
}