import {
  useAddress,
  useContract,
  useEditionDrop,
  useToken,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CurrentGear from "../components/CurrentGear";
import LoadingSection from "../components/LoadingSection";
import OwnedGear from "../components/OwnedGear";
import Rewards from "../components/Rewards";
import Shop from "../components/Shop";
import Navigation from './Navbar';
import ConnectWallet from "../components/connect";
import {
  MINING_CONTRACT_ADDRESS,
  DROP_EDITION_ADDRESS,
  INITIAL_EDITION_ADDRESS,
  INITIAL_TOKEN_ADDRESS,
} from "../const/contract";
import styles from "../styles/App.module.scss";

export default function Mining() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const address = useAddress();
  const { contract: miningContract } = useContract(MINING_CONTRACT_ADDRESS);
  const dropContract = useEditionDrop(DROP_EDITION_ADDRESS);
  const unknownContract = useEditionDrop(INITIAL_EDITION_ADDRESS);
  const tokenContract = useToken(INITIAL_TOKEN_ADDRESS);

  if (!address) {
    return (
      <Container>
        <ConnectWallet />
      </Container>
    );
  }

  return (
    <>
<Navigation />
      <hr className={`${styles.divider} ${styles.noGapTop}`} />
      {miningContract &&
      dropContract &&
      tokenContract &&
      unknownContract ? (
        <div className={styles.mainSection}>
          <Row>
            <Col xs={12} md={6}>
          <CurrentGear
            miningContract={miningContract}
            dropContract={dropContract}
            unknownContract={unknownContract}
          />
            </Col>
            <Col xs={12} md={6}>
          <Rewards
            miningContract={miningContract}
            tokenContract={tokenContract}
          />
            </Col>
          </Row>
        </div>
      ) : (
        <LoadingSection />
      )}

      <hr className={`${styles.divider} ${styles.bigSpacerTop}`} />

      {unknownContract && miningContract ? (
        <>
    <Card>
      <Card.Header as="h5">
            Your Owned NFTs</Card.Header>
      <Card.Body>
          <div
            style={{
              width: "100%",
              minHeight: "10rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <OwnedGear
              unknownContract={unknownContract}
              miningContract={miningContract}
            />
          </div>
      </Card.Body>
    </Card>
        </>
      ) : (
        <LoadingSection />
      )}

      <hr className={`${styles.divider} ${styles.bigSpacerTop}`} />

      {unknownContract && tokenContract ? (
        <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Mining Card
      </Button>
      <Offcanvas show={show} placement='bottom' onHide={handleClose} style={{height: '100vh'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mining Card</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              width: "100%",
              minHeight: "10rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Shop unknownContract={unknownContract} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </>
      ) : (
        <LoadingSection />
      )}
    </>
  );
}
