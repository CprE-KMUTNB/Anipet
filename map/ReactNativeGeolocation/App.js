/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import MapView from 'react-native-maps';
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// Function to get permission for location

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
  // state to hold location
  const [location, setLocation] = useState(false);
  // function to check permissions and get Location
  function getLocation() {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 15.870032,
          longitude: 100.992541,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          fetchDetails={true}
          styles={{textinput: styles.input}}
          placeholder="Search"
          query={{
            key: 'AIzaSyDziN8yZ8H1h7yOLyxeRQyoySDMlWZXIJc',
            components: 'country:th',
            language: 'en', // language of the results
          }}
          onPress={(data, details = null) => {
            console.log(JSON.stringify(details?.geometry?.location));
          }}
          onNotFound={() => console.log('no results')}
          ref={placesRef}
        />
      </View>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Go to my location" onPress={getLocation} />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
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
    top: 40,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
  },
});

export default App;
