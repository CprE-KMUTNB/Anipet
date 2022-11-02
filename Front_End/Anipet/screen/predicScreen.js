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

const Predic = ({navigation}) => {
    const {search, predicAnimal, info, favorite, userInfo,setfavData} = useContext(AuthContext);
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [Find, setFind] = useState('');
    useEffect(() => {
        setfilterData(predicAnimal);
        setmasterData(predicAnimal);
    }, [predicAnimal]);
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
                    // eslint-disable-next-line no-sequences
                    onPress={() =>{navigation.navigate('Cat'),info(item.name),setfavData(true);}}>
                    <Text style = {styles.itemStyle}>
                    {item.name}</Text>
                </TouchableOpacity>
                <Text style = {styles.infoStyle}>
                this is a {item.type}
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
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('From');}}
                        style={styles.backStyle}>
                        <Image source={require('../assets/fonts/Register/กลับ.png')}/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInputStyle}
                        value={Find}
                        placeholder="Search Here                                                                     "
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

export default Predic;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemStyle:{
        width:'80%',
        fontSize:25,
        fontWeight:'bold',
        padding:15,
    },
    infoStyle:{
        fontSize:15,
        padding:15,
    },
    textInputStyle:{
        width:'80%',
        height:50,
        borderWidth:1,
        paddingLeft:20,
        margin:10,
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
      backStyle:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,
        marginLeft:140,
      },
});
