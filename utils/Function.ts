import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async ({key, value} : any) => {
    try {
      if (typeof value === 'object') {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        return true;
      } else {
        await AsyncStorage.setItem(key, value);
        return true;
      }
    } catch (e) {
      return false;
    }
  };
  
  export const getItem = async (key : any ) => {
    try {
      if (typeof value === 'object') {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } else {
        const value = await AsyncStorage.getItem(key);
        return value ? value : null;
      }
    } catch (e) {
      console.log('AsyncStorage getting error', e);
    }
  }