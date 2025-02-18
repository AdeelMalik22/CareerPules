import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../../utils/Colors';
import {Dropdown} from 'react-native-element-dropdown';

export default function JobPost() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  const data = [
    {label: 'Remote', value: 'remote'},
    {label: 'On Site', value: 'onsite'},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post a Job</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Job Category"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Requirement"
          placeholderTextColor="#888"
          // keyboardType="ascii-capable"
        />
      </View>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Position' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      {/* </View> */}

      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post Job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#111827',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: `${colors.gold}`,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    marginLeft: 10,
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: `${colors.gold}`,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // elevation: 3,
  },
  postButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: `${colors.black}`,
  },

  // DropDown Style
  // containerDropdown: {
  //   backgroundColor: 'white',
  //   padding: 16,
  // },
  dropdown: {
    height: 50,
    borderColor: `${colors.gold}`,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 30,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 20,
    color: '#888',
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
});
