import React from "react";
import {
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import style from "../styles/App.module.scss";

const Polygon = "/icons/ftm.png"

export default function Disconnect() {
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  return (
    <>
        {address ? (
        <Button className={style.btn_logout} onClick={() => disconnectWallet()} variant='danger'>
        <Image src={Polygon} width={20} height={20} alt="polygon" />
                    <p style={{margin: 0}}>{address.slice(0, 4).concat("*").concat(address.slice(-4))}</p>
        </Button>
          ) : (<></>)}
    </>
  );
}
