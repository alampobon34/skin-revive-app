import { Dimensions } from "react-native";
export const COLORS = {
  bottomHover: "#83829A",
  yellow: "#F7D857",
  red: "#DA3A3A",
  green: "#65893F",
};

export const SIZES = {
  iconSize: 24,
  paddingLeft: 16,
  paddingRight: 16,
  paddingHorizontal: 16,

  marginLeft: 16,
  marginRight: 16,
  marginHorizontal: 16,
};

export const CATEGORIES = [
  { _id: "1", name: "Face" },
  { _id: "2", name: "Eyes" },
  { _id: "3", name: "Lips" },
  { _id: "4", name: "Ears" },
  { _id: "5", name: "Hands" },
  { _id: "6", name: "Feet" },
  { _id: "7", name: "Hair" },
  // { _id: "8", name: "V-Area" },
];

export const COROUSEL = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
];

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
