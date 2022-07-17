import { Pagination, PaginationProps } from "antd";
import { useState, FC } from "react";



interface PaginatorProps{
    totalItemsCount: number, 
    pageSize: number, 
    currentPage: number, 
    onPageChanged: any,
    portionSize?: number
}

const Paginator: FC<PaginatorProps> = (props) =>{
    const {totalItemsCount, pageSize, currentPage, onPageChanged} = props

    

    let pagesCount = Math.ceil(totalItemsCount/ pageSize);
    const onChange: PaginationProps['onChange'] = (page: number) => {
        console.log(page);
        onPageChanged(page);
      };


        return(
            <Pagination
                    current={currentPage}
                    onChange={onChange}
                    total={pagesCount}
                />
        )
    }
    
        export default Paginator;