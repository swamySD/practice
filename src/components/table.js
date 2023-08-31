import React, { useState } from 'react';



const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const [cityFilter, setCityFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const filteredData = data.filter(item => 
    (!cityFilter || item.city === cityFilter) &&
    (!ageFilter || item.age === parseInt(ageFilter))
  );

  const itemsPerPage=2
   

  const indexOfFirstItem = (currentPage - 1 )*itemsPerPage;
  const indexOfLastItem = indexOfFirstItem+itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <label>City:</label>
        <select value={cityFilter} onChange={e => setCityFilter(e.target.value)}>
          <option value="">All Cities</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={ageFilter}
          onChange={e => setAgeFilter(e.target.value)}
        />
      </div>
      <table>
        <thead>
            <tr>
                <th> name</th>
                <th> age</th>
                <th> city</th>
            </tr>
        </thead>
        {currentItems.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                </tr>
            )
        })}
      </table>
      <div>
         <button style={{width:'50px',borderRadius:'50%' ,color:'yellow'}} 
         disabled={currentPage===1}
         onClick={()=>handleChangePage(currentPage-1)}>-</button>
           <span>{currentPage} of {totalPages}</span>
         <button disabled={currentPage===totalPages} style={{width:'50px',borderRadius:'50%'}} onClick={()=>handleChangePage(currentPage+1)}>+</button>
       </div>
    </div>
  );
};


export default Table
