import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, Keyboard } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Feather } from "@expo/vector-icons";

const SearchSection = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.header}>
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Where would you like to go?</Text>
      </View>
      <View style={styles.wrapperInput}>
        <Feather name="map-pin" size={18} color="#fda660" />
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Search for a destination"
        />
        <AntDesign name="search1" size={18} color="gray" />
      </View>
    </View>
  );
};

const Map = () => {
  const [mapViewStyle, setmapViewStyle] = React.useState(styles.mapview);

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setmapViewStyle(styles.mapviewKeyboardDidShow);
  };

  const _keyboardDidHide = () => {
    setmapViewStyle(styles.mapview);
  };

  const [initialRegion, setInitialRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [regionIsLoaded, setRegionIsLoaded] = React.useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: .01,
          longitudeDelta: .01,
        };
        setInitialRegion(region);
        setRegionIsLoaded(true);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  };

  React.useEffect(() => {
    getCurrentLocation();
  });

  return (
    <View
      style={mapViewStyle}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={regionIsLoaded ? undefined : initialRegion}
        followsUserLocation={true}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
        >
          <View
            style={{
              backgroundColor: "#EDE6EA",
              padding: 5,
              borderRadius: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#AAB6FB",
                padding: 5,
                borderRadius: 20,

                shadowColor: "#714B87",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
              }}
            >
              <LinearGradient
                style={styles.marker}
                colors={["#787FF6", "#7BD5F5"]}
              >
              </LinearGradient>
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};



const DriverSearchScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
      <SearchSection />
    </View>
  );
};

export default DriverSearchScreen;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    borderRadius: 50
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginLeft: 12, transform: [{ rotate: "-90deg" }] },
  headerBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  wrapperInput: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  inputText: {
    padding: 10,
    flex: 1,
  },
  mapview: {
    width: Dimensions.get("window").width,
    height: 600,
  },
  mapviewKeyboardDidShow: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  marker: {
    backgroundColor: "#6C4C86",
    padding: 10,

    borderRadius: 20,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    color: '#B066A4',
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  margin: {
    height: 1,
    backgroundColor: '#F0F1F2',
    width: '100%',
    marginVertical: 10,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginTop: 5,
  },
  buttonBooks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  goPayHeader: {
    backgroundColor: '#285cb3',
    // padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  scrollView: {
    flex: 1,
  },
});
