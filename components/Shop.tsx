import { ThirdwebNftMedia, useNFTs } from "@thirdweb-dev/react";
import { EditionDrop } from "@thirdweb-dev/sdk";
import React, { useEffect } from "react";
import LoadingSection from "./LoadingSection";
import styles from "../styles/App.module.scss";
import ShopItem from "./ShopItem";

type Props = {
  unknownContract: EditionDrop;
};

/**
 * This component shows the:
 * - All of the available unknowns from the edition drop and their price.
 */
export default function Shop({ unknownContract }: Props) {
  const { data: availableUnknown, isLoading } = useNFTs(unknownContract);


  if (isLoading) {
    return <LoadingSection />;
  }

  return (
    <>
      <div className={styles.nftBoxGrid}>
        {availableUnknown?.map((p) => (
          <ShopItem
            unknownContract={unknownContract}
            item={p}
            key={p.metadata.id.toString()}
          />
        ))}
      </div>
    </>
  );
}
