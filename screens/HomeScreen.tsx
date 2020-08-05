import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType, ScrollView, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const SearchBar = ({ navigation }: any) => {
  return (
    <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
      <View style={{ position: 'relative', flex: 1 }}>
        <TextInput placeholder='What do you wan to eat?' style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
        <Image source={require('./../assets/icon/search.png')} style={{ position: 'absolute', top: 6, left: 12 }} />
      </View>
      <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Placeholder')}>
          <Image source={require('./../assets/icon/promo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GopayMenu = ({ image, name, navigation }: { image: ImageSourcePropType; name: React.ReactNode; navigation: any; }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 14 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Placeholder')}>
        <Image source={image} />
      </TouchableOpacity>
      <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}>{name}</Text>
    </View>
  );
};

const GoPayHeader = ({ navigation }: any) => {
  return (
    <View style={{ marginHorizontal: 17, marginTop: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#244b94', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 15 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>GOPAY</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Rp. 10.000.000</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: '#285cb3', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
        <GopayMenu name='Pay' image={require('./../assets/icon/pay.png')} navigation={navigation} />
        <GopayMenu name='Nearby' image={require('./../assets/icon/nearby.png')} navigation={navigation} />
        <GopayMenu name='Top Up' image={require('./../assets/icon/topup.png')} navigation={navigation} />
        <GopayMenu name='More' image={require('./../assets/icon/more.png')} navigation={navigation} />
      </View>
    </View>
  );
};

const GojekMenuTile = ({ source, title, navigation }: { source: ImageSourcePropType, title: String, navigation: any }) => {
  return (
    <View style={{ width: `${25}%`, alignItems: 'center' }}>
      <View style={{ backgroundColor: 'white', height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchDriver')}>
          <Image source={source} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6 }}>{title}</Text>
    </View>
  );
};

const GojekMenu = ({ navigation }: any) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18 }}>
      <View style={{ flexDirection: 'row', marginBottom: 18 }}>
        <GojekMenuTile source={require('./../assets/icon/go-ride.png')} title='GO-RIDE' navigation={navigation} />
        <GojekMenuTile source={require('./../assets/icon/go-car.png')} title='GO-CAR' navigation={navigation} />
        <GojekMenuTile source={require('./../assets/icon/go-bluebird.png')} title='GO-BLUEBIRD' navigation={navigation} />
        <GojekMenuTile source={require('./../assets/icon/go-food.png')} title='GO-FOOD' navigation={navigation} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <GojekMenuTile source={require('./../assets/icon/go-send.png')} title='GO-SEND' navigation={navigation} />
        <GojekMenuTile source={require('./../assets/icon/go-deals.png')} title='GO-DEALS' navigation={navigation} />
        <GojekMenuTile source={require('./../assets/icon/go-pulsa.png')} title='GO-PULSA' navigation={navigation} />
        <GojekMenuTile source={require('./../assets/icon/go-more.png')} title='MORE' navigation={navigation} />
      </View>
    </View>
  );
};

const Divider = () => {
  return (
    <View style={{ height: 17, backgroundColor: 'lightgrey', marginTop: 20 }}></View>
  );
};

const FacebookSection = ({ navigation }: any) => {
  return (
    <View style={{ padding: 16, marginTop: -15 }}>
      <View style={{ height: 15, width: 60, marginTop: 16, marginLeft: -4 }}>
        <Image source={require('./../assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginBottom: 20 }}>Complete your profile</Text>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <View>
          <Image source={require('./../assets/dummy/facebook-connect.png')} />
        </View>
        <View style={{ marginLeft: 16, flex: 1 }}>
          <Text style={{ fontSize: 15, color: '#4a4a4a', fontWeight: 'bold' }}>Connect with Facebook</Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%' }}>Login faster without verification code</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Placeholder')} style={{ backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
      </TouchableOpacity>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16 }}></View>
    </View>

  );
};

const GoFoodBanner = ({ navigation }: any) => {
  return (
    <View style={{ padding: 16, paddingTop: 0 }}>
      <View style={{ position: 'relative' }}>
        <Image source={require('./../assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
        <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }}></View>
        <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
          <Image source={require('./../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free GO-FOOD vouchers</Text>
            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Quick, before they run!</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 12 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Placeholder')} style={{ backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'stretch', borderRadius: 4 }}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 20 }}></View>
    </View>

  );
};

const GoFoodTile = ({ source, title, navigation }: { source: ImageSourcePropType, title: String, navigation: any }) => {
  return (
    <View style={{ marginRight: 16 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Placeholder')}>
        <View style={{ width: 150, height: 150, borderRadius: 8, overflow: 'hidden' }}>
          <Image source={source} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
        </View>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>{title}</Text>
    </View>
  );
};

const NearbyGoFood = ({ navigation }: any) => {
  return (
    <View>
      <View style={{ height: 15, width: 60, marginLeft: 16 }}>
        <Image source={require('./../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c' }}>Nearby Restaurant</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Placeholder')}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
        <GoFoodTile source={require('./../assets/images/food_1.jpg')} title='Steak Andakar' navigation={navigation} />
        <GoFoodTile source={require('./../assets/images/food_2.jpg')} title='Mie Ayam Tumini' navigation={navigation} />
        <GoFoodTile source={require('./../assets/images/food_3.jpg')} title='Tengkleng Hohah' navigation={navigation} />
        <GoFoodTile source={require('./../assets/images/food_4.jpg')} title='Warung Steak' navigation={navigation} />
        <GoFoodTile source={require('./../assets/images/food_5.jpg')} title='Kindai Warung Banjar' navigation={navigation} />
      </ScrollView>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16, marginHorizontal: 16 }}></View>
    </View>
  );
};


const HomeScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <SearchBar navigation={navigation} />
          <GoPayHeader navigation={navigation} />
          <GojekMenu navigation={navigation} />
          <Divider />
          <FacebookSection navigation={navigation} />
          <GoFoodBanner navigation={navigation} />
          <NearbyGoFood navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
