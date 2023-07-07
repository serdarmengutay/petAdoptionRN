import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import pets from "../../consts/pets";
const { height } = Dimensions.get("window");

const petCategories = [
  { name: "CATS", icon: "cat" },
  { name: "DOGS", icon: "dog" },
  { name: "BIRDS", icon: "ladybug" },
  { name: "BUNNIES", icon: "rabbit" },
];

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [filteredPets, setFilteredPets] = useState([]);

  const filterPet = (index) => {
    const currentPets = pets.filter(
      (item) => item?.pet?.toUpperCase() == petCategories[index].name
    )[0].pets;
    console.log(currentPets);
    setFilteredPets(currentPets);
  };
  useEffect(() => {
    filterPet(0);
  }, []);

  const Card = ({ pet, navigation }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailsScreen', pet)}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              source={pet.image}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
          <View style={styles.cardDetailsContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontWeight: "bold", color: COLORS.dark, fontSize: 20 }}
              >
                {pet?.name}
              </Text>
              <Icon name={pet?.gender} size={22} color={pet?.gender == 'gender-male' ? 'lightblue' : 'pink'}/>
            </View>
            <Text style={{fontSize: 12, marginTop: 5, color: COLORS.dark}}>{pet?.type}</Text>
            <Text style={{fontSize: 10, marginTop: 5, color: COLORS.grey}}>{pet?.age}</Text>
            <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center', }}>
                <Icon name="map-marker" size={18} color={COLORS.primary}/>
                <Text style={{fontSize: 12, marginLeft: 5, color: COLORS.grey}}>Distance: {pet?.distance} km</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon
          name="sort-variant"
          size={28}
          color={COLORS.dark}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text
          style={{ fontWeight: "bold", fontSize: 16, color: COLORS.primary }}
        >
          JANE GARY
        </Text>
        <Image
          source={require("../../assets/person.jpg")}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.searchInputContainer}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholder="Search pet to adopt"
              style={{ flex: 1 }}
              placeholderTextColor={COLORS.grey}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {petCategories.map((item, index) => (
              <View key={"pet" + index} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  
                  onPress={() => {
                    filterPet(index)
                    setSelectedCategoryIndex(index)}}
                  style={[
                    styles.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}
                >
                  <Icon
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredPets}
              renderItem={({ item }) => (
                <Card pet={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    minHeight: height,
    backgroundColor: COLORS.light,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryBtn: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
});
export default HomeScreen;
