import {type AppType, useGetAppsQuery} from "../../api/get-apps.ts";
import styled from "styled-components";

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
    const {data, error, isLoading} = useGetAppsQuery()
    console.log(data)

    if (error || data?.error) {
        return <span>Something went wrong</span>
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    // return data ? <TableStyled dataSource={data.appRows} columns={columns} /> : <div>No data</div>
    return data?.appRows ? <Table dataSource={data.appRows} /> : <div>No data</div>
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