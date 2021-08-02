import { React, useState } from 'react';
import CommunicationTest from '../communicationTest/CommunicationTest';
import DeviceInformation from '../deviceInformation/DeviceInformation';
import AppsInstalled from '../appInstalled/AppInstalled';
import NavInfo from '../navInfo/NavInfo';
import './infoList.css';
import { Row } from 'reactstrap';

const InfoList = ({ info, id }) => {
  const [viewInfo, setViewInfo] = useState(1);
  return (
    <>
      {info ? <NavInfo setViewInfo={setViewInfo} viewInfo={viewInfo}></NavInfo> : null}

      {viewInfo !== 1 ? null
        : <Row className="row">
          {info?.resultArray[id].communication_test.acquirers.map((acquirers) => (
            <CommunicationTest acquirers={acquirers} communication_test={info.resultArray[id].communication_test} />
          ))}
        </Row>}
        
       {viewInfo !== 2 ? null
        : <Row className="row">
            <DeviceInformation resultArray={info.resultArray[id]} />
        </Row>}

      {viewInfo !== 3 ? null 
        : <Row className="row">
          {info?.resultArray[id].apps_installed.map((apps_installed) => (
            <AppsInstalled apps_installed={apps_installed} />
          ))}
        </Row>}
    </>
  );
};
export default InfoList;
