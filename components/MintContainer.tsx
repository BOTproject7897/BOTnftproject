import {
  ThirdwebNftMedia,
  useAddress,
  useClaimNFT,
  useEditionDrop,
} from "@thirdweb-dev/react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Navigation from './Navbar';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { DROP_EDITION_ADDRESS } from "../const/contract";
import styles from "../styles/App.module.scss";

const VipCard = '/vipcard.png'
const Claim = 'Claim'
const Minting = 'Approving...'

export default function MintContainer() {
  const editionDrop = useEditionDrop(DROP_EDITION_ADDRESS);
  const { mutate: claim, isLoading } = useClaimNFT(editionDrop);
  const address = useAddress();
 
  async function mint() {
    try {
      claim(
        {
            quantity: 1,
            to: address as string,
            tokenId: 0,
          },
        {
          onSuccess: (data) => {
            Swal.fire({
              title: 'Success!',
              text: 'Member Card berhasil diclaim..',
              icon: 'success',
              confirmButtonText: 'Cool'
              });
          },
          onError: (error) => {
            const e = error;
            Swal.fire({
              title: 'Error!',
              text: 'Claim Member Card Gagal..',
              icon: 'error',
              confirmButtonText: 'Blah'
              });
          },
        }
      );
    } catch (error) {
            Swal.fire({
              title: 'Error!',
              text: 'Do you want to continue',
              icon: 'error',
              confirmButtonText: 'Blah'
              });
        }
  }


  return (
<>
<Navigation />
    <div className={styles.collectionContainer}>
      <h1>BOT NFT Project</h1>

      <p>Claim your Member Card to enter.</p>

      <Card className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <Image src={VipCard} width={300} height={300} alt='avatar' />

        {isLoading ? (
      <Button className={styles.btn_absBottom} disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span> {Minting}</span>
      </Button>
    ) : (
      <Button className={styles.btn_absBottom}
        onClick={() =>
          mint()
        }

      >{Claim}</Button>
 )}
      </Card>
    </div>
</>
  );
}
