import { View, Image, StyleSheet } from 'react-native';
import { SIZES, SHADOWS, COLORS } from '../constants/theme';
import assets from '../constants/assets';
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
  return (
    <View style={{
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      backgroundColor: COLORS.white,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{
        width: "100%",
        height: 250,
      }}>
        <Image style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
          }} 
          source={data.image} 
          resizeMode="cover" 
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo countdown={data.countdown} />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle 
          title={data.name} 
          subTitle={data.creator}
          titleSize={SIZES.large} 
          subTitleSize={SIZES.small} 
        />
        <View style={{ 
          marginTop: SIZES.font, 
          flexDirection: "row", 
          justifyContent: "space-between",
          alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton 
            minWidth={120} 
            fontSize={SIZES.font} 
            handlePress={() => navigation.navigate("Details", { data })} 
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
})

export default NFTCard;