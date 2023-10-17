import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import StatusHead from '../components/StatusHead/StatusHead'
import Homecom from '../components/HomeComponent/Homecom'
// import NewOptions from '../components/NewOptions'
// import MapView, { Marker, PROVIDER_GOOGLE, Polygon, Polyline } from 'react-native-maps'
// import MapViewDirections from 'react-native-maps-directions'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const Home = ({navigation}) => {
    return (


        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <SafeAreaView>
                    <StatusHead />
                </SafeAreaView>

                <Homecom navigation={navigation} />
            </View>
        </>

    )
}

export default Home