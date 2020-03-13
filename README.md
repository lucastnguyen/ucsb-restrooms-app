### Continuous Integration (CI)

Each time a push is done on any git branch, the `CI Testing` github action will start which runs all tests against the current branch.

# UCSB Bathrooms
## Project Summary
### Description

UCSB Bathrooms, or UCSBB, is a mobile app that helps people on the UCSB campus locate the restrooms in the buildings closest to them.

### Additional Information

The app will help people who are currently on the UCSB campus. They will be able to use the built in map to locate nearby buildings as well as bathrooms within those buildings. Users will be able to see details of each bathroom such as room number, gender, and accessibility.

# Installation

### Prerequisites

Have a mobile device or a computer capable of running a mobile device simulator.

### Dependencies

react native maps

react native elements

firebase


### Installation Process

Install node.js from <https://nodejs.org/en/download/>, or use your favorite command line package manager (apt, pacman, homebrew, etc) to install npm.

```
git clone git@github.com:ucsb-cs48-w20/5pm-restroom.git

cd 5pm-restroom/app/UCSBB

npm install -g expo-cli

npm install react-native-maps

npm install react-native-elements

npm install --save firebase

expo start
```

on a computer:

- to open in an Android simulator, type `a` in the command line or click the "run on android" button in the browser window that opens on localhost:19002

- to open in an iOS simulator, type `i` in the command line or click the "run on iOS" button in the browser window that opens on localhost:19002

on a mobile device:

- install expo on your mobile device from the Apple App Store/Google Play

- scan the QR code that appears in the command line or the one on localhost:19002 to open the app in expo

ctrl + c in the command line closes the app.


## Functionality

Usage:

The "map" tab (home screen) is a map of the UCSB campus with markers that represent the locations of bathrooms around campus. Markers are color coded according to the gender of the bathroom. Drag to move the map, and pinch to zoom. Markers can be tapped on to display the room number and accessibility of each bathroom.

The "bathrooms" tab contains a list of bathrooms in each building. Tap on a building name to reveal the list of bathrooms with information gender, as well as accessibility information. Tapping on a bathroom in the list takes the user back to the "map" tab, and centers on the chosen bathroom. Tapping on the building name again collapses this list.

The "settings" tab contains a few options for the user to filter which bathrooms are shown on the map. Users can set their bathroom gender preference, as well as their accessibility preference.


## Known Problems

Tapping on bathrooms in the bathroom list multiple dozens of times causes the stack of tabs to fill up. This gradually degrades performance of the app and eventually causes a crash.

Tapping on the "maps" tab many times while on the map sometimes causes the settings to reset.

Expanding a building in the bathrooms tab causes infinite white space underneath the resultant list of bathrooms that appears.


## License

<https://github.com/ucsb-cs48-w20/5pm-restroom/blob/master/LICENSE>
