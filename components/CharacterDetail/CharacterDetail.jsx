import React from "react";
import { Button, Card, Grid, Text, Col, Row } from "@nextui-org/react";
import styles from "./Character.module.scss";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { BiCameraMovie } from "react-icons/bi";
import { fetcher } from "../../utils/utils-request";
import useSWR from "swr";

const CharacterDetail = ({ character, router }) => {
  const { data: films, error } = useSWR(character.films, fetcher, {
    initialSize: 1,
    revalidateFirstPage: false,
  });

  const getElapsedTime = (date) => {
    const today = new Date();
    date = new Date(date);
    return date ? today.getYear() - date.getYear() : "";
  };

  return (
    <Grid.Container className={styles.CharacterDetail}>
      <div className={styles.stars}></div>
      <Button
        icon={<VscArrowSmallLeft />}
        light
        auto
        onClick={() => router.back()}
      >
        Go back
      </Button>

      <Card
        css={{
          margin: "$6",
          borderRadius: "5px",
          border: "2px solid $starWarsColorLow",
          background: "rgb(8 8 12 / 91%)",
          boxShadow: "#ffd44270 0px 0px 12px 0px",
        }}
      >
        <Card.Header css={{ justifyContent: "center" }}>
          <Text
            css={{
              textGradient: "$starWarsGradient",
            }}
            h2
          >
            {character.name}
          </Text>
        </Card.Header>
        <Card.Body
          css={{
            background: "rgb(26 26 30 / 47%)",
            flexFlow: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Height
            </Text>
            <span>{character.height}</span>
          </div>
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Gender
            </Text>
            <span>{character.gender}</span>
          </div>
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Mass
            </Text>
            <span>{character.mass}</span>
          </div>
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Hair color
            </Text>
            <span>{character.hair_color}</span>
          </div>
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Eye color
            </Text>
            <span>{character.eye_color}</span>
          </div>
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Skin color
            </Text>
            <span>{character.skin_color}</span>
          </div>
          <div className={styles.group}>
            <Text css={{ marginRight: "$5" }} h5>
              Birth year
            </Text>
            <span>{character.birth_year}</span>
          </div>
        </Card.Body>
        <Card.Footer css={{ margin: "$10" }}>
          <div className={styles.groupWidth}>
            <BiCameraMovie className={styles.iconMovie} />
            <Text h5 css={{ margin: "0" }}>
              Films
            </Text>
          </div>
          <Col css={{ width: "100%" }}>
            {films ? (
              Array.isArray(films) ? (
                films?.map((film, key) => (
                  <Text key={key}>
                    <span className={styles.filmTitle}>{film.title}</span>
                    {""} ({getElapsedTime(film.release_date)} years ago)
                  </Text>
                ))
              ) : (
                <Text>
                  <span className={styles.filmTitle}>{films.title}</span>
                  {""} ({getElapsedTime(films.release_date)} years ago)
                </Text>
              )
            ) : (
              <Text>{error}</Text>
            )}
          </Col>
        </Card.Footer>
      </Card>
    </Grid.Container>
  );
};

export default CharacterDetail;
