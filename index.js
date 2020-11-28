import { NativeModules } from 'react-native';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const { RNUUIDGenerator } = NativeModules;

const web = {
  pino: 'test',
  getRandomUUID( callback ) {
    const uuid = uuidv4().toUpperCase()
    if ( callback ) {
      callback( uuid );
    }
    else {
      return new Promise( ( resolve, reject ) => {
        resolve( uuid )
      } );
    }
  }
}

const native = {
  getRandomUUID( callback ) {
    if ( callback ) {
      RNUUIDGenerator.getRandomUUID( callback );
    }
    else {
      return new Promise( ( resolve, reject ) => {
        RNUUIDGenerator.getRandomUUID( resolve );
      } );
    }
  }
}

const toExport = Platform.OS === 'web' ? web : native
export default toExport;
