import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Constants } from 'expo';
import { withStore } from './redux';
import AppNavigator from './navigation/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar translucent />
        </View>

        <AppNavigator />
      </SafeAreaView>
    );
  }
}

export default withStore(App);
