// // import { addAdventureEndpoint as endpoint } from "../apiEndpointsAdventures";
// // import { AddAdventureProps } from "../getAdventuresTypes";

// // const addLeadsAPI = async ({ header, adventure }: AddAdventureProps) => {
// //   return fetch(endpoint(), {
// //     method: "POST",
// //     headers: header,
// //     body: JSON.stringify({
// //       ...adventure,
// //     }),
// //   }).then((response) => {
// //     if (response.ok) {
// //       return response.json();
// //     }
// //     return Promise.reject(response);
// //   });
// // };

// // export default addLeadsAPI;


// import React, { useEffect, useState, useCallback } from "react";
// import styled from "@emotion/styled";
// import { Form } from "react-final-form";
// import { setIn } from "final-form";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   TextField as MuiRffTextField,
//   Autocomplete,
//   showErrorOnBlur,
//   Switches,
// } from "mui-rff";
// import * as yup from "yup";
// import { useTranslation } from "react-i18next";
// import BcsSnackbar from "../../../components/snackbar/BcsSnackbar";
// import ConfirmationDialogBox from "../../../shared/common/ConfirmationDialogBox";
// import {
//   Grid,
//   Stack,
//   Button,
//   Typography,
//   Tooltip,
//   Chip as MuiChip,
//   CircularProgress,
//   Paper,
// } from "@mui/material";
// import SelectActivitySortOrder from "./SelectActivitySortOrder";
// import { spacing } from "@mui/system";
// import { isEqual } from "lodash";
// import useAmplifyCognitoAuth from "../../../hooks/useAmplifyCognitoAuth";
// import { ADD, DAYJS_FORMAT, DAYJS_DISPLAY_FORMAT } from "../../../constants";
// import { IActivityForm } from "../IActivity";
// import { TextField as ActivityDateTime } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs, { Dayjs } from "dayjs";
// import utc from "dayjs/plugin/utc";
// import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
// import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
// import IconButton from "@mui/material/IconButton";
// import { AutoFixHigh } from "@mui/icons-material";
// import { AIActivityTitleAPI } from "../AIAPIs";
// import { makeStyles } from "@mui/styles";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import DetailsRow from "../../../components/details/DetailsRow";
// import addActivityService from "../../../api/activity/addActivity/addActivityService";
// import editActivityService from "../../../api/activity/editActivity/editActivityService";
// import { adventureDetailsPath } from "../../../siteMap";
// import useGetAdventureDetails from "../../../hooks/adventures/useGetAdventureDetails";
// import useGetActivityTypes from "../../../hooks/activities/useGetActivityTypes";
// import ShareOnFacebookInstagram from "./ShareOnFacebookInstagram";
// import WatchVideo from "./WatchVideo";
// import SendMessageViaEmail from "./SendMessageViaEmail";
// import Information from "./Information";
// import AskQuestionInApp from "./AskQuestionInApp";
// import ShareOnTwitter from "./ShareOnTwitter";
// import BuyGiftCard from "./BuyGiftCard";
// import SendMessageViaSMS from "./SendMessageViaSMS";
// import PlayTriviaGame from "./PlayTriviaGame";
// import HealthTracker from "./HealthTracker";
// import SendQuestionViaEmail from "./SendQuestionViaEmail";
// import Checklist from "./Checklist";
// import BulletedList from "./BulletedList";

// dayjs.extend(utc);
// dayjs.extend(isSameOrAfter);
// dayjs.extend(isSameOrBefore);

// const theme = createTheme({
//   spacing: 8,
// });

// const useStyles = makeStyles((theme: any) => ({
//   banner: {
//     backgroundColor: "#f8d7da",
//     color: "#721c24",
//     padding: theme.spacing(2),
//     marginBottom: theme.spacing(4),
//   },
//   warningMessage: {
//     fontWeight: "bold",
//   },
//   updateButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const Chip = styled(MuiChip)(spacing);
// const TextFieldSpacing = styled(MuiRffTextField)(spacing);
// const TextField = styled(TextFieldSpacing)<{ m?: number }>``;
// export interface AddActivityFormProps {
//   initialValues: IActivityForm;
// }

// export interface IWatchVideo {
//   videoId: string;
// }
// export interface ISendMessageViaEmail {
//   message: string;
//   subject: string;
// }
// export interface IBuyGiftCard {
//   cardValues: string;
// }

// const AddActivityForm = (props: AddActivityFormProps) => {
//   const { initialValues } = props;
//   const classes = useStyles();
//   const { header } = useAmplifyCognitoAuth();
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const location = useLocation() as any;
//   const pathName = location.pathname.split("/");
//   const { adventureId, activityId } = useParams();
//   const isAddEdit = pathName[pathName.length - 1] as string;
//   const [isDisable, setIsDisable] = useState(false);
//   const [selectedActivityType, setSelectedActivityType] = useState("");
//   const [liveStatus, setLiveStatus] = useState(initialValues.live);

//   const [repeatDailyStatus, setRepeatDailyStatus] = useState(
//     initialValues.repeatDaily
//   );
//   const [healthTrackerConfiguration, setHealthTrackerConfiguration] = useState(
//     initialValues.configuration
//   );

//   const [
//     sendQuestionViaEmailConfiguration,
//     setSendQuestionViaEmailConfiguration,
//   ] = useState(
//     JSON.stringify([
//       {
//         question: "",
//         answers: [],
//         correctAnswer: "",
//       },
//     ])
//   );
//   const [sendMessageViaSMSConfiguration, setSendMessageViaSMSConfiguration] =
//     useState(initialValues.configuration);
//   const [askQuestionInAppConfiguration, setAskQuestionInAppConfiguration] =
//     useState();
//   const [shareOnTwitterConfiguration, setShareOnTwitterConfiguration] =
//     useState();
//   const [
//     sendMessageViaEmailConfiguration,
//     setSendMessageViaEmailConfiguration,
//   ] = useState();
//   const [informationConfiguration, setInformationConfiguration] = useState();
//   const [checklistConfiguration, setChecklistConfiguration] = useState();
//   const [bulletedlistConfiguration, setBulletedlistConfiguration] = useState();

//   const [
//     shareOnFacebookInstagramConfiguration,
//     setShareOnFacebookInstagramConfiguration,
//   ] = useState(initialValues.configuration);

//   const [watchVideoConfiguration, setWatchVideoConfiguration] = useState(
//     initialValues.configuration
//   );

//   const [buyGiftCardConfiguration, setBuyGiftCardConfiguration] = useState(
//     initialValues.configuration
//   );
//   const [playTriviaGameConfiguration, setPlayTriviaGameConfiguration] =
//     useState(initialValues.configuration);

//   const [generateWithAIStatus, setGenerateWithAIStatus] = useState(
//     initialValues.generateWithAI
//   );

//   const isAdd = isAddEdit === ADD;
//   const isEdit = !isAdd;
//   const [snackbarResponse, setSnackbarResponse] = useState({
//     open: false,
//     message: "",
//   });
//   const [activityStartDate, setActivityStartDate] = useState<
//     string | undefined | null
//   >(initialValues.startDate);

//   const [activityEndDate, setActivityEndDate] = useState<
//     string | undefined | null
//   >(initialValues.endDate);
//   const [sortOrder, setSortOrder] = useState<number>(
//     initialValues.sortOrder as number
//   );
//   const [aiTitle, setAITitle] = useState<string | undefined>("");
//   const [loadingTitleAI, setLoadingTitleAI] = useState(false);
//   const [titleAI, setTitleAI] = useState<string[]>([]);

//   useEffect(() => {
//     setAITitle(initialValues.title);
//     setLiveStatus(initialValues.live);
//     setRepeatDailyStatus(initialValues.repeatDaily);
//     setActivityStartDate(initialValues.startDate);
//     setActivityEndDate(initialValues.endDate);
//     setGenerateWithAIStatus(initialValues.generateWithAI);
//   }, [initialValues]);

//   const [activityTypes] = useGetActivityTypes({
//     header: header,
//   });

//   const [adventureDetails] = useGetAdventureDetails({
//     adventureId: String(adventureId),
//     header: header,
//   });

//   const [dialogResponse, setDialogResponse] = useState({
//     open: false,
//     title: "",
//     message: "",
//     isView: false,
//     isSuccess: false,
//     isLoading: false,
//     isAdventure: false,
//   });

//   const addValidationSchema = yup.object({
//     title: yup
//       .string()
//       .trim()
//       .nullable()
//       .required(t("validation.titleRequired"))
//       .min(1, t("validation.titleMin"))
//       .max(100, t("validation.titleMax")),
//     activityType: yup
//       .string()
//       .trim()
//       .nullable()
//       .required(t("validation.activityTypeRequired")),
//     configuration: yup
//       .string()
//       .trim()
//       .nullable()
//       .required(t("validation.configurationRequired"))
//       .test("is-json", "Invalid JSON format", function (value) {
//         if (!value) return true; // Allow empty value
//         try {
//           JSON.parse(value);
//           return true;
//         } catch (error) {
//           return false;
//         }
//       }),
//     points: yup.number().min(1).required(t("validation.pointsRequired")),
//   });

//   const updateValidationSchema = yup.object({
//     title: yup
//       .string()
//       .trim()
//       .nullable()
//       .required(t("validation.titleRequired"))
//       .min(1, t("validation.titleMin"))
//       .max(100, t("validation.titleMax")),
//     activityType: yup
//       .string()
//       .trim()
//       .nullable()
//       .required(t("validation.activityTypeRequired")),
//     configuration: yup
//       .string()
//       .trim()
//       .nullable()
//       .required(t("validation.configurationRequired"))
//       .test("is-json", "Invalid JSON format", function (value) {
//         if (!value) return true; // Allow empty value
//         try {
//           JSON.parse(value);
//           return true;
//         } catch (error) {
//           return false;
//         }
//       }),
//     points: yup.number().min(1).required(t("validation.pointsRequired")),
//   });

//   // START HERE WITH INTEGRATING AI FOR ACTIVITY TITLE
//   const handleAITitleChange = async (title: string, form: any) => {
//     setAITitle(title);

//     // Update the field value and trigger validation
//     form.change("title", title);
//     form.resetFieldState("title");
//   };

//   const handleLiveStatusToggle = () => {
//     setLiveStatus(!liveStatus);
//   };

//   const callTitleAIAPI = useCallback(async () => {
//     setLoadingTitleAI(true); // Set loading state to true
//     const titleAIResponse = await AIActivityTitleAPI(
//       aiTitle,
//       adventureId,
//       header
//     );
//     setTitleAI(titleAIResponse);
//     setLoadingTitleAI(false); // Set loading state back to false
//   }, [aiTitle, header, adventureId]);

//   const onSubmit = async (activity: IActivityForm) => {
//     if (
//       activity.activityType === "shareOnInstagram" ||
//       activity.activityType === "shareOnFacebook"
//     ) {
//       activity.configuration = shareOnFacebookInstagramConfiguration as any;
//     }
//     if (activity.activityType === "watchVideo") {
//       activity.configuration = watchVideoConfiguration as any;
//     }
//     if (activity.activityType === "sendMessageViaSMS") {
//       activity.configuration = sendMessageViaSMSConfiguration as any;
//     }
//     if (activity.activityType === "sendMessageViaEmail") {
//       activity.configuration = sendMessageViaEmailConfiguration as any;
//     }
//     if (activity.activityType === "information") {
//       activity.configuration = informationConfiguration as any;
//     }
//     if (activity.activityType === "checklist") {
//       activity.configuration = checklistConfiguration as any;
//     }
//     if (activity.activityType === "bulletedList") {
//       activity.configuration = bulletedlistConfiguration as any;
//     }
//     if (activity.activityType === "shareOnTwitter") {
//       activity.configuration = shareOnTwitterConfiguration as any;
//     }
//     if (activity.activityType === "buyGiftCard") {
//       const createBuyGiftCardConfiguration = `{"cardValues" : [${buyGiftCardConfiguration}]}`;
//       activity.configuration = createBuyGiftCardConfiguration;
//     }
//     if (activity.activityType === "playTriviaGame") {
//       activity.configuration = playTriviaGameConfiguration as any;
//     }
//     if (activity.activityType === "healthTracker") {
//       activity.configuration = healthTrackerConfiguration as any;
//     }
//     if (activity.activityType === "askQuestionInApp") {
//       activity.configuration = askQuestionInAppConfiguration as any;
//     }
//     if (activity.activityType === "sendQuestionViaEmail") {
//       activity.configuration = sendQuestionViaEmailConfiguration as any;
//     }
//     setIsDisable(true);
//     let isStartDateNotValid = false;
//     let isEndDateNotValid = false;
//     let dateErrorMessage = "";

//     if (adventureDetails?.startDate && activityStartDate) {
//       // convert string browser (local) time to Dayjs with timezone offset: dayjs()
//       const _activityStartDateLocalWithTimezone = dayjs(activityStartDate);

//       // convert from string UTC (from API/DB) to Dayjs browser (local) time with timezone offset
//       const _adventureStartDateLocalWithTimezone = dayjs(
//         adventureDetails.startDate
//       );

//       isStartDateNotValid = !_activityStartDateLocalWithTimezone.isSameOrAfter(
//         _adventureStartDateLocalWithTimezone
//       );

//       if (isStartDateNotValid) {
//         dateErrorMessage = `Activity cannot start before the Adventure Start Date (${dayjs(
//           adventureDetails.startDate
//         ).format(DAYJS_DISPLAY_FORMAT)}).`;
//       }
//     }

//     if (adventureDetails?.endDate && activityEndDate) {
//       // convert string browser (local) time to Dayjs with timezone offset: dayjs()
//       const _activityEndDateLocalWithTimezone = dayjs(activityEndDate);

//       // convert from string UTC (from API/DB) to Dayjs browser (local) time with timezone offset
//       const _adventureEndDateLocalWithTimezone = dayjs(
//         adventureDetails.endDate
//       );

//       isEndDateNotValid = !_activityEndDateLocalWithTimezone.isSameOrBefore(
//         _adventureEndDateLocalWithTimezone
//       );

//       if (isEndDateNotValid) {
//         dateErrorMessage = `Activity cannot end after the Adventure End Date (${dayjs(
//           adventureDetails.endDate
//         ).format(DAYJS_DISPLAY_FORMAT)}).`;
//       }
//     }

//     if (
//       repeatDailyStatus &&
//       activityStartDate === null &&
//       activityEndDate === null
//     ) {
//       // Handle the case when the start date is not valid
//       setIsDisable(false);
//       setDialogResponse({
//         open: true,
//         title: "Validation Error",
//         message: "Either Start Date and/or End Date should not be empty.",
//         isView: false,
//         isSuccess: false,
//         isLoading: false,
//         isAdventure: false,
//       });
//     } else if (isStartDateNotValid || isEndDateNotValid) {
//       if (isStartDateNotValid && isEndDateNotValid) {
//         const _adventureStartDate: string =
//           adventureDetails && adventureDetails.startDate
//             ? adventureDetails.startDate
//             : "";
//         const _adventureEndDate: string =
//           adventureDetails && adventureDetails.endDate
//             ? adventureDetails.endDate
//             : "";
//         dateErrorMessage = `Activity cannot start before the Adventure Start Date (${dayjs(
//           _adventureStartDate
//         ).format(
//           DAYJS_DISPLAY_FORMAT
//         )}) and Activity cannot end after the Adventure End Date (${dayjs(
//           _adventureEndDate
//         ).format(DAYJS_DISPLAY_FORMAT)}).`;
//       }
//       // Handle the case when the start date is not valid
//       setIsDisable(false);
//       setDialogResponse({
//         open: true,
//         title: "Apologies, an unexpected error occurred. Please try again!",
//         message: dateErrorMessage,
//         isView: false,
//         isSuccess: false,
//         isLoading: false,
//         isAdventure: false,
//       });
//     } else {
//       if (isAdd) {
//         upsertActivity(activity);
//       } else if (isEdit && isEqual(activity, initialValues)) {
//         if (
//           !isEqual(activityStartDate, initialValues.startDate) ||
//           !isEqual(activityEndDate, initialValues.endDate) ||
//           !isEqual(aiTitle, initialValues.title) ||
//           !isEqual(sortOrder, initialValues.sortOrder)
//         ) {
//           upsertActivity(activity);
//         } else {
//           setIsDisable(false);
//           setDialogResponse({
//             open: true,
//             title: "No changes to update",
//             message: "Please make changes to the Activity before saving.",
//             isView: false,
//             isSuccess: false,
//             isLoading: false,
//             isAdventure: false,
//           });
//         }
//       } else if (isEdit && !isEqual(activity, initialValues)) {
//         upsertActivity(activity);
//       }
//     }
//   };

//   const upsertActivity = async (activityProp: IActivityForm) => {
//     let activity: IActivityForm = {
//       title: aiTitle!,
//       activityType: activityProp.activityType,
//       points: activityProp.points,
//       live: liveStatus,
//       configuration: activityProp.configuration,
//       repeatDaily: repeatDailyStatus,
//       sortOrder: sortOrder,
//     };

//     if (activityStartDate) {
//       // add timezone offset to browser (local) time
//       const _activityStartDateLocalWithTimezone = dayjs(activityStartDate);
//       // convert to UTC with timezone offset
//       const _activityStartDateUTCWithTimezone = dayjs
//         .utc(_activityStartDateLocalWithTimezone)
//         .format();
//       activity.startDate = _activityStartDateUTCWithTimezone;
//     }
//     if (activityEndDate) {
//       // add timezone offset to browser (local) time
//       const _activityEndDateLocalWithTimezone = dayjs(activityEndDate);
//       // convert to UTC with timezone offset
//       const _activityEndDateUTCWithTimezone = dayjs
//         .utc(_activityEndDateLocalWithTimezone)
//         .format();
//       activity.endDate = _activityEndDateUTCWithTimezone;
//     }
//     if (!repeatDailyStatus) {
//       activity.generateWithAI = false;
//     } else {
//       activity.generateWithAI = generateWithAIStatus;
//     }

//     if (isAdd) {
//       await callAddActivityAPI(activity);
//       return;
//     }
//     if (isEdit) {
//       await callEditActivityAPI(activity);
//       return;
//     }
//   };

//   const navigateToAdventureDetails = (message: string) => {
//     navigate(adventureDetailsPath(adventureId!), {
//       state: message,
//     });
//   };

//   const callAddActivityAPI = async (activity: IActivityForm) => {
//     addActivityService({ header, activity, adventureId })
//       .then((newActivity) => {
//         navigateToAdventureDetails(
//           `Activity added successfully: ${newActivity.title}`
//         );
//       })
//       .catch((response) => {
//         showErrorDialogBox({
//           title: t("error.generic"),
//           message: `Unable to Add Activity. ${response.statusText} (http status: ${response.status})`,
//         });
//       });
//   };

//   const callEditActivityAPI = async (activity: IActivityForm) => {
//     editActivityService({ header, activity, adventureId, activityId })
//       .then(() => {
//         navigateToAdventureDetails(
//           `Activity updated successfully. Editing Repeat daily, Start Date or End Date of a Repeat Daily Activity can result in an incorrect number of points being calculated for the Adventure. It is strongly recommended that you do not edit Repeat daily, Start Date or End Date.`
//         );
//       })
//       .catch((response) => {
//         showErrorDialogBox({
//           title: t("error.generic"),
//           message: `Unable to Update Activity. ${response.statusText} (http status: ${response.status})`,
//         });
//       });
//   };

//   const showErrorDialogBox = ({
//     title,
//     message,
//   }: {
//     title: string;
//     message: string;
//   }) => {
//     setIsDisable(false);
//     setDialogResponse({
//       open: true,
//       title: title,
//       message: message,
//       isView: false,
//       isSuccess: false,
//       isLoading: false,
//       isAdventure: false,
//     });
//   };

//   // To be passed to React Final Form
//   const validateFormValues = (schema: any) => async (values: any) => {
//     if (typeof schema === "function") {
//       schema = schema();
//     }
//     try {
//       await schema.validate(values, { abortEarly: false });
//     } catch (err: any) {
//       const errors = err.inner.reduce((formError: any, innerError: any) => {
//         return setIn(formError, innerError.path, innerError.message);
//       }, {}) as any;

//       return errors;
//     }
//   };

//   const addValidate = validateFormValues(addValidationSchema);

//   const updateValidate = validateFormValues(updateValidationSchema);

//   const handleTitleChange = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setAITitle(event.target.value);
//   };

//   const handleActivityType = async (activityType: string) => {
//     setSelectedActivityType(activityType);
//   };

//   /**
//    * Update activityStartDate when the user changes the value in the UI.
//    * @param newStartDate Date/Time selected by user with timezone information
//    */
//   const handleActivityStartDateChange = (newStartDate: Dayjs | null) => {
//     if (newStartDate) {
//       // activityStartDate is set to a string with the browser's current time, but does not retain timezone information
//       setActivityStartDate(newStartDate?.format(DAYJS_FORMAT));
//     }
//   };

//   const handleActivityEndDateChange = (newEndDate: Dayjs | null) => {
//     if (newEndDate) {
//       // activityEndDate is set to a string with the browser's current time, but does not retain timezone information
//       setActivityEndDate(newEndDate?.format(DAYJS_FORMAT));
//     }
//   };

//   const handleRepeatDailyStatus = (event: any) => {
//     setRepeatDailyStatus(event.target.checked);
//   };

//   const handleGenerateWithAIStatus = (event: any) => {
//     setGenerateWithAIStatus(event.target.checked);
//   };

//   let component: any;
//   switch (selectedActivityType) {
//     case "shareOnInstagram":
//     case "shareOnFacebook":
//       component = (
//         <ShareOnFacebookInstagram
//           configuration={shareOnFacebookInstagramConfiguration}
//           setConfiguration={setShareOnFacebookInstagramConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "watchVideo":
//       component = (
//         <WatchVideo
//           configuration={watchVideoConfiguration}
//           setConfiguration={setWatchVideoConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "sendMessageViaEmail":
//       component = (
//         <SendMessageViaEmail
//           configuration={sendMessageViaEmailConfiguration}
//           setConfiguration={setSendMessageViaEmailConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "information":
//       component = (
//         <Information
//           configuration={informationConfiguration}
//           setConfiguration={setInformationConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "checklist":
//       component = (
//         <Checklist
//           configuration={checklistConfiguration}
//           setConfiguration={setChecklistConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "bulletedList":
//       component = (
//         <BulletedList
//           configuration={bulletedlistConfiguration}
//           setConfiguration={setBulletedlistConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "askQuestionInApp":
//       component = (
//         <AskQuestionInApp
//           configuration={askQuestionInAppConfiguration}
//           setConfiguration={setAskQuestionInAppConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "shareOnTwitter":
//       component = (
//         <ShareOnTwitter
//           configuration={shareOnTwitterConfiguration}
//           setConfiguration={setShareOnTwitterConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "buyGiftCard":
//       component = (
//         <BuyGiftCard
//           configuration={buyGiftCardConfiguration}
//           setConfiguration={setBuyGiftCardConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "playTriviaGame":
//       component = (
//         <PlayTriviaGame
//           configuration={playTriviaGameConfiguration}
//           setConfiguration={setPlayTriviaGameConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "sendMessageViaSMS":
//       component = (
//         <SendMessageViaSMS
//           configuration={sendMessageViaSMSConfiguration}
//           setConfiguration={setSendMessageViaSMSConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "healthTracker":
//       component = (
//         <HealthTracker
//           configuration={healthTrackerConfiguration}
//           setConfiguration={setHealthTrackerConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     case "sendQuestionViaEmail":
//       component = (
//         <SendQuestionViaEmail
//           configuration={sendQuestionViaEmailConfiguration}
//           setConfiguration={setSendQuestionViaEmailConfiguration}
//           initialValues={initialValues.configuration!}
//           isEdit={isEdit}
//           selectedActivityType={selectedActivityType}
//           activityType={initialValues.activityType}
//         />
//       );
//       break;
//     default:
//       component = (
//         <Grid item xs={12}>
//           <Grid container spacing={2}>
//             <Grid item md={6} xs={12}>
//               <TextField
//                 id="configuration"
//                 name="configuration"
//                 placeholder="Configuration"
//                 label="Configuration"
//                 variant="outlined"
//                 multiline
//                 minRows={10}
//                 showError={showErrorOnBlur}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       );
//   }

//   return (
//     <Form
//       onSubmit={onSubmit}
//       initialValues={initialValues}
//       validate={isAdd ? addValidate : updateValidate}
//       render={({ handleSubmit, form, submitting, pristine, values }) => (
//         <form onSubmit={handleSubmit} noValidate>
//           <Grid container rowSpacing={3}>
//             <Grid item xs={9}>
//               <DetailsRow
//                 label={t("Adventure Title")}
//                 value={adventureDetails?.title}
//               />
//             </Grid>
//             {/* Column 1 with Form */}
//             <Grid item lg={8} md={8} sm={12} xs={12}>
//               <Grid container alignItems="center" rowSpacing={3}>
//                 {/* Conditional Row for Title AI */}
//                 {/* Use 2 separate if conditions to avoid an empty <Grid item> */}
//                 {loadingTitleAI && (
//                   <Grid item xs={11}>
//                     <CircularProgress size={30} />
//                   </Grid>
//                 )}
//                 {!loadingTitleAI && titleAI.length > 0 && (
//                   <Grid item xs={11}>
//                     {titleAI.map((title: any, index: any) => (
//                       <Chip
//                         key={index}
//                         label={title}
//                         onClick={() => handleAITitleChange(title, form)}
//                         m={1}
//                         variant="outlined"
//                       />
//                     ))}
//                   </Grid>
//                 )}

//                 {/* Row */}
//                 <Grid item xs={11}>
//                   <TextField
//                     id="title"
//                     name="title"
//                     label="Activity Title"
//                     placeholder="Activity Title"
//                     value={aiTitle}
//                     required={true}
//                     showError={showErrorOnBlur}
//                     onChangeCapture={handleTitleChange}
//                     size="small"
//                   />
//                 </Grid>
//                 <Grid item xs={1} pl={2}>
//                   <Tooltip
//                     title={[
//                       t(
//                         "Use Artificial Intelligence (AI) to generate ideas for the Activity Title"
//                       ),
//                     ].join("")}
//                   >
//                     <IconButton
//                       component="div"
//                       color="primary"
//                       aria-label={[
//                         t(
//                           "Use Artificial Intelligence (AI) to generate ideas for the Activity Title"
//                         ),
//                       ].join("")}
//                       onClick={callTitleAIAPI}
//                       disabled={aiTitle === ""}
//                     >
//                       <AutoFixHigh />
//                     </IconButton>
//                   </Tooltip>
//                 </Grid>

//                 {/* Row */}
//                 <Grid item xs={11}>
//                   <Autocomplete
//                     id="activityType"
//                     name="activityType"
//                     label={[t("Activity Type")].join("")}
//                     options={activityTypes}
//                     showError={showErrorOnBlur}
//                     onInputChange={(event, value) => {
//                       handleActivityType(value);
//                     }}
//                     size="small"
//                   />
//                 </Grid>

//                 {/* Row */}
//                 <Grid item xs={11}>
//                   <TextField
//                     id="points"
//                     name="points"
//                     placeholder="Points"
//                     label="Points"
//                     variant="outlined"
//                     type="number"
//                     disabled={
//                       isEdit && initialValues.repeatDaily ? true : false
//                     }
//                     showError={showErrorOnBlur}
//                     size="small"
//                   />
//                 </Grid>

//                 {/* Row */}
//                 <Grid item xs={11}>
//                   <SelectActivitySortOrder
//                     sortOrder={sortOrder}
//                     setSortOrder={setSortOrder}
//                     initialValues={initialValues.sortOrder!}
//                     isEdit={isEdit}
//                   />
//                 </Grid>
//                 {/* Row */}
//                 <Grid item lg={11} md={11} sm={11} xs={11}>
//                   <Switches
//                     checked={liveStatus}
//                     name="liveStatus"
//                     data={{ label: "Live", value: liveStatus }}
//                     onChangeCapture={handleLiveStatusToggle}
//                     size="small"
//                     formControlLabelProps={{ sx: { marginLeft: "-4px" } }}
//                   />
//                 </Grid>
//                 {/* Row */}

//                 <Grid item xs={11}>
//                   <Switches
//                     checked={repeatDailyStatus!}
//                     name="repeatDailyStatus"
//                     data={{ label: "Repeat daily", value: repeatDailyStatus }}
//                     onChangeCapture={handleRepeatDailyStatus}
//                     size="small"
//                     formControlLabelProps={{ sx: { marginLeft: "-4px" } }}
//                     disabled={
//                       isEdit && initialValues.repeatDaily ? true : false
//                     }
//                   />
//                 </Grid>

//                 {/* Conditional Row to show Start Date and End Date if Repeat Daily = True */}
//                 {repeatDailyStatus && (
//                   <Grid item xs={11}>
//                     <Switches
//                       checked={generateWithAIStatus!}
//                       name="generateWithAIStatus"
//                       data={{
//                         label:
//                           "When repeating daily, dynamically generate the Title using AI",
//                         value: generateWithAIStatus,
//                       }}
//                       disabled={
//                         isEdit && initialValues.repeatDaily ? true : false
//                       }
//                       onChangeCapture={handleGenerateWithAIStatus}
//                       size="small"
//                       formControlLabelProps={{ sx: { marginLeft: "-4px" } }}
//                     />
//                   </Grid>
//                 )}

//                 <Grid item xs={12}>
//                   <Grid container spacing={2}>
//                     <Grid item md={3} xs={12}>
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <Stack spacing={3}>
//                           <DateTimePicker
//                             disablePast
//                             label={[t("Start Date & Time")].join("")}
//                             value={activityStartDate}
//                             disabled={
//                               isEdit && initialValues.repeatDaily ? true : false
//                             }
//                             onChange={handleActivityStartDateChange}
//                             renderInput={(params) => (
//                               <ActivityDateTime size="small" {...params} />
//                             )}
//                           />
//                         </Stack>
//                       </LocalizationProvider>
//                     </Grid>

//                     <Grid item md={3} xs={12}>
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <Stack spacing={3}>
//                           <DateTimePicker
//                             disablePast
//                             disabled={
//                               isEdit && initialValues.repeatDaily ? true : false
//                             }
//                             label={[t("End Date & Time")].join("")}
//                             value={activityEndDate}
//                             onChange={handleActivityEndDateChange}
//                             renderInput={(params: any) => (
//                               <ActivityDateTime size="small" {...params} />
//                             )}
//                           />
//                         </Stack>
//                       </LocalizationProvider>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 {component}
//               </Grid>
//             </Grid>

//             {isEdit && repeatDailyStatus && (
//               <Grid item xs={7}>
//                 <ThemeProvider theme={theme}>
//                   <Paper className={classes.banner}>
//                     <Typography className={classes.warningMessage}>
//                       Editing Repeat daily, Start Date, or End Date of a Repeat
//                       Daily Activity can result in an incorrect number of points
//                       being calculated for the Adventure. It is strongly
//                       recommended that you do not edit Repeat daily, Start Date,
//                       or End Date.
//                     </Typography>
//                   </Paper>
//                 </ThemeProvider>
//               </Grid>
//             )}
//             <Grid item xs={12}>
//               <Stack spacing={2} direction="row">
//                 <Button variant="contained" disabled={isDisable} type="submit">
//                   {[isAdd ? t("Add") : t("Update"), t("Activity")].join(" ")}
//                 </Button>
//               </Stack>
//             </Grid>
//           </Grid>
//           <BcsSnackbar
//             snackbarResponse={snackbarResponse}
//             setSnackbarResponse={setSnackbarResponse}
//           />
//           <ConfirmationDialogBox
//             dialogResponse={dialogResponse}
//             setDialogResponse={setDialogResponse}
//           />
//         </form>
//       )}
//     />
//   );
// };


// export default AddActivityForm;
