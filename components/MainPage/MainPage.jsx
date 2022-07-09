import React from "react";
import { useCharacters } from "../../utils/utils-request";
import styles from "./MainPage.module.scss";
import {
  Grid,
  Row,
  Card,
  Text,
  Image,
  Button,
  Loading,
} from "@nextui-org/react";
import CardDetail from "../CardDetail/CardDetail";

const MainPage = () => {
  const { characters, size, setSize, isLoadingMore, isReachedEnd } =
    useCharacters();

  return (
    <Grid.Container
      css={{ padding: "4rem 3rem" }}
      className={styles.mainContainer}
    >
      <div className={styles.stars}></div>
      <Row>
        <Image alt="logo-star-wars" src="/images/star_wars_2.svg" width={300} />
      </Row>
      <Row justify="center">
        <Text css={{ color: "$starWarsColor" }} className={styles.title} h3>
          CHARACTERS
        </Text>
      </Row>
      {characters ? (
        <>
          {characters?.map((character, key) => (
            <Grid
              key={key}
              xs={6}
              sm={3}
              alignItems="center"
              justify="space-between"
            >
              <Card css={{ margin: "$6" }}>
                <Card.Header>
                  <Text h4>{character.name}</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <CardDetail character={character} />
                </Card.Body>
              </Card>
            </Grid>
          ))}
          {!isReachedEnd && (
            <Row className={styles.buttonWrapper}>
              <Button
                color="gradient"
                auto
                bordered
                onClick={() => setSize(size + 1)}
              >
                {isLoadingMore ? (
                  <Loading type="points" color="currentColor" size="sm" />
                ) : (
                  "LOAD MORE"
                )}
              </Button>
            </Row>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Grid.Container>
  );
};

export default MainPage;
