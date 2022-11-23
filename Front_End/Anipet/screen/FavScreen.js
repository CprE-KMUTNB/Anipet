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

const FavScreen = ({navigation}) => {
    const {info, userInfo,setfavData, userToken, getsfavorite, getFav} = useContext(AuthContext);
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [Find, setFind] = useState('');
    useEffect(() => {
        const filter = () => {
            getsfavorite(userInfo.username);
        };
        filter();
        return () => {
          };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[getsfavorite]);

    const ItemView = ({item}) => {
        if (getFav.success){
            return (
                <View style = {styles.itemWrapperStyle}>
                    <TouchableOpacity
                        // eslint-disable-next-line no-sequences
                        onPress={() =>{navigation.navigate('Cat'),info(item.petName);}}>
                        <Text style = {styles.itemStyle}>
                        {item.petName.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (
            <View style = {styles.itemWrapperStyle}>
                <Text style = {styles.itemStyle}>{item}</Text>
            </View>);
        }
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
                    <FlatList
                        data = {getFav.data}
                        keyExtractor = {(item,index) => index.toString()}
                        ItemSeparatorComponent = {ItemSeparatorView}
                        renderItem = {ItemView}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default FavScreen;

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
    textInputStyle1:{
        width:'100%',
        height:50,
        borderWidth:1,
        paddingLeft:20,
        margin:20,
        borderColor: 'white',
        borderRadius: 18,
        backgroundColor: '#FFABC4',
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
    button:{
        width:'20%',
        padding: 15,
        borderRadius:40,
        backgroundColor:'#87D38E',
        alignItems:'center',
        marginStart:280,
    },
    buttonRed:{
        width:'22%',
        padding: 15,
        borderRadius:40,
        backgroundColor:'#de1794',
        alignItems:'center',
        marginStart:280,
    },
    buttonText:{
        color:'white',
        fontSize:13,
        letterSpacing:1,
    },
    fromStyle:{
        fontSize:15,
        fontFamily:'ITIM-REGULAR',
        fontWeight:'bold',
        padding:7,
        color:'#white',
    },
    FromButtomStyle:{
        height:40,
        width:335,
        borderWidth:2,
        paddingLeft:55,
        marginLeft:30,
        borderColor: '#9DDDA4',
        borderRadius: 15,
        backgroundColor: '#CDF2C7',
    },
    fromcat: {
        marginLeft:-42,
        marginTop:-38,
        width: 42,
        height: 42,
      },
});
