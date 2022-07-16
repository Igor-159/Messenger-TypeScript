import { useState, FC } from "react";



interface PaginatorProps{
    totalItemsCount: number, 
    pageSize: number, 
    currentPage: number, 
    onPageChanged: any,
    portionSize?: number
}

const Paginator: FC<PaginatorProps> = (props) =>{
    const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10} = props

    let pagesCount = Math.ceil(totalItemsCount/ pageSize);
         /* if(pagesCount>30)  {
              pagesCount = 30
          }*/
            let pages = [];
            for(let i = 1; i <= pagesCount; i++){
                pages.push(i);
            }
    
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


        return(
        <div>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)} }>Prev</button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return (<span key={page} style={{cursor: "pointer"}} className={currentPage === page ? 'selectedPage' : ''}
                onClick={(e) =>{onPageChanged(page)}}>{page}</span>)
                })
        }
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
        }     
        </div>
        )
    }
    
        export default Paginator;