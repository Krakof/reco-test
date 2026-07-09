import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {PATHS} from "./paths.ts";

export const router = createBrowserRouter([
    {
        path: PATHS.MAIN,
        Component: App,
        children: [
            {
                index: true,
                Component: () => <div>discovery</div>,
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