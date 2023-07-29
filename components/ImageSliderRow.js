import React from "react";
import { View, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import ImageSlider, { SLIDER_WIDTH, ITEM_WIDTH } from "./ImageSlider";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    title:
      "Aenean leo Aenean leo Aenean leoAenean leoAenean leoAenean leoAenean leoAenean leoAenean leoAenean leo",
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

const ImageSliderRow = () => {
  const isCarousel = React.useRef(null);
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={ImageSlider}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default ImageSliderRow;
