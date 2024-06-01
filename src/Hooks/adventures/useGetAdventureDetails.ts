import { useEffect, useState } from "react";
import { Header } from "../../contexts/AmplifyCognitoContext";
import { IAdventureVM } from "../../pages/adventures/IAdventure";
import getAdventureDetailsService from "../../api/adventures/getAdventureDetails/getAdventureDetailsService";

export const defaultAdventureDetails: IAdventureVM = {
  id: "",
  title: "",
  summary: "",
  image: "",
  imagePrompt: "",
  description: "",
  points: "",
  live: false,
  startDate: "",
  endDate: "",
  createdBy: "",
  createdOn: "",
  updatedBy: "",
  updatedOn: "",
  name: "",
  metaData: {},
  delete: false,
  stampExpirationDate: "",
  communities: [],
  allowCustomization: false,
  chatbotType: "",
  forceUpdate: 0,
  reminderId: "",
  memberId: "",
};

interface UseGetAdventureDetailsProps {
  adventureId: string;
  header: Header;
}

const useGetAdventureDetails = ({
  adventureId,
  header,
}: UseGetAdventureDetailsProps) => {
  const [adventureDetails, setAdventureDetails] = useState<IAdventureVM>(
    defaultAdventureDetails
  );

  useEffect(() => {
    // Only call getAdventureDetailsService() if we have not already fetched data from the API. This prevents unnecessary queries.
    if (adventureDetails.id === "") {
      getAdventureDetailsService({ header, adventureId })
        .then((adventureDetails) => {
          setAdventureDetails(
            adventureDetails ? adventureDetails : defaultAdventureDetails
          );
          return adventureDetails;
        })
        .catch((res) => {
          console.error(res.status);
        });
    }
  }, [adventureDetails, adventureId, header]);

  return [adventureDetails];
};

export default useGetAdventureDetails;
