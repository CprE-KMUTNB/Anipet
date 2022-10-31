/* eslint-disable prettier/prettier */
import React ,{useContext,useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const User = ({navigation}) => {
  const {userInfo, Delete} = useContext(AuthContext);
  const {logout, setResLogin} = useContext(AuthContext);
  const showConfirmDialog = () => {
    Alert.alert(
      'Are your sure?',
      'Are you sure you want to delete Accout?',
      [
        {
          text: 'Yes',
          onPress: () => {
            // eslint-disable-next-line no-sequences
            logout(),setResLogin(false),Delete();
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Setting has been closed.');
            setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
            style={styles.modalText}>Setting</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close Setting</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.cc]}
        onPress={() => setModalVisible(true)}
      >
                    <Image
                style={styles.settingStyle}
                source={require('../assets/fonts/PR/เฟือง.png')}
                resizeMode="stretch"
                />
      </Pressable>
          <Text style={styles.headderStyle}>Hello {userInfo.name}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.textStyle}>Name     : {userInfo.name}</Text>
          <Text style={styles.textStyle}>Pet          : {userInfo.pet}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Edit');}}
            style={styles.buttonOutline}>
            <Text style={styles.buttonText}>Edit Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // eslint-disable-next-line no-sequences
            onPress={() => {logout(),setResLogin(false);}}
            style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {showConfirmDialog();}}
            style={styles.buttonDelete}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      );
    };

export default User;

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#FFE0F3',
  },
  settingStyle:{
    marginStart:300,
    margin:10,
  },
  detailContainer:{
    width:'80%',
    justifyContent:'center',
    backgroundColor:'white',
    borderColor: '#e0ffec',
    borderWidth:4,
    padding:15,
    borderRadius:20,
  },
  textStyle:{
    margin:5,
    fontSize: 18,
    color: '#920059',
    fontFamily:'ITIM-REGULAR',
  },
  textInputStyle:{
    height:50,
    borderWidth:1,
    paddingLeft:20,
    margin:12,
    marginRight: 0,
    marginLeft: 0,
    borderColor: '#FFABC4',
    borderRadius: 25,
    backgroundColor: 'white',
  },
  headderStyle:{
    fontSize: 25,
    fontStyle: 'bold',
    margin: 10,
    color: '#D70505',
    fontFamily:'ITIM-REGULAR',
  },
  buttonContainer:{
    width:'70%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  buttonDelete:{
    width:'100%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#bc3a3a',
    alignItems:'center',
  },
  button:{
    width:'100%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#87D38E',
    alignItems:'center',
  },
  buttonOutline:{
    marginTop:10,
    width:'100%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#cfadff',
    alignItems:'center',
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    width: '95%',
    height:'80%',
    margin: 20,
    backgroundColor: '#FF7CA3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  cc: {
    width:80,
    marginLeft:-150,
  },
  buttonClose: {
    backgroundColor: '#FFE0F3',
  },
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize:20,
    marginBottom: 450,
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
});
