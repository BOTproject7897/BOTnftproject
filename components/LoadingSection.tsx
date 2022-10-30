import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import styles from "../styles/App.module.scss";

export default function LoadingSection() {
  return <div className={styles.midcenter}>
        <Stack className="mx-auto">
              <Spinner animation="border" variant="primary" />
        </Stack></div>;
}
