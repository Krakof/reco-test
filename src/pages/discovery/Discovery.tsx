import {type AppType, useGetAppsQuery} from "../../api/get-apps.ts";
import styled from "styled-components";
import {Pagination} from "./components/Pagination.tsx";
import {useState} from "react";
import {Filter} from "../../components/Filter.tsx";

const columns = [
    {
        title: 'Name',
        dataIndex: 'appName',
        key: 'name',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Connection',
        dataIndex: 'appSources',
        key: 'connection',
    },
];

export const Discovery = () => {
    const [pageCount, setPageCount] = useState(25);
    const [pageNumber, setPageNumber] = useState(0);
    const [filterName, setFilterName] = useState('');
    const {data, error, isLoading} = useGetAppsQuery({ pageSize: pageCount, pageNumber, appName: filterName})
    console.log(data)

    if (error || data?.error) {
        return <span>Something went wrong</span>
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    return <div>
        {data?.appRows ? <div>
            <Table dataSource={data.appRows} />
            <Pagination setPageCount={setPageCount} pageCount={pageCount} setPage={setPageNumber} totalPages={Math.ceil(data?.totalCount / pageCount)} />
        </div> : <div>No data</div>}
        <Filter appName={filterName} setName={setFilterName} />
    </div>
}

const Table = ({ dataSource }: {dataSource: AppType[]}) => {
    return (
        <TableStyled>
            <thead>
            {columns.map(({ title, key }, i) =>
                <>
                    <HeadCellStyled key={key}>{title}</HeadCellStyled>
                </>
            )}
            </thead>
            <tbody>
                {dataSource.map(({appId, appName, category, appSources}) => (
                    <tr key={appId}>
                        <CellStyled>{appName}</CellStyled>
                        <CellStyled>{category}</CellStyled>
                        <CellStyled>{appSources.join(',')}</CellStyled>
                    </tr>
                ))}
            </tbody>
        </TableStyled>
    )}

const HeadCellStyled = styled.th`
    font-size: 18px;
`

const TableStyled = styled.table`
    width: 100%;
    text-align: left;
    color: #ffffff;
`
const CellStyled = styled.td`
    font-size: 14px;
`