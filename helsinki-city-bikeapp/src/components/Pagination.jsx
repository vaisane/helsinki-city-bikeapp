import React from 'react'

const Pagination = ({currentPage, totalPages, setCurrentPage}) => {
    const nextPage = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
    }
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
        }
    }
  return (
    <>
        <span>Page {currentPage}/{totalPages}</span>
        <button onClick={() => prevPage()}>&lt;</button>
        <button onClick={() => nextPage()}>&gt;</button>
    </>
  )
}

export default Pagination