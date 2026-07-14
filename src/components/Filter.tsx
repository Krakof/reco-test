import {type DiscoveryContextType, FILTER_NAMES} from "../pages/discovery/DiscoveryProvider.tsx";
import type {FC} from "react";

type Props = {
    filters: DiscoveryContextType['filters'];
    onFiltersUpdate: DiscoveryContextType['handleUpdateFilter'];
}

export const Filter: FC<Props> = ({ filters, onFiltersUpdate }) => {


    return <div>
        <input type="text" value={filters[FILTER_NAMES.APP_NAME]} onChange={(e) => onFiltersUpdate(FILTER_NAMES.APP_NAME, e.target.value)} placeholder="App name" />
        <input type="text" value={filters[FILTER_NAMES.APP_CATEGORY]} onChange={(e) => onFiltersUpdate(FILTER_NAMES.APP_CATEGORY, e.target.value)} placeholder="App category" />
    </div>
}