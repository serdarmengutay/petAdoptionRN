import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../consts/colors";

const DetailsScreen = ({ route, navigation }) => {
  const pet = route.params;

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{ height: 400, backgroundColor: COLORS.background }}>
        <ImageBackground
          style={{ height: 280, top: 20 }}
          resizeMode="contain"
          source={pet?.image}
        >
          <View style={styles.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={() => navigation.goBack()}
            />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={styles.detailsContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 20, color: COLORS.dark, fontWeight: "bold" }}
            >
              {pet?.name}
            </Text>
            <Icon name={pet?.gender} size={25} color={pet?.gender == 'gender-male' ? 'lightblue' : 'pink'}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
            <Text style={{fontSize: 12, color: COLORS.dark}}>
            {pet?.type}
            </Text>
            <Text style={{fontSize: 13, color: COLORS.dark}}>
            {pet?.age}
            </Text>
          </View>
          <View style={{marginTop: 5, flexDirection: 'row'}}> 
         <Icon name="map-marker" size={20} color={COLORS.primary}/>
         <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
            5 Bulvarna-Kudriavska Street, Kyiv
            </Text>
        </View>
        </View>
      </View>

      <View>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 20,
    marginHorizontal: 20,
    bottom: -60,
    elevation: 10,
    borderRadius: 18,
    justifyContent: "center",
  },
});
export default DetailsScreen;
