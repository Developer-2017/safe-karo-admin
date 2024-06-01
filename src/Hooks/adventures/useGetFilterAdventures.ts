import { useEffect, useRef, useState } from "react";
import { GetFilterAdventuresProps } from "../../api/adventures/getAdventuresTypes";
import { IAdventure } from "../../pages/adventures/IAdventure";
import getFilterAdventuresService from "../../api/adventures/getFilterAdventures.ts/getFilterAdventuresService";

export const defaultFilterAdventure: IAdventure[] = [];

const useGetFilterAdventures = ({
  header,
  filter,
}: GetFilterAdventuresProps) => {
  const [adventures, setAdventures] = useState<IAdventure[]>(
    defaultFilterAdventure
  );
  const isLoading = useRef(true);
  useEffect(() => {
    if (isLoading.current) {
      getFilterAdventuresService({ header, filter })
        .then((adventures) => {
          isLoading.current = false;
          setAdventures(adventures!);
        })
        .catch((res) => {
          console.error(res.status);
        });
    }
  }, [header, filter, isLoading]);

  return [adventures];
};

export default useGetFilterAdventures;
