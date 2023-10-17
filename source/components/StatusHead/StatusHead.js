import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const StatusHead = () => {
  const statact = useSelector(state => { return state.status })
  const [data, setdata] = useState([
    {
      id: 1,
      name: 'Minal',
      img: 'https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',

    },
    {
      id: 2,
      name: 'ashish',
      img: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg',

    },
    {
      id: 3,
      name: 'yugandhara',
      img: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg',

    }
  ])
  return (
    <View style={style.head}>
      <View style={style.usercon}>
        <Image source={{ uri: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' }} style={{ width: 40, height: 40, borderRadius: 50, marginHorizontal: 10, marginVertical: 10 }} />
        <Text style={style.usertxt}>Employee</Text>
      </View>
      <View style={style.statuscon}>
        <View style={style.statusbox}>
          <ScrollView
            horizontal={true}
          >

            {
              data.map((item, i) => {
                return (
                  <>
                    <Image source={{ uri: item.img }} style={[style.profilepic, { borderColor: statact.id === i ? 'green' : null }]} />
                  </>
                )
              })
            }

          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  head: {
    backgroundColor: '#800000',
    borderBottomEndRadius: 70
  },
  usercon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  usertxt: {
    color: 'white',
    fontSize: 15,
  },
  txt: {
    color: 'white',
    fontSize: 24
  },
  statuscon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  statusbox: {
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  profilepic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 10,
    borderWidth: 3,

  }
})

export default StatusHead