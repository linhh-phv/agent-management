import React, {useEffect, useState} from 'react';
import AppsScreens from '~navigations/appNav';
import AuthScreens from '~navigations/authNav';

const MainNavigation = () => {
  if (false) {
    return <AuthScreens />;
  } else {
    return <AppsScreens />;
  }
};

export default MainNavigation;
