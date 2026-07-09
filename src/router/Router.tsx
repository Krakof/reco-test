import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {PATHS} from "./paths.ts";
import {Discovery} from "../pages/discovery/Discovery.tsx";

export const router = createBrowserRouter([
    {
        path: PATHS.MAIN,
        Component: App,
        children: [
            {
                index: true,
                Component: Discovery,
            },
            {
                path: PATHS.INVENTORY,
                Component: () => <div>inventory</div>,
            },
            {
                path: PATHS.SETTINGS,
                // Component:
            },
        ],
    },
])