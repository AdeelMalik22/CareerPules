import React, { Children, ReactNode, useRef } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';

interface props {
    Children: ReactNode | any
    iconImage: any,
    iconStyle?: any,
    popoverBackground?: any,
    handleClick?: () => void,
    onClose: () => void,
    visible:boolean,
    handleIsVisible: () => void
    popoverStyle?: any
}
function CustomPopover({Children,visible,iconImage,iconStyle, popoverBackground, handleClick, onClose,handleIsVisible,popoverStyle}:props) {
    const popOverRef = useRef(null)
  return (
    <Popover
            backgroundStyle={popoverBackground}
            isVisible={visible}
            onRequestClose={onClose}
            ref={popOverRef}
            from={() => 
              <TouchableOpacity
                onPress={handleIsVisible}>
                <Image
                  source={iconImage}
                  style={iconStyle}
                />
              </TouchableOpacity>
            }>
            <View style={popoverStyle}>
              {/* <TouchableOpacity onPress={handleClick}> */}
                {Children}
              {/* </TouchableOpacity> */}
            </View>
          </Popover>
  )
}

export default CustomPopover

// const styles = StyleSheet.create({
//     popoverBackground:{
//         color: ""
//     }
// })