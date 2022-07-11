import React from "react";
import { Button, Card, Grid, Text, Col, Row } from "@nextui-org/react";
import styles from "./Character.module.scss";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { BiCameraMovie } from "react-icons/bi";
import { fetcher } from "../../utils/utils-request";
import useSWR from "swr";
import GroupText from "../GroupText/GroupText";

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
        data-testid='character-detail-back-button'
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
          <Text data-testid='character-name'
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
          <GroupText title='Height' text={character.height} idTest='height-text' />
          <GroupText title='Gender' text={character.gender} idTest='height-gender' />
          <GroupText title='Mass' text={character.mass} idTest='height-mass' />
          <GroupText title='Hair color' text={character.hair_color} idTest='height-hair' />
          <GroupText title='Eye color' text={character.eye_color} idTest='height-eye' />
          <GroupText title='Skin color' text={character.skin_color} idTest='height-skin' />
          <GroupText title='Birth year' text={character.birth_year} idTest='height-birth' />
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
