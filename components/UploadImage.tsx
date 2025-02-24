import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { COLORS, FONT1REGULAR } from '../../constants'
// import Camera from '../../assets/svg/Camera.svg'
// import Photo from '../../assets/svg/photo.svg'
// import DotsH from '../../assets/svg/dotsH.svg'
// import CustomModal from '../CustomModal'

interface props {
    onPress?: any
    visible?: any
    imageType?: any
}
export default function UploadImage({
  onPress,
  visible,
  imageType
}:props) {
  return (
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <TouchableOpacity
          onPress={() => onPress(visible, imageType, 'camera')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: COLORS.darkBlack,
              fontFamily: FONT1REGULAR
            }}
          >
            {'Take photo or Video'}
          </Text>
          <Camera/>
        </TouchableOpacity>
        <View style={{ width: '90%', height: 2, backgroundColor: COLORS.borderColor, marginTop: 10, marginBottom: 20 }} />
        <TouchableOpacity
          onPress={() => onPress(visible, imageType, '')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: COLORS.darkBlack,
              fontFamily: FONT1REGULAR
            }}
          >
            {'Photo Library'}
          </Text>
          <Photo/>
        </TouchableOpacity>
        <View style={{ width: '90%', height: 2, backgroundColor: COLORS.borderColor, marginTop: 10, marginBottom: 20 }} />
        <TouchableOpacity
          onPress={() => onPress(visible, imageType, '')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: COLORS.darkBlack,
              fontFamily: FONT1REGULAR
            }}
          >
            {'Browse'}
          </Text>
          <DotsH/>
        </TouchableOpacity>
        <View style={{ width: '90%', height: 2, backgroundColor: COLORS.borderColor, marginTop: 10, marginBottom: 20 }} />
      </View>
    </CustomModal>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomColor: COLORS.lightgrey,
    borderBottomWidth: 1
  },
  hline: {
    width: '90%',
    height: 1,
    backgroundColor: COLORS.borderColor,
    marginTop: 10
  },
  rowBetween: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})