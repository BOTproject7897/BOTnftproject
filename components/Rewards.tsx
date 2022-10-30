import {
  ThirdwebNftMedia,
  useAddress,
  useMetadata,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { SmartContract, Token } from "@thirdweb-dev/sdk";
import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import styles from "../styles/App.module.scss";
import ApproxRewards from "./ApproxRewards";

type Props = {
  miningContract: SmartContract<any>;
  tokenContract: Token;
};

const Symbol = '$BOT'

export default function Rewards({ miningContract, tokenContract }: Props) {
  const address = useAddress();

  const { data: tokenMetadata } = useMetadata(tokenContract);
  const { data: currentBalance } = useTokenBalance(tokenContract, address);

  const [unclaimedAmount, setUnclaimedAmount] = useState<BigNumber>();

  useEffect(() => {
    (async () => {
      if (!address) return;

      const u = await miningContract.call("calculateRewards", address);
      setUnclaimedAmount(u);
    })();
  }, [address, miningContract]);

  async function claim() {
    if (!address) return;

    await miningContract.call("claim");
  }

  return (
    <div
    >
		<Card border="success">
		 <Card.Header as="h5">Reward</Card.Header>
      <Card.Body>
        <Card.Title>
        Your <b>Tokens</b>
	    </Card.Title>

      {tokenMetadata && (
        <ThirdwebNftMedia
          // @ts-ignore
          metadata={tokenMetadata}
          height={"48"}
        />
      )}
      <p className={styles.noGapBottom}>
        Balance Wallet: <b>{currentBalance?.displayValue} {Symbol}</b>
      </p>
      <span>
        Unclaimed:{" "}
        <b>{unclaimedAmount && ethers.utils.formatUnits(unclaimedAmount)} {Symbol}</b>
      </span>
      <hr className={`${styles.divider}`} />
	<Alert variant='success'>
      <ApproxRewards miningContract={miningContract} />

      <Button variant="success" size="sm"
        onClick={() => claim()}
        className={`${styles.smButton} ${styles.rightSide}`}
      >
        Claim
      </Button>
	</Alert>
      </Card.Body>
	  </Card>
    </div>
  );
}
