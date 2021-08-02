import React from 'react';
import { DropdownItem } from 'reactstrap';

const DateList = ({index, resultArray, setId, id }) => {

  const formatDate = (timestamp) => {
    var date = new Date(timestamp);
    return date.getDate() +
    "/" + (date.getMonth() + 1) +
    "/" + date.getFullYear() +
    " " + date.getHours() +
    ":" + date.getMinutes() +
    ":" + date.getSeconds();
  }
  if(id === ''){
    setId(index);
  }
  return (
  <>
      <DropdownItem onClick={() => setId(index)}>{formatDate(resultArray.createdAt)}</DropdownItem>
  </>
);
};
export default DateList;
