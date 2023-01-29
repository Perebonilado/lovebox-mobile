import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistData = async (value: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
    return true;
  } catch (e) {
    return false;
  }
};

export const getPersistedData = async (key: string):Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
    return null
  } catch (e) {
    return null
  }
};
