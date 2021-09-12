import React from "react";
import { App as MyApp } from "./App";

import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'https://api.spacex.land/graphql/',
});


export const App = () => {
    return (<Provider value={client}><MyApp /></Provider>)
}