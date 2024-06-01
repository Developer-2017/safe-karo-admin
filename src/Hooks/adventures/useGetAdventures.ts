import { useEffect, useRef, useState } from "react";
import { GetAdventuresProps } from "../../api/adventures/getAdventuresTypes";
import getAdventuresService from "../../api/adventures/getAdventures/getAdventuresService";
import { IAdventure } from "../../pages/adventures/IAdventure";

export const defaultAdventure: IAdventure[] = [];

const useGetAdventures = ({ header, queryString = {} }: GetAdventuresProps) => {
  const [adventures, setAdventures] = useState<IAdventure[]>(defaultAdventure);
  const isLoading = useRef(true);
  useEffect(() => {
    if (isLoading.current) {
      getAdventuresService({ header, queryString })
        .then((adventures) => {
          isLoading.current = false;
          setAdventures(adventures!);
        })
        .catch((res) => {
          console.error(res.status);
        });
    }
  }, [header, queryString, isLoading]);

  return [adventures];
};

export default useGetAdventures;
