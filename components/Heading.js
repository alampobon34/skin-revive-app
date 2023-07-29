import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({title}) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    heading:{
        paddingVertical: 12
    },

    title:{
        fontFamily: 'bold',
        fontSize: 18,
    }
})