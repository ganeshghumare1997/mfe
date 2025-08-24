import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start up the application
const mount = (el, { onSignIn, onNavigate, defaultHistory, pathname }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [pathname]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

// If we are in development mode and in isolation, call the mount function immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_auth-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// When we are running through the container, we should export the mount function
export { mount };