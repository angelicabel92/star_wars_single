import React from "react";
import { useRouter } from "next/router";
import { BASE_URL, fetcher } from "../../utils/utils-request";
import useSWR from "swr";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";

const CharacterDetailWrapper = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR(`${BASE_URL}/${slug}`, fetcher);

  return data && <CharacterDetail character={data} router={router} />;
};

export default CharacterDetailWrapper;
