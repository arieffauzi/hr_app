import { StyleSheet, Text, View } from 'react-native'
import InformationMenu from './InformationMenu'
import { memo } from 'react'

const ProfileListMenu = () => {
  return (
    <View>
      <InformationMenu/>
    </View>
  )
}

export default memo(ProfileListMenu)

const styles = StyleSheet.create({})