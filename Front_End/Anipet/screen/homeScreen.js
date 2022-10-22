/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React ,{useState,useContext, useEffect} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  style,
  TextInput,
  StyleSheet,
  onPress,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Home = ({navigation}) => {
    const {search} = useContext(AuthContext);
    const [name, SetName] = useState(null);
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [Find, setFind] = useState('');
    useEffect(() => {
        fetchPosts();
        return () => {

        };
    },[]);

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setfilterData(responseJson);
            setmasterData(responseJson);
        }).catch((error) => {
            console.log(error);
        });
    };
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ?
                item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setFind(text);
        } else {
            setfilterData(masterData);
            setFind(text);
        }
    };

    const ItemView = ({item}) => {
        return (
            <Text style = {styles.itemStyle}>
                {item.name}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style = {{height:0.5,width:'100%',backgroundColor:'#FFE0F3'}}
            />
        );
    };

    return (
        <KeyboardAvoidingView style = {styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFE0F3',
                }}>
                <View>
                    <TextInput
                        style={styles.textInputStyle}
                        value={Find}
                        placeholder="Search Here"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => searchFilter(text)}
                    />
                    <FlatList
                        data = {filterData}
                        keyExtractor = {(item,index) => index.toString()}
                        ItemSeparatorComponent = {ItemSeparatorView}
                        renderItem = {ItemView}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemStyle:{
        fontSize:20,
        padding:15,
    },
    textInputStyle:{
        height:50,
        borderWidth:1,
        paddingLeft:20,
        margin:25,
        borderColor: 'white',
        borderRadius: 18,
        backgroundColor: '#FFABC4',
    },
});
