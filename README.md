# react-native-uuid-generator

A simple wrapper around the native iOS and Android UUID classes.
Exposes a single method, `getRandomUUID`.

![Example App Screen Capture](https://raw.githubusercontent.com/traviskn/react-native-uuid-generator/master/media/UUIDGenerator.gif)


## Getting started

`$ npm install react-native-uuid-generator --save`

`$ react-native link react-native-uuid-generator`


## Usage

This library supports both callback and promise interfaces.

```javascript
import UUIDGenerator from 'react-native-uuid-generator';

// Callback interface
UUIDGenerator.getRandomUUID((uuid) => {
  console.log(uuid);
});
// => "42A8A87A-F71C-446B-B81D-0CD16A709625"

// Promise interface
UUIDGenerator.getRandomUUID().then((uuid) => {
  console.log(uuid);
})
// => "BD6120BD-3612-4D56-8957-99F5D6F02C52"
```


## Manual installation

If the `react-native link` command doesn't work, you can also install
the native components of this library manually.

### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-uuid-generator` and add `RNUUIDGenerator.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNUUIDGenerator.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNUUIDGeneratorPackage;` to the imports at the top of the file
  - Add `new RNUUIDGeneratorPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  ```
    include ':react-native-uuid-generator'
    project(':react-native-uuid-generator').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-uuid-generator/android')
  ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  ```
    compile project(':react-native-uuid-generator')
  ```


## Example
Check out the example app included in the github repo to see the UUID Generator in action!
I assume you already have the react-native-cli installed, as well as the required iOS or Android dependencies.

```
git clone https://github.com/Traviskn/react-native-uuid-generator.git

cd react-native-uuid-generator/example
npm install
```

Use `react-native run-ios` or `react-native run-android` to run the example.
