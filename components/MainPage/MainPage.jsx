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
  Link,
} from "@nextui-org/react";
import CardDetail from "../CardDetail/CardDetail";
import { useRouter } from "next/router";

const MainPage = () => {
  const { characters, size, setSize, isLoadingMore, isReachedEnd } =
    useCharacters();
  const router = useRouter();

  const handleOnClick = (key) => {
    key = key + 1;
    router.push({
      pathname: "/character/[slug]",
      query: { slug: key },
    });
  };

  return (
    <Grid.Container
      css={{ padding: "4rem 3rem" }}
      className={styles.mainContainer}
    >
      <div className={styles.stars}></div>
      <Row>
        <Image alt="logo-star-wars" src="/images/star_wars_2.svg" width={400} />
      </Row>
      <Row justify="center">
        <Text css={{ color: "$white" }} className={styles.title} h3>
          CHARACTERS
        </Text>
      </Row>
      {characters ? (
        <>
          {characters?.map((character, key) => (
            <Grid
              key={key}
              sm={3}
              xs={12}
              alignItems="center"
              justify="space-between"
            >
              <Card
                isHoverable
                isPressable
                onClick={() => handleOnClick(key)}
                css={{
                  margin: "$6",
                  borderRadius: "5px",
                  border: "2px solid $starWarsColorLow",
                  background: "rgb(8 8 12 / 91%)",
                }}
              >
                <Card.Header>
                  <Text
                    css={{
                      textGradient: "$starWarsGradient",
                    }}
                    h3
                  >
                    {character.name}
                  </Text>
                </Card.Header>
                <Card.Footer>
                  <CardDetail character={character} />
                </Card.Footer>
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
