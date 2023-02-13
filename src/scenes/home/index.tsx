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

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    state => state.AuthSlice.currentUser,
    shallowEqual,
  );
  const loading = useAppSelector(state => state.AppSlice.loading, shallowEqual);
  const errorState = useAppSelector(
    state => state.AppSlice.error,
    shallowEqual,
  );

  // React.useEffect(() => {
  //   alert(errorState?.message)
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
      <Text>HomeScreen {currentUser?.name} </Text>
      <Text>current env: {Config.ENV}</Text>
      {errorState && <Text style={{color: 'red'}}> {errorState?.message}</Text>}

      <TouchableOpacity
        style={{padding: 10, backgroundColor: '#f1f1f1'}}
        onPress={() => {
          dispatch(signOutRequest({id: '1998'}));
        }}>
        <Text>Log out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 10, backgroundColor: '#f1f1f1'}}
        onPress={() => {
          dispatch(
            updateUserRequest({
              id: '1998',
              name: 'hihi' + new Date().getMilliseconds(),
            }),
          );
        }}>
        <Text>update user</Text>
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
