import { React, useState } from 'react';
import './deviceInformation.css';
import { Row, Col, Card, CardText, CardBody } from 'reactstrap';

const DeviceInformation = ({ resultArray }) => {

  return (
    <>
      {
        <Col xs="12">
            <Card className="card">
              <CardBody>
                <CardText>Android version: {resultArray.device_information.androidVersion}</CardText>
                <CardText>Api level: {resultArray.device_information.apiLevel}</CardText>
                <CardText>Architecture: {resultArray.device_information.architecture}</CardText>
                <CardText>Basebrand version: {resultArray.device_information.basebrandVersion}</CardText>
                <CardText>Battery capacity: {resultArray.device_information.batteryCapacity}</CardText>
                <CardText>Battery level: {resultArray.device_information.batteryLevel}</CardText>
                <CardText>Battery temperature: {resultArray.device_information.batteryTemperature}</CardText>
                <CardText>Battery voltage: {resultArray.device_information.batteryVoltage}</CardText>
                <CardText>Board: {resultArray.device_information.board}</CardText>
                {/* <CardText>Boot date: {resultArray.device_information.bootDate}</CardText> */}
                <CardText>Bootloader: {resultArray.device_information.bootloader}</CardText>
                <CardText>Brand: {resultArray.device_information.brand}</CardText>
                <CardText>Build display: {resultArray.device_information.buildDisplay}</CardText>
                <CardText>Build id: {resultArray.device_information.buildId}</CardText>
                <CardText>Charge plug: {resultArray.device_information.chargePlug}</CardText>
                <CardText>Connection type: {resultArray.device_information.connectionType}</CardText>
                <CardText>Device: {resultArray.device_information.device}</CardText>
                <CardText>Device manufacturer: {resultArray.device_information.deviceManufacturer}</CardText>
                <CardText>Device name: {resultArray.device_information.deviceName}</CardText>
                <CardText>Fingerprint: {resultArray.device_information.fingerprint}</CardText>
                <CardText>Hardware: {resultArray.device_information.hardware}</CardText>
                <CardText>Host: {resultArray.device_information.host}</CardText>
                <CardText>Icc id: {resultArray.device_information.iccid}</CardText>
                {/* <CardText>Imei: {resultArray.device_information.imei}</CardText> */}
                <CardText>IP address: {resultArray.device_information.ipAddress}</CardText>
                <CardText>Is charging: {resultArray.device_information.isCharging + ""}</CardText>
                <CardText>Is dual sim: {resultArray.device_information.isDualSim + ""}</CardText>
                <CardText>Is online: {resultArray.device_information.isOnline + ""}</CardText>
                <CardText>Is simulator: {resultArray.device_information.isSimulator + ""}</CardText>
                <CardText>Java VM Version: {resultArray.device_information.javaVmVersion}</CardText>
                <CardText>Kernel version: {resultArray.device_information.kernelVersion}</CardText>
                <CardText>Language: {resultArray.device_information.language}</CardText>
                <CardText>Latitude: {resultArray.device_information.latitude}</CardText>
                <CardText>Longitude: {resultArray.device_information.longitude}</CardText>
                <CardText>Low memory: {resultArray.device_information.lowMemory}</CardText>
                <CardText>Mac address: {resultArray.device_information.macAddress}</CardText>
                <CardText>Memory free: {resultArray.device_information.memoryFree}</CardText>
                <CardText>Memory size: {resultArray.device_information.memorySize}</CardText>
                <CardText>Network level: {resultArray.device_information.networkLevel}</CardText>
                <CardText>Network operator: {resultArray.device_information.networkOperator}</CardText>
                <CardText>Orientation: {resultArray.device_information.orientation}</CardText>
                <CardText>OS version: {resultArray.device_information.osVersion}</CardText>
                <CardText>Processor: {resultArray.device_information.processor}</CardText>
                <CardText>Product: {resultArray.device_information.product}</CardText>
                <CardText>Screen density: {resultArray.device_information.screenDensity}</CardText>
                <CardText>Screen dpi: {resultArray.device_information.screenDpi}</CardText>
                <CardText>Screen height: {resultArray.device_information.screenHeight}</CardText>
                <CardText>Screen resolution: {resultArray.device_information.screenResolution}</CardText>
                <CardText>Screen width: {resultArray.device_information.screenWidth}</CardText>
                <CardText>Serial: {resultArray.device_information.serial}</CardText>
                {/* <CardText>shutdownDate: {resultArray.device_information.shutdownDate}</CardText> */}
                <CardText>Storage free: {resultArray.device_information.storageFree}</CardText>
                <CardText>Storage size: {resultArray.device_information.storageSize}</CardText>
                <CardText>Timezone: {resultArray.device_information.timezone}</CardText>
                <CardText>Total Rx bytes: {resultArray.device_information.totalRxBytes}</CardText>
                <CardText>Total Rx mobile: {resultArray.device_information.totalRxMobile}</CardText>
                <CardText>Total Rx wifi: {resultArray.device_information.totalRxWifi}</CardText>
                <CardText>Total Tx bytes: {resultArray.device_information.totalTxBytes}</CardText>
                <CardText>Total Tx mobile: {resultArray.device_information.totalTxMobile}</CardText>
                <CardText>Total Tx wifi: {resultArray.device_information.totalTxWifi}</CardText>
                <CardText>Up time: {resultArray.device_information.upTime}</CardText>
                <CardText>Wifi level: {resultArray.device_information.wifiLevel}</CardText>
              </CardBody>
            </Card>
        </Col>
      }
    </>
  );
};
export default DeviceInformation;
