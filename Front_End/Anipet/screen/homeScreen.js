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
    const {search, animalsData, tradeData} = useContext(AuthContext);
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [Find, setFind] = useState('');

    useEffect(() => {
        const filter = () => {
            search('');
        };
        filter();
        return () => {
          };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(() => {
        setfilterData(animalsData);
        setmasterData(animalsData);
    }, [animalsData]);
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
            <View style = {styles.itemWrapperStyle}>
                <TouchableOpacity
                    onPress={() =>{navigation.navigate('Cat'),tradeData(item);}}>
                    <Text style = {styles.itemStyle}>
                    {item.name.toUpperCase()}</Text>
                </TouchableOpacity>
                <Text style = {styles.infoStyle}>
                {item.info}
                </Text>
            </View>
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
                        placeholder="Search Here                                                                             "
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
        fontSize:25,
        fontWeight:'bold',
        padding:15,
    },
    infoStyle:{
        fontSize:15,
        padding:15,
    },
    textInputStyle:{
        height:50,
        borderWidth:1,
        paddingLeft:20,
        margin:20,
        borderColor: 'white',
        borderRadius: 18,
        backgroundColor: '#FFABC4',
    },
    itemWrapperStyle:{
        borderBottomWidth: 1,
        paddingVertical: 8,
        borderColor: '#ccc',
        paddingHorizontal: 16,
    },
});
