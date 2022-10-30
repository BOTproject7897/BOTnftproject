import {
  NFT,
  ThirdwebNftMedia,
  useActiveClaimCondition,
  useAddress,
  useClaimNFT,
} from "@thirdweb-dev/react";
import { EditionDrop } from "@thirdweb-dev/sdk";
import { BigNumber, ethers } from "ethers";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from "../styles/App.module.scss";

type Props = {
  unknownContract: EditionDrop;
  item: NFT<EditionDrop>;
};

const Symbol = '$BOT'

export default function ShopItem({ item, unknownContract }: Props) {
  const address = useAddress();

  const { data: claimCondition } = useActiveClaimCondition(
    unknownContract,
    item.metadata.id
  );

  const { mutate: claimNft, isLoading } = useClaimNFT(unknownContract);

  console.log(claimCondition);

  async function buy(id: BigNumber) {
    if (!address) return;

    try {
      claimNft({
        to: address,
        tokenId: id,
        quantity: 1,
      });
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Are you sure you have enough tokens?");
    }
  }

  return (
    <Card className={styles.nftBox} key={item.metadata.id.toString()}>
      <ThirdwebNftMedia
        metadata={item.metadata}
        className={`${styles.nftMedia}`}
        height={"218"}
		style={{objectFit: 'cover', objectPosition: 'center'}}
      />
      <Card.Body>
        <Card.Title>{item.metadata.name}</Card.Title>
        <Card.Text>
		{item.metadata.description}
			<p/>
        Price:{" "}
        <b>
          {claimCondition && ethers.utils.formatUnits(claimCondition?.price)}{" "} {Symbol}
        </b>
        </Card.Text>
      <Button variant="primary"
        onClick={() => buy(item.metadata.id)}
        className={`${styles.smButton} ${styles.rightSide}`} style={{minWidth: 120}}
      >
        {isLoading ? "buying..." : "Buy"}
      </Button>
      </Card.Body>
    </Card>
  );
}
