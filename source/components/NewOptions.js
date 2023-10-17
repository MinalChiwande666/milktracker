import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NewOptions = () => {

    const data = [
        {
            id:"123",
            title:"Get a Ride",
            image:'https://dictionary.cambridge.org/images/thumb/car_noun_001_02258.jpg?version=5.0.332',
            screen:'MapScreen'
        },
        {
            id:"463",
            title:"Order a Food",
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWWy1-IKUArf0vOKDfS7RUPuv0KMlFoYVkQ&usqp=CAU',
            screen:'EatsScreen'
        }
    ]
  return (
   <><FlatList
          data={data}
          horizontal
          renderItem={({ item }) => (
              <TouchableOpacity style={{ paddingHorizontal: 10, padding: 10, backgroundColor: 'lightgray', margin: 10 }}>
                  <Image source={{ uri: item.image }} style={{ width: 120, height: 120, resizeMode: 'contain' }} />
                  <Text style={{ marginTop: 12, fontWeight: '800' }}>{item.title}</Text>
                  <View style={{ marginVertical: 10, backgroundColor: 'black', width: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 100, padding: 10 }}>
                      <Text style={{ color: 'white', fontWeight: '900' }}>-></Text>
                  </View>
              </TouchableOpacity>
          )} />
         </>
  )
}

export default NewOptions