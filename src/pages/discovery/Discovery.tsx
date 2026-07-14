import {useGetAppsQuery} from "../../api/get-apps.ts";
import {Pagination} from "./components/Pagination.tsx";
import {useState} from "react";
import {Filter} from "../../components/Filter.tsx";
import {Table} from "./components/Table.tsx";
import {DiscoveryProvider, FILTER_NAMES, useDiscoveryContext} from "./DiscoveryProvider.tsx";
import styled from "styled-components";

export const Discovery = () => {
    const [pageCount, setPageCount] = useState(25);
    const [pageNumber, setPageNumber] = useState(0);
    const { filters, handleUpdateFilter} = useDiscoveryContext()
    const {data, error, isLoading, isError} = useGetAppsQuery({ pageSize: pageCount, pageNumber, appName: filters[FILTER_NAMES.APP_NAME], category: filters[FILTER_NAMES.APP_CATEGORY]})
    console.log(data)

    if (data?.error || error) {
        return <span>Something went wrong</span>
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    return <DiscoveryLayout>
        {data?.appRows ? <div>
            <Table dataSource={data.appRows} />
            <Pagination setPageCount={setPageCount} pageCount={pageCount} setPage={setPageNumber} totalPages={Math.ceil(data?.totalCount / pageCount)} />
        </div> : <div>No data</div>}
        <Filter filters={filters} onFiltersUpdate={handleUpdateFilter} />
    </DiscoveryLayout>
}

export const DiscoveryPage = () => {
    return <DiscoveryProvider>
        <Discovery />
    </DiscoveryProvider>
}

const DiscoveryLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
`