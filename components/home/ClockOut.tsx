import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react'

const ClockOut = () => {
  return (
    <View style={styles.container}>
      <Text>Clock out</Text>
      <Text>18.00</Text>
    </View>
  )
}

export default memo(ClockOut)

const styles = StyleSheet.create({
  container:{
    paddingVertical:16,
    paddingHorizontal:32,
    borderRadius:8,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    width:170
  }
})