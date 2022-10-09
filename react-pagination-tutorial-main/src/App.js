import "./App.css";
import React, { useEffect, useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function App() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(()=>{
setUsers(JsonData);
  },[])

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  const hello =(e)=>{
    alert(e)
  }

  const del =(e)=>{
    alert(e);
 let dd =   users.filter((item)=>{
      if(e === item.firstName){
        return item
      }
    })

setPageNumber(0)
    setUsers(dd)
    console.log(dd);
    console.log("usersPerPage",pageNumber)

  }

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user,index) => {
      return (
        <div className="user">
          <h1>{index}</h1>
          <h3 onClick={e=>hello(index)}>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
          <h3 onClick={e=>del(user.firstName)}>del</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
