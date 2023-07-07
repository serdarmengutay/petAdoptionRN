import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../consts/colors";

const DetailsScreen = ({ route, navigation }) => {
  const pet = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
            <Icon
              name={pet?.gender}
              size={25}
              color={pet?.gender == "gender-male" ? "lightblue" : "pink"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 12, color: COLORS.dark }}>
              {pet?.type}
            </Text>
            <Text style={{ fontSize: 13, color: COLORS.dark }}>{pet?.age}</Text>
          </View>
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <Icon name="map-marker" size={20} color={COLORS.primary} />
            <Text style={{ fontSize: 14, color: COLORS.grey, marginLeft: 5 }}>
              5 Bulvarna-Kudriavska Street, Kyiv
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 80, justifyContent: "space-between", flex: 1 }}>
        <View>
          <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
            <Image
              source={require("../../assets/person.jpg")}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <View style={{ flex: 1, paddingLeft: 10, height: 20 }}>
              <Text
                style={{ color: COLORS.dark, fontSize: 12, fontWeight: "bold" }}
              >
                JANE GARY
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 11,
                  fontWeight: "bold",
                  marginTop: 2,
                }}
              >
                Owner
              </Text>
            </View>
            <Text style={{ color: COLORS.grey, fontSize: 12 }}>
              May 25, 2020
            </Text>
          </View>
          <Text style={styles.comment}>
            My job requires moving to another country. I don't have the
            oppurtunity to take the cat with me. I am looking for good people wo
            will shelter my {pet?.name}.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <Icon name="heart-outline" color={COLORS.white} size={22} />
          </View>
          <View style={styles.btn}>
            <Text
              style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}
            >
              ADOPTION
            </Text>
          </View>
        </View>
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
  comment: {
    marginTop: 10,
    color: COLORS.dark,
    fontSize: 12.5,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DetailsScreen;
