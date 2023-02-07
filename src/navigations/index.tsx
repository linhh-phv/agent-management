import React, {useEffect, useState} from 'react';
import AppsScreens from './appNav';
import AuthScreens from './authNav';

const MainNavigation = () => {
  if (false) {
    return <AuthScreens />;
  } else {
    return <AppsScreens />;
  }
};

export default MainNavigation;
