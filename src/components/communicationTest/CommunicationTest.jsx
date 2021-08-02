import { React, useState } from 'react';
import './communicationTest.css';
import { Row, Col, Card, CardBody, CardHeader, CardText } from 'reactstrap';

const CommunicationTest = ({ communication_test, acquirers }) => {

  return (
    <>
      {
        <Col xs="12">
            <Card className="card">
              <CardHeader>Acquier {acquirers.acquirerName}</CardHeader>
              <CardBody>
                <CardText>Acquirer name: {acquirers.acquirerName}</CardText>
                <CardText>Acquirer response time: {acquirers.acquirerResponseTime}</CardText>
                <CardText>Acquirer status: {acquirers.acquirerStatus}</CardText>
                <CardText>Server name: {acquirers.serverName}</CardText>
                <CardText>Server response time: {acquirers.serverResponseTime}</CardText>
                <CardText>Server status: {acquirers.serverStatus}</CardText>
              </CardBody>
            </Card>
            <Card className="card">
              <CardHeader>Api</CardHeader>
              <CardBody>
                <CardText>Server mean response time: {communication_test.api.serverMeanResponseTime}</CardText>
                <CardText>Server status: {communication_test.api.serverStatus}</CardText>
              </CardBody>
            </Card>
            <Card className="card">
              <CardHeader>App store</CardHeader>
              <CardBody>
                <CardText>Is store status: {communication_test.appStore.isStoreStatus}</CardText>
                <CardText>Store response time: {communication_test.appStore.storeResponseTime}</CardText>
              </CardBody>
            </Card>
            <Card className="card">
              <CardHeader>Network</CardHeader>
              <CardBody>
                <CardText>Is connected network: {communication_test.network.isConnectedNetwork}</CardText>
                <CardText>Network level: {communication_test.network.networkLevel}</CardText>
                <CardText>Network type: {communication_test.network.networkType}</CardText>
              </CardBody>
            </Card>
            <Card className="card">
              <CardHeader>Paystore init</CardHeader>
              <CardBody>
                <CardText>Init response time: {communication_test.paystoreInit.initResponseTime}</CardText>
                <CardText>Is paystore init: {communication_test.paystoreInit.isPaystoreInit}</CardText>
              </CardBody>
            </Card>
          <hr></hr>
        </Col>
      }
    </>
  );
};
export default CommunicationTest;
