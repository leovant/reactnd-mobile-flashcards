import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Constants } from 'expo';
import { withStore } from './redux';
import AppNavigator from './navigation/AppNavigator';
import { setLocalNotification } from './utils/notifications';

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

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
