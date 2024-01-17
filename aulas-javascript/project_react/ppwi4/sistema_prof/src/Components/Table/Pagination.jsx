import React, {useState} from "react";

const Pagination = ({paginaAtual, totalPages }) => {

    const [currentPage, setcurrentPage] = useState(paginaAtual <= totalPages ? paginaAtual+1:1 )
    
    const pages=[];

    let ellipsisLeft = false;
    let ellipsisRight = false; 

    
    for (let i = 1; i <=totalPages; i++){
        if (i===currentPage){
            pages.push({
                id:i,
                current:true,
                ellipsis:false
            })
        } else if ( i < 2 || i > totalPages -1 || 
                    i === currentPage - 1 || 
                    i === currentPage + 1) {
                    pages.push({
                        id:i,
                        current:true,
                        ellipsis:false,
                    })        
        } else if (i > 1 && i < currentPage && !ellipsisLeft ){
                   pages.push({
                       id:i,
                       current:false,
                       ellipsis:true,
                   })
                   ellipsisLeft=true;
        } else if (i < totalPages && i > currentPage & !ellipsisRight ){
                   pages.push({
                       id:i,
                       current:false,
                       ellipsis:true
                   })
                   ellipsisRight=true;
        }
   }
   return(
        <div>
            <div className="col-xs-12 col-md-8">
                <ul className="pagination pull-right">
                    <li className={paginaAtual === 0 ? "page-item disabled":"page-item"}>
                       <button className="page-link btn btn-sm">
                           <i className="fa fa-angle-left"></i>
                       </button> 
                    </li>
                    <li className={paginaAtual === 0 ? "page-item disabled":"page-item"}>
                       <button className="page-link btn btn-sm">
                           <i className="fa fa-angle-double-left"></i>
                       </button>
                    </li>
                    {
                        pages.map(page=>{
                            if (!page.ellipsis){
                                return <li key={page.id}
                                    className={paginaAtual+1 === page.id ? "page-item active":"page-item"}
                                >
                                <a href="/#" className="page-link" >
                                   {page.id}
                                </a>
                                </li>
                            } else {
                                return <li key={page.id}>
                                       <span className="pagination-ellipsis">
                                       </span>
                                    </li>
                            }
                        })
                    }
                    <li>
                       <button className={paginaAtual === totalPages ? 
                                                          "page-link disabled btn btn-sm" 
                                                          :"page-link btn btn-sm"}>
                        <i className="fa fa-angle-double-right"></i>
                       </button>
                    </li>
                    <li>
                       <button className={paginaAtual === totalPages ? 
                                                          "page-link disabled btn btn-sm" 
                                                          :"page-link btn btn-sm"}>
                        <i className="fa fa-angle-right"></i>
                       </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination;