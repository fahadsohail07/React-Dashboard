import "./Users.css";
import React, { useState } from "react";
import _ from "lodash";

const Users = (props) => {
  const [users, setUsers] = useState(props.data);

  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedUsers = _.orderBy(users, sortBy, sortOrder);

  const getHeaderCellStyle = (column) => {
    if (column === sortBy) {
      return {
        backgroundColor: "#1C3353",
        color: "white",
      };
    }
    return {};
  };

  return (
    <table>
      <thead>
        <tr>
          <th style={getHeaderCellStyle("id")} onClick={() => handleSort("id")}>
            Id
          </th>
          <th
            style={getHeaderCellStyle("name")}
            onClick={() => handleSort("name")}
          >
            Name
          </th>
          <th
            style={getHeaderCellStyle("company")}
            onClick={() => handleSort("company")}
          >
            Company
          </th>
          <th
            style={getHeaderCellStyle("role")}
            onClick={() => handleSort("role")}
          >
            Role
          </th>
          <th
            style={getHeaderCellStyle("status")}
            onClick={() => handleSort("status")}
          >
            Status
          </th>
          <th
            style={getHeaderCellStyle("verified")}
            onClick={() => handleSort("verified")}
          >
            Verified
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.company}</td>
            <td>{user.role}</td>
            <td>{user.status}</td>
            <td>{user.verified}</td>
          </tr>
        ))}
      </tbody>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <p className="view-more">View more{">>"}</p>
    </table>
  );
};

export default Users;
