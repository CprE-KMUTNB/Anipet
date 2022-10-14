/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import MapView, {Marker, MarkerAnimated} from 'react-native-maps';
import React, {useState, useEffect, useRef, Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Button,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// Function to get permission for location
const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === 'granted') {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

const App = () => {
  const mapRef = useRef(null);
  const placesRef = useRef();
  const getAddress = () => {
    console.log(placesRef.current?.getAddressText());
  };
  const [position, setPosition] = useState({
    latitude: 15,
    longitude: 100,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  useEffect(() => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(pos => {
          const crd = pos.coords;
          setPosition({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        });
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        Region={position}
        showsUserLocation={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        coords={position}
        rotateEnabled={true}>
        <MarkerAnimated
          title="Yor are here"
          //  description='This is a description'
          coordinate={position}
        />
      </MapView>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          fetchDetails={true}
          styles={{textinput: styles.input}}
          placeholder="Search"
          query={{
            key: 'process.env.API',
            components: 'country:th',
            language: 'en', // language of the results
          }}
          onPress={(data, details = null) => {
            setPosition({
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            });
            console.log(JSON.stringify(details?.geometry?.location));
          }}
          onNotFound={() => console.log('no results')}
          ref={placesRef}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 65,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
  },
});

export default App;
