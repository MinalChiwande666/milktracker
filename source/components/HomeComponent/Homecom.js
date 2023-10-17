import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { statusget } from '../../store/slice/statusSlice'
import { borderRadius, colors, fontSize, marginHorizontal, responsiveHeight, responsiveWidth } from '../../styles/variables'
const Homecom = ({navigation}) => {
    const dispatch = useDispatch()
    const [showdrop, setshowdrop] = useState(false)
    const [returnstat, setreturn] = useState(false)
    const [databody, setdatabody] = useState({})
    const [id, setid] = useState()
    const [data, setdata] = useState([
        {
            id: 1,
            name: 'Minal',
            img: 'https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
            unit: 1,
            drop: false,
            qty:'Half',
            milktype: 'cow',
            return: false
        },
        {
            id: 2,
            name: 'ashish',
            img: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg',
            unit: 1,
            drop: false,
            qty:'Half',
            milktype: 'Buffaloo',
            return: false
        },
        {
            id: 3,
            name: 'yugandhara',
            img: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg',
            unit: 1,
            drop: false,
            qty:'Half',
            milktype: 'cow',
            return: false
        }
    ])
useEffect(()=>{

},[returnstat])
    return (
        <View style={style.homecon}>

            <View style={style.headarrow}>
                <TouchableOpacity onPress={()=>navigation.navigate('Track')} style={style.arrowbtn}>
                    <Text style={style.arrowtxt}>Track</Text>
                    <MaterialCommunityIcons
                        name="arrow-right"
                        color={"black"}
                        size={24}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{  flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                {
                    data.map((item, i) => {
                        return (
                            <>
                                <TouchableOpacity

                                    onPress={() => {
                                        setid(i)
                                        setshowdrop(!showdrop)
                                    }}
                                    key={i} style={style.dropbtn}>
                                    <View style={style.profilecon}>
                                        <Image source={{ uri: item.img }} style={style.profileimg} />

                                        <Text>{item.name}</Text>

                                    </View>
                                    <View>
                                        <View>
                                            <MaterialCommunityIcons
                                                name="arrow-down-drop-circle-outline"
                                                size={24}
                                                color={"black"}
                                            />
                                        </View>
                                    </View>

                                </TouchableOpacity>
                                {id === i && showdrop ?
                                    <View style={[style.detaledcon]}>
                                        <View style={style.unitbox}>
                                            <Text style={style.unittxt}>
                                                Type:
                                            </Text>
                                            <Text>{item.unit}</Text>
                                            <View style={{ width: 10, height: 10, backgroundColor: item.return === true?'green':'red', borderRadius: 50 }}>

                                            </View>
                                        </View>
                                        <View style={style.typecon}>
                                            <Text style={style.milktype}>Milk Type:</Text>
                                            <Text style={style.type}>{item.milktype}</Text>
                                        </View>
                                        <View style={style.qtycon}>
                                            <Text style={style.qtytxt}>Quantity:</Text>
                                            <Text style={style.qtytxt2}>{item.qty}</Text>
                                        </View>
                                        <View style={style.returnstat}>
                                            <Text style={style.returnstattxt}>Return Status</Text>
                                            <View style={style.returnstatbtn}>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                            item.return = true
                                                            setreturn(item.return)
                                                            dispatch(statusget.actions.setstatus({id:i,activestatus:true}))
                                                    }}
                                                    style={style.returnbtn}>
                                                    <Text style={{ color: 'white' }}>Yes</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                 onPress={() => {
                                                    item.return = false
                                                    setreturn(item.return)
                                                   
                                            }}
                                                style={style.returnbtn2}>
                                                    <Text style={{ color: 'white' }}>No</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View> : null}
                            </>
                        )
                    })

                }

            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    homecon: {

        flex: 1,
        backgroundColor: 'white',

    },
    headarrow: {
      
        width: responsiveWidth(90),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    arrow: {
        color: 'black',
        fontSize: 30
    },
    arrowtxt: {
        color: 'black',
        fontSize: fontSize.normal
    },
    arrowbtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileimg: {
        width: responsiveWidth(10),
        height: responsiveHeight(5),
        borderRadius: borderRadius.L150,
        marginHorizontal:marginHorizontal.semiSmall

    },
    dropbtn: {
        width: responsiveWidth(90),
        marginVertical: responsiveHeight(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    profilecon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveHeight(2),
    },
    detaledcon: {
        width: responsiveWidth(90)
    },
    unitbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    unittxt:{
        color:colors.black,
        fontSize:fontSize.small
    },
    milktype:{
        color:colors.black,
        fontWeight:'700'
    },
    type:{
        color:colors.black,
        marginHorizontal:responsiveWidth(1)
    },
    typecon:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    returnstat:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    returnstatbtn:{
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    returnbtn:{
        backgroundColor: 'green', 
        flexDirection: 'row',
         justifyContent: 'center', 
         alignItems: 'center', 
         marginHorizontal: responsiveWidth(2), 
         paddingHorizontal: responsiveHeight(2)
    },
    returnbtn2:{
        backgroundColor: colors.red, 
        flexDirection: 'row',
         justifyContent: 'center', 
         alignItems: 'center', 
         marginHorizontal: responsiveWidth(2), 
         paddingHorizontal: responsiveHeight(2)
    },
    returnstattxt:{
        color:colors.black,
        fontWeight:'700'
    },
    qtycon:{
        flexDirection:'row',
        alignItems:'center',

    },
    qtytxt:{
        color:colors.black,
        fontWeight:'700'
    },
    qtytxt2:{
        color:colors.black,
        marginHorizontal:responsiveWidth(1)
    }

})
export default Homecom