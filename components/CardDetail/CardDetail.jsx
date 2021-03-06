import React from "react";
import styles from "./CardDetail.module.scss";
import { Row, Col, Text } from "@nextui-org/react";

const CardDetail = ({ character }) => (
  <Row className={styles.cardDetailWrapper}>
    <Col css={{display: "flex", alignItems: "center", marginRight: "$5" }}>
        <Text className={styles.title} h5>
          Films
        </Text>
        <span data-testid="card-detail-films" className={styles.films}>{character.films?.length}</span>
    </Col>
    <Col css={{display: "flex", justifyContent:"flex-end", alignItems: "center", marginRight: "$5" }}>
      <Text className={styles.title} h5>
        Birth
      </Text>
      <p className={styles.text}> {character.birth_year}</p>
    </Col>
  </Row>
);

export default CardDetail;
