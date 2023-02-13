import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Config from 'react-native-config';
import {shallowEqual} from 'react-redux';
import {useAppDispatch, useAppSelector} from '~hooks';
import {updateUserRequest} from '~redux/modules/app/account/slice';
import {signInRequest, signOutRequest} from '~redux/modules/auth/slice';

export const SigninScreen = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(
    state => state.AuthSlice.isLoggedIn,
    shallowEqual,
  );
  const name = useAppSelector(state => state.AccountSlice.name, shallowEqual);
  const currentUser = useAppSelector(
    state => state.AuthSlice.currentUser,
    shallowEqual,
  );
  const loading = useAppSelector(state => state.AppSlice.loading, shallowEqual);
  const errorState = useAppSelector(
    state => state.AppSlice.error,
    shallowEqual,
  );
  console.log('hihihi');

  // React.useEffect(() => {
  //   if (errorState) {
  //     alert(errorState?.message);
  //   }
  // }, [errorState]);

  const renderLoading = () => {
    return loading ? (
      <View style={styles.container}>
        <View style={styles.centerView}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      </View>
    ) : null;
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {renderLoading()}
      <Text>HomeScreen</Text>
      <Text>current env: {Config.ENV}</Text>
      {errorState && <Text style={{color: 'red'}}> {errorState?.message}</Text>}

      <TouchableOpacity
        disabled={loading}
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => {
          dispatch(signInRequest({password: '123', userName: 'pvlinh02'}));
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  centerView: {
    width: 65,
    height: 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
