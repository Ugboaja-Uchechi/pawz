import { View, Text, Image, TextInput } from 'react-native';
import { SIZES, COLORS } from '../constants/theme';
import assets from '../constants/assets';

// Header

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
      }}
    >

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: SIZES.large,
            marginTop: 30,
            color: '#fff',
          }}
        >
          Let’s find a masterpiece Art
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader;