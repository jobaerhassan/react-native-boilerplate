import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './assets/styles/global.style.asset';
import BottomSheetIndex from './components/bottom-sheet';
import {Provider} from 'react-redux';
import configStore from './redux/store';
import RouterIndex from './nav-routes/RouterIndex.routes';
import Home from './testing-practice/Home';

const MainIndex = () => {
  let data = [];

  // return (
  //   <SafeAreaProvider>
  //     <Provider store={configStore}>
  //       <GestureHandlerRootView style={globalStyles.flex1}>
  //         <NavigationContainer>
  //           <RouterIndex />
  //           <BottomSheetIndex />
  //         </NavigationContainer>
  //       </GestureHandlerRootView>
  //     </Provider>
  //   </SafeAreaProvider>
  // );
  return <Home />;
};

export default MainIndex;
