import React from "react";
import Image from 'next/image';
import styles from "../styles/Gameplay.module.scss";
import EditionDropMetadata from "../types/EditionDropMetadata";

const GoldGem = (
  <div className={styles.slide}>
    <Image src="./gold-gem.png" height={48} width={48} alt="gold-gem" />
  </div>
);

type Props = {
  unknown: EditionDropMetadata | undefined;
};

export default function GameplayAnimation({ unknown }: Props) {
  if (!unknown) {
    return <div style={{ marginLeft: 8 }}>I need a food!</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
      </div>
    </div>
  );
}
