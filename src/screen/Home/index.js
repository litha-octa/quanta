import React from "react";
import { View, Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import {
  LogoNav,
  ProfilePic,
  NotifIcon,
  Cekpos,
  Firm,
  KK,
  Linimasa,
  MSISDN,
  Nama,
  NIK,
  Transaksi,
} from "../../assets/img";


const Home = ({navigation}) => {
    return (
      <View>
        <View style={styles.navbar}>
          <Image source={ProfilePic} style={styles.ProfilePicNavbar} />
          <Image source={LogoNav} style={styles.imgNavbar} />
          <Image source={NotifIcon} style={styles.NotifNavbar} />
        </View>
        <View style={styles.container}>
          <Text>hei</Text>
          <TouchableOpacity>
            <Text>pindah</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "white",
    height: 'auto',
    paddingHorizontal:25,
    paddingVertical:10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    display:'flex',
    flexDirection:'row',
  },
  imgNavbar:{
    resizeMode:'contain',
    width : 150,
    height:80,
    marginLeft: 50,
  },
ProfilePicNavbar:{
    width:60,
    height:60,
    marginTop: 10,
},
NotifNavbar:{
    width:45,
    height:45,
    resizeMode:'contain',
    marginTop:10,
    marginLeft:50,
}

});
export default Home