import React from 'react'
import {View, Button, Text} from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'black',fontSize:30,marginBottom:20}}>Home Screen</Text>
      {/* <Text>........</Text> */}
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  )
}

export default Home;