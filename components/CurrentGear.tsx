import { ThirdwebNftMedia, useAddress, useDisconnect, useNFT } from "@thirdweb-dev/react";
import { EditionDrop, SmartContract } from "@thirdweb-dev/sdk";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ContractMappingResponse from "../types/ContractMappingResponse";
import EditionDropMetadata from "../types/EditionDropMetadata";
import styles from "../styles/App.module.scss";

type Props = {
  miningContract: SmartContract<any>;
  dropContract: EditionDrop;
  unknownContract: EditionDrop;
};

export default function CurrentGear({
  miningContract,
  dropContract,
  unknownContract,
}: Props) {
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  const { data: playerNft } = useNFT(dropContract, 0);
  const [unknown, setUnknown] = useState<EditionDropMetadata>();

  useEffect(() => {
    (async () => {
      if (!address) return;

      const p = (await miningContract.call(
        "miningToken",
        address
      )) as ContractMappingResponse;

      // Now we have the tokenId of the equipped unknown, if there is one, fetch the metadata for it
      if (p.isData) {
        const unknownMetadata = await unknownContract.get(p.value);
        setUnknown(unknownMetadata);
      }
    })();
  }, [address, miningContract, unknownContract]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Currently Member player */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {playerNft && (
            <ThirdwebNftMedia metadata={playerNft?.metadata} height={"64"} style={{ borderRadius: 50, overflow: 'hidden' }} />

          )}
		  {address ? (<b style={{margin: 0}}>{address.slice(0, 2).concat("").concat(address.slice(-4))}</b>) : (<></>)}
        </div>
      <hr className={`${styles.divider}`} />
		<Card border="primary">
		 <Card.Header as="h5">Staking</Card.Header>
      <Card.Body>
        <Card.Title>
      <span className={`${styles.noGapBottom} `}>Staked Card</span>
	    </Card.Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* Currently staked NFT */}
        <div
          style={{ outline: "1px solid grey", borderRadius: 16, marginLeft: 8, overflow: 'hidden' }}
        >
          {unknown && (
            // @ts-ignore
            <ThirdwebNftMedia metadata={unknown.metadata} height={"200"} />
          )}
        </div>
      </div>
      </Card.Body>
	  </Card>
    </div>
  );
}
