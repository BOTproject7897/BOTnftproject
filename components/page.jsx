import React, {useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import style from "../styles/App.module.scss";

const Banner = '/membercard.png'
const TxtTitle = 'BOT NFT project'
const BtnTxt = 'Lanjutkan'

function Page() {
  const values = [true, 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);


return (
<>
      <Modal show={show} fullscreen={fullscreen} backdrop="static" keyboard={false} onHide={handleClose} style={{backgroundColor: "#fff"}}>
        <Modal.Header>
          <Modal.Title>{TxtTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Image src={Banner} alt='' width="640px" height="620px" className={style.page_img} />
            </Col>
            <Col xs={12} md={6} className={style.flx_column}>
              <h1 className={style.font_title}>Join the Movement<br/><span className={style.flx_end}>and unlock</span>the unique Art</h1>
                <span className={style.font_desc}>Let's discover our work.</span>
        <div className={style.flx_end}>
          <Button variant="primary" onClick={handleClose}>
            {BtnTxt}
          </Button>
        </div>
            </Col>
            <Col xs={12} md={12} className={style.flx_column}>
			<span className={style.font_desc}>Road Map</span>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      </Modal>
</>
    )
}

export default Page;
