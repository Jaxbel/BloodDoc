import React from 'react'
import {  View } from 'react-native'
import BloodDoc from './BloodDoc.jsx'
import StyledText from "./StyledText.jsx";


const Main = () => {
  return (
    <View style={{marginTop:35, padding: 50}}>
      <StyledText big>Blood Doctor</StyledText>
      <BloodDoc/>
    </View>
  )
}

export default Main