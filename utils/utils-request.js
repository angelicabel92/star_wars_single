import useSWRInfinite from "swr/infinite";

export const fetcher = (...urls) => {
  const f = (u) => fetch(u).then((r) => r.json());

  if (urls.length > 1) {
    return Promise.all(urls.map(f));
  }
  return f(urls);
};

// APIS URL
export const BASE_URL = "https://swapi.dev/api/people";
export const BASE_URL_FILMS = "https://swapi.dev/api/films";

const getKey = (pageIndex, prevPageData) => {
  pageIndex = pageIndex + 1;

  if (prevPageData?.next === null) return null;
  if (pageIndex === 1) return BASE_URL;

  return `${BASE_URL}?page=${pageIndex}`;
};

export const useCharacters = () => {
  const { data, size, setSize, error } = useSWRInfinite(getKey, fetcher, {
    initialSize: 1,
    revalidateFirstPage: false,
  });

  const characters = data ? data.map((dt) => dt.results).flat() : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  const isReachedEnd = data?.length === 9;

  return { characters, error, isLoadingMore, size, setSize, isReachedEnd };
};
