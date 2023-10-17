import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import call from 'react-native-phone-call';
import { Linking } from 'react-native';
import { borderRadius, marginHorizontal, responsiveWidth } from '../../styles/variables';
const Bottomsheet = () => {
    const callsomeone = ()=>{
        // let number = '7414902472'

        // Linking.openURL(number).then((supported)=>{
        //     if(!supported)
        //     {
        //         console.log("not supported on your device")
        //     }
        // }).catch((err)=>{
        //     console.log("an eror occured =>",err)
        // })
        const args = {
            number: '7414902472',
            prompt: true,
          };
          
          call(args).catch(console.error);
    }
  return (
    <View style={style.btmsheetcon}>

     <View style={style.contactcon}>
         <Text style={{color:'black',fontSize:15,fontWeight:'700'}}>Contact Delivery Boy</Text>
         <TouchableOpacity onPress={()=>callsomeone()}>
         <MaterialCommunityIcons
         name="cellphone"
         size={24}
         color="black"
         />
         </TouchableOpacity>
     </View>

     <View style={style.contactcon}>
         <Text style={{color:'black',fontSize:15,fontWeight:'700'}}>Address</Text>
         <TouchableOpacity>
         <MaterialCommunityIcons
         name="map-marker"
         size={24}
         color="black"
         />
         </TouchableOpacity>
     </View>
    </View>
  )
}

const style = StyleSheet.create({
    btmsheetcon:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        // marginRight:responsiveWidth(30),
        borderTopLeftRadius:borderRadius.inputRadius,
        borderTopRightRadius:borderRadius.inputRadius,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    contactcon:{
        width:responsiveWidth(95),
        borderRightColor:'lightgray',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:responsiveWidth(2),
        padding:responsiveWidth(2)
    }
})

export default Bottomsheet