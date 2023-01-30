import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { InMemoryCache, ApolloClient } from "@apollo/client";
import { ApolloProvider, HttpLink } from "@apollo/client";
import * as serviceWorker from "./lib/serviceWorker";

const url =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5001/openingscraper/us-central1/api"
    : "https://us-central1-openingscraper.cloudfunctions.net/api";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: url,
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
