import React, {useEffect} from 'react';
import AppContainer from 'src';
import CodePush from 'react-native-code-push';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import store from '~redux/store';

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};

const App = () => {
  const handleCodePush = () => {
    CodePush.sync(
      {
        updateDialog: {
          title: 'Your app have new update!',
          optionalIgnoreButtonLabel: 'Later',
          optionalInstallButtonLabel: 'Update',
          optionalUpdateMessage: 'Do you want to update?',
        },
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      status => {
        if (status === CodePush.SyncStatus.UPDATE_INSTALLED) {
          Alert.alert('Updating success!');
        }
      },
    );
  };
  useEffect(() => {
    handleCodePush();
  }, []);

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

const HocApp_CodePush = __DEV__ ? App : CodePush(CODE_PUSH_OPTIONS)(App);
export default HocApp_CodePush;
