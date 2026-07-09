import type {FC} from "react";
import {Button} from "antd";

type Props = {
    setPageCount: (pageCount: number) => void;
    setPage: (page: number) => void;
    pageCount: number;
    totalPages: number;
}

export const Pagination: FC<Props> = ({ setPageCount, pageCount, totalPages,  setPage}) => {
    const pages = Array(totalPages).fill(0)

    const handlePageSizeChange = (e) => {
        setPageCount(Number(e.target.value));
    }

    return <div>
        <div>
            {pages.map((_, index) => <Button key={index} onClick={() => setPage(index)}>{index + 1}</Button>)}
        </div>
        <div>
            <span>Page size:</span>
            <select value={pageCount} onChange={handlePageSizeChange}>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
    </div>
}