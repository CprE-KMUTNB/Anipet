/* eslint-disable no-unused-vars */
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
  Image,
  Text,
  TouchableOpacity,
  Button,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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

const Map = ({navigation}) => {
  const [petStore, setpetStore] = useState([]);
  const [Hospital, setHospital] = useState([]);
  const [position, setPosition] = useState({
    latitude: 13.8191,
    longitude: 100.5143,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const [Search, setLocation] = useState({
    latitude: position.latitude,
    longitude: position.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const placesRef = useRef();
  useEffect(() => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        global.Geolocation.getCurrentPosition(pos => {
          const crd = pos.coords;
          setPosition({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
          setLocation({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        });
      }
    });
    const latitude = position.latitude; // you can update it with user's latitude & Longitude
    const longitude = position.longitude;
    let radMetter = 5 * 1000; // Search withing 2 KM radius
    const url1 =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      latitude +
      ',' +
      longitude +
      '&radius=' +
      radMetter +
      '&type=pet_store' +
      '&key=' +
      'AIzaSyDziN8yZ8H1h7yOLyxeRQyoySDMlWZXIJc';

    fetch(url1)
      .then(res => {
        return res.json();
      })
      .then(res => {
        var places = []; // This Array WIll contain locations received from google
        for (let googlePlace of res.results) {
          var place = {};
          var lat = googlePlace.geometry.location.lat;
          var lng = googlePlace.geometry.location.lng;
          var coordinate = {
            latitude: lat,
            longitude: lng,
          };

          var gallery = [];

          if (googlePlace.photos) {
            for (let photo of googlePlace.photos) {
              var photoUrl = url1.GooglePicBaseUrl + photo.photo_reference;
              gallery.push(photoUrl);
            }
          }

          place.placeTypes = googlePlace.types;
          place.coordinate = coordinate;
          place.placeId = googlePlace.place_id;
          place.placeName = googlePlace.name;
          place.gallery = gallery;

          places.push(place);
        }
        setpetStore(places);
        // Do your work here with places Array
      })
      .catch(error => {
        console.log(error);
      });
  }, [position.latitude, position.longitude]);

  useEffect(() => {
    const latitude = position.latitude; // you can update it with user's latitude & Longitude
    const longitude = position.longitude;
    let radMetter = 5 * 1000;
    const url2 =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      latitude +
      ',' +
      longitude +
      '&radius=' +
      radMetter +
      '&type=veterinary_care' +
      '&key=' +
      'AIzaSyDziN8yZ8H1h7yOLyxeRQyoySDMlWZXIJc';

    fetch(url2)
      .then(res => {
        return res.json();
      })
      .then(res => {
        var places = []; // This Array WIll contain locations received from google
        for (let googlePlace of res.results) {
          var place = {};
          var lat = googlePlace.geometry.location.lat;
          var lng = googlePlace.geometry.location.lng;
          var coordinate = {
            latitude: lat,
            longitude: lng,
          };

          var gallery = [];

          if (googlePlace.photos) {
            for (let photo of googlePlace.photos) {
              var photoUrl = url2.GooglePicBaseUrl + photo.photo_reference;
              gallery.push(photoUrl);
            }
          }

          place.placeTypes = googlePlace.types;
          place.coordinate = coordinate;
          place.placeId = googlePlace.place_id;
          place.placeName = googlePlace.name;
          place.gallery = gallery;

          places.push(place);
        }
        setHospital(places);
        // Do your work here with places Array
      })
      .catch(error => {
        console.log(error);
      });
  }, [position.latitude, position.longitude]);
  const [name, setName] = useState('you are here');
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={position}
        showsUserLocation={true}
        followsUserLocation={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        coords={position}
        rotateEnabled={true}>
        <MarkerAnimated title={name} coordinate={Search} />
        {petStore.map(point => (
          <Marker title={point.placeName} coordinate={point.coordinate}>
            <Image
              source={require('../assets/petshop.png')}
              style={styles.tinyLogo}
              resizeMode="contain"
            />
          </Marker>
        ))}
        {Hospital.map(point => (
          <Marker title={point.placeName} coordinate={point.coordinate}>
            <Image
              source={require('../assets/pethospital.png')}
              style={styles.tinyLogo}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>
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
            setName(data?.description);
            setLocation({
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            });
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
  tinyLogo: {
    width: 45,
    height: 45,
  },
});

export default Map;
