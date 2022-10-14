import React, { useState } from "react";
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
  Outline,
} from "../../assets/img";
import {BottomSheet} from 'react-native-elements'


const Home = ({navigation}) => {
  const [visible, setVisible]= useState(false)
    return (
      <View>
        <View style={styles.navbar}>
          <Image source={ProfilePic} style={styles.ProfilePicNavbar} />
          <Image source={LogoNav} style={styles.imgNavbar} />
          <Image source={NotifIcon} style={styles.NotifNavbar} />
        </View>
        <View style={styles.container}>
          {/* CONTAINER
          FOR
          MAPS
          HERE */}
        </View>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={{
            marginTop: "50%",
            width: "100%",
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            backgroundColor: "white",
            height: 100,
            paddingTop: 10,
            // display: { visible == false? 'visible' :'none'},
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "roboto",
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            Fitur Quanta
          </Text>
        </TouchableOpacity>
        <BottomSheet
          isVisible={visible}
          style={{
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            backgroundColor: "white",
            width: "100%",
            height: 300,
            marginTop: "70%",
            display: "flex",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{
              marginTop: "0%",
              width: "100%",
              borderTopStartRadius: 25,
              borderTopEndRadius: 25,
              height: 40,
              paddingTop: 10,
            }}
          >
            <Image source={Outline} style={{width:100,marginHorizontal: 150,}}/>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "roboto",
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Fitur Quanta
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={Cekpos} style={styles.menuIcon} />
              <Image source={Nama} style={styles.menuIcon} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={KK} style={styles.menuIcon} />
              <Image source={NIK} style={styles.menuIcon} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={MSISDN} style={styles.menuIcon} />
              <Image source={Firm} style={styles.menuIcon} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={Transaksi} style={styles.menuIcon} />
              <Image source={Linimasa} style={styles.menuIcon} />
            </View>
          </View>
        </BottomSheet>
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
},
container:{
width:'100%',
backgroundColor:'red',
height:230,
},
menuIcon:{
  width:195,
  height:70,
  // marginTop:10,
  // resizeMode:'contain',
}

});
export default Home