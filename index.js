import { NativeModules } from 'react-native';

const { RNUUIDGenerator } = NativeModules;

export default {
  getRandomUUID(callback) {
    if (callback) {
      RNUUIDGenerator.getRandomUUID(callback);
    }
    else {
      return new Promise((resolve, reject) => {
        RNUUIDGenerator.getRandomUUID(resolve);
      });
    }
  }
};
