import React from "react";
import styles from "./CardDetail.module.scss";
import { Row, Col, Text } from "@nextui-org/react";

const CardDetail = ({ character }) => {
  return (
    <Row className={styles.cardDetailWrapper}>
      <Col>
        <span className="flex">
          <Text
            className={styles.title}
            h5
            css={{
              textGradient: "$starWarsGradient",
            }}
          >
            Films
          </Text>{" "}
          {character.films?.length}
        </span>
      </Col>
      <Col>
        <p className={styles.text}>Birth Year: {character.birth_year}</p>
      </Col>
    </Row>
  );
};

export default CardDetail;
