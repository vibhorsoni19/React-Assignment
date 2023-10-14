import { Table, Button } from "react-bootstrap";
import { apiCall } from "../services/Userservices";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TableComponent({ users,setSearchinguser }) {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const navigate = useNavigate();
  const handleClick = async (url) => {
    const usersData = await apiCall("GET", url, null);
    navigate(`/details/${usersData.data.id}`);
  };

  //sorting functionality

  const handleSort = (field) => {
    let direction = "asc";

    if (sortField === field && sortDirection === "asc") {
      direction = "desc";
    }

    const sortedUsers = [...users].sort((a, b) => {
      if (direction === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });


    setSearchinguser(sortedUsers)
    setSortField(field);
    setSortDirection(direction);
  };

  return (
    <Table striped="py-1">
      <thead>
        <tr className="custom-row">
          <th>
            id
            <span onClick={() => handleSort("id")}>
              {sortField === "id" && sortDirection === "asc" ? "🔺" : "🔻"}
            </span>
          </th>
          <th>
            Name
            <span onClick={() => handleSort("name")}>
              {sortField === "name" && sortDirection === "asc" ? "🔺" : "🔻"}
            </span>
          </th>
          <th>Status</th>
          <th>Species</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {users &&
          users.map((item) => {
            return (
              <tr key={item.id} className="py-1">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.species}</td>
                <td>
                  <Button onClick={() => handleClick(item.url)}>view</Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default TableComponent;
