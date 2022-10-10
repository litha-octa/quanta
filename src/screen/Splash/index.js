import React , {useEffect}from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {SplashImg} from '../../assets/img'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.body}>
      <Image source={SplashImg} alt='logo' style={styles.img}/>
    </View>
  );
};
const styles =StyleSheet.create({
  body : {
    width:'100%',
    height:'100%',
    padding: 5,
    backgroundColor:'#E62129',
  },
  img:{
    marginTop:'25%',
    marginHorizontal:'10%',
    resizeMode:'contain',
    width:'80%',
    height:'50%'
  }
})
export default Splash;
