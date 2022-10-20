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
  Text,
  TouchableOpacity,
  Button,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import getDirections from 'react-native-google-maps-directions';
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

const App = () => {
  const [marker1, setMarker1] = useState([]);
  const [marker2, setMarker2] = useState([]);
  const [Search, setLocation] = useState({
    latitude: 15,
    longitude: 100,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const [position, setPosition] = useState({
    latitude: 15,
    longitude: 100,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const mapRef = useRef(null);
  const placesRef = useRef();
  useEffect(() => {
    const latitude = position.latitude; // you can update it with user's latitude & Longitude
    const longitude = position.longitude;
    let radMetter = 3 * 1000; // Search withing 2 KM radius
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
        setMarker1(places);
        // Do your work here with places Array
      })
      .catch(error => {
        console.log(error);
      });

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
          setLocation({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        });
      }
    });
  }, [position.latitude, position.longitude]);
  const [name, setName] = useState('you are here');
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
          title={name}
          //  description='This is a description'
          coordinate={Search}
        />
        {marker1.map(point => (
          <Marker
            title={point.placeName}
            coordinate={point.coordinate}
            image={require('./asset/map_marker.png')}
          />
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
});

export default App;