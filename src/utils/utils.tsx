import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGGEDIN_USER = '@Logged_In_User';

export const storeData = async (value: any) => {
  const jsonValue = JSON.stringify(value);
  console.log(value);
  console.log(jsonValue);
  await AsyncStorage.setItem(LOGGEDIN_USER, jsonValue);
};

export const getData = async () => {
  await AsyncStorage.getItem(LOGGEDIN_USER).then(jsonValue => {
    return jsonValue;
  });
};
