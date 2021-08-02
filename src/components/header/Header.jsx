import React, { useState } from 'react';
import './header.css';
import logo from '../../img/logo diagnostic.png';
import search from '../../img/search.svg';
import DateList from '../dateList/DateList';
import { Button, Container, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
let API_URL = 'https://testpaystoreback.prismamp.com/diagnostic?serial=';

const Header = ({ fetchPersonas, info, setId, id }) => {

  const [inputValue, setinputValue] = useState('');

  if (inputValue !== '') {
    API_URL = `https://testpaystoreback.prismamp.com/diagnostic?serial=${inputValue}`
  }
  const formHandler = (e) => {
    e.preventDefault();
    fetchPersonas(`${API_URL}`);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <header className="header" >
      <Container className="containerLogo"><img className="logo" src={logo} alt=""></img></Container>
      <Container className="containerForm">
        <FormControl variant="outlined" className="form">
          <InputLabel className="label" htmlFor="component-outlined">Ingrese numero de serie</InputLabel>
          <OutlinedInput className="input" id="component-outlined" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
          <Button className="boton" variant="outlined" onClick={formHandler}><img className="btnSearch" src={search} alt=""></img></Button>
        </FormControl>
      </Container>
      <Container className="containerDate">
        {info?.resultArray.message? null : <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Cambiar fecha/hora</DropdownToggle>
          <DropdownMenu>
            {info?.resultArray.map((resultArray, index) => (
              <DateList index={index} resultArray={resultArray} setId={setId} id={id}></DateList>
            ))}
          </DropdownMenu>
        </Dropdown>}
      </Container>
    </header>
  );
};
export default Header;
