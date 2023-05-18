import { View, Text, Image } from 'react-native';
import { SIZES, SHADOWS, COLORS } from '../constants/theme';
import assets from '../constants/assets';

export const NFTTitle = ({ title, titleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <EndDate />
    </View>
  );
};