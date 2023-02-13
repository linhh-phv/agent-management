import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '~redux/reducers';
import store from '~redux/store';
import {MainParamsList, TabParamsList} from '~navigations/type';

// strict comparison (===): so sanh ngang hang obj-obj, string-string
// shallow comparion: so sanh tung phan tu trong obj
export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useGetNavigation = <T extends keyof MainParamsList | never>() => {
  type screenProps = NativeStackNavigationProp<MainParamsList>;
  type RootRouteProps<RouteName extends keyof MainParamsList> = RouteProp<
    MainParamsList,
    RouteName
  >;
  const route = useRoute<RootRouteProps<T>>();
  const navigation = useNavigation<screenProps>();
  return {
    navigation,
    route,
  };
};

export const useGetTabNavigation = <
  T extends keyof TabParamsList | never,
>() => {
  type screenProps = NativeStackNavigationProp<TabParamsList>;
  type RootRouteProps<RouteName extends keyof TabParamsList> = RouteProp<
    TabParamsList,
    RouteName
  >;
  const route = useRoute<RootRouteProps<T>>();
  const navigation = useNavigation<screenProps>();
  return {
    navigation,
    route,
  };
};
