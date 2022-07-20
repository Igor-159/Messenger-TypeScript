import { Pagination, PaginationProps } from "antd";
import { useState, FC } from "react";



interface PaginatorProps{
    totalItemsCount: number, 
    pageSize: number, 
    currentPage: number, 
    onPageChanged: any,
    portionSize?: number,
    isFetching: boolean
}

const Paginator: FC<PaginatorProps> = (props) =>{
    const {totalItemsCount, pageSize, currentPage, onPageChanged, isFetching} = props

    

    let pagesCount = Math.ceil(totalItemsCount/ pageSize);
    const onChange: PaginationProps['onChange'] = (page: number) => {
        onPageChanged(page);
      };


        return(
            <Pagination
                    current={currentPage}
                    onChange={onChange}
                    total={pagesCount}
                    disabled={isFetching}
                />
        )
    }
    
        export default Paginator;