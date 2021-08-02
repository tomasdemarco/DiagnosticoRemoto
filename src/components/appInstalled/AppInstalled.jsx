import { React } from 'react';
import './appInstalled.css';
import { Card, CardBody, CardText, CardFooter, Col, CardHeader } from 'reactstrap';

const AppInstalled = ({ apps_installed }) => {
  const primerMayuscula = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }
  var timestamp = apps_installed.lastTimeUsed ? apps_installed.lastTimeUsed : 0;
  var date = new Date(timestamp);
  return (
    <>
      <Col xs="4">
        <Card className="card">
          <CardHeader>Name: {primerMayuscula(apps_installed.name.toLowerCase())}</CardHeader>
          <CardBody>
            <CardText>Package name: {apps_installed.packageName}</CardText>
            <CardText>Version: {apps_installed.version}</CardText>
            <CardText>Cache size: {apps_installed.cacheSize}</CardText>
            <CardText>Code size: {apps_installed.codeSize}</CardText>
            <CardText>Data size: {apps_installed.dataSize}</CardText>
          </CardBody>
          <CardFooter>{date.getFullYear() !== 1969? "Last time used: " + date.getDate() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getFullYear() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds():"Last time used: -"}</CardFooter>
        </Card>
      </Col>
    </>
  );
};
export default AppInstalled;
