import React, { useState } from 'react';
import {Image} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import LoginWindow from './Windows/LoginWindow/LoginWindow';
import RegistrationWindow from './Windows/RegistrationWindow/RegistrationWindow';
import MyProfileWindow from './Windows/MyProfileWindow/MyProfileWindow';
import TimerWindow from './Windows/TimerWindow/TimerWindow';
import BMICalculatorWindow from './Windows/BMICalculatorWindow/BMICalculatorWindow';
import CaloricNeedWindow from './Windows/CaloricNeedWindow/CaloricNeedWindow';
import ListOfProductsWindow from './Windows/ListOfProductsWindow/ListOfProductsWindow';
import DailyCaloriesWindow from './Windows/DailyCaloriesWindow/DailyCaloriesWindow';
import CameraWindow from './Windows/CameraWindow/CameraWindow';
import BottomTabs from './Components/BottomTabs';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer'; 

import { AppContext, initialStore } from './storage/storage';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  const [store, setStoreData] = useState(initialStore);

  return (
    <NavigationContainer >

      <AppContext.Provider value={{ store, setStoreData }}>
  <PaperProvider>
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerLabelStyle: {
        fontSize: 20,
        color: 'black'
      }, 
        drawerStyle: {
      backgroundColor: '#F5B301',
      width: 280, 
    } }}> 

    <Drawer.Screen name="Wyloguj" component={BottomTabs}  options={{swipeEdgeWidth: 0, drawerIcon: () => <Image source={require('./icons/logout.png')} 
    style={ {
      width: 30,
      height: 30,
    }}/>}}/>
    <Drawer.Screen name="Licznik kalorii" component={DailyCaloriesWindow} options={{unmountOnBlur: true}}/>

    <Drawer.Screen name="Mój profil" component={MyProfileWindow} options={{unmountOnBlur: true}}/>


    <Drawer.Screen name="CameraWindow" component={CameraWindow} options={{swipeEdgeWidth: 0,drawerItemStyle: {height: 0}}}/>
    

      <Drawer.Screen name="Lista produktów" component={ListOfProductsWindow} />
      <Drawer.Screen name="Timer" component={TimerWindow} />
      <Drawer.Screen name="Kalkulator BMI" component={BMICalculatorWindow} />
      <Drawer.Screen name="Kalkulator kcal" component={CaloricNeedWindow} />
      <Drawer.Screen name="RegistrationWindow" component={RegistrationWindow} options={{drawerItemStyle: {height: 0}}} />
      <Drawer.Screen name="LoginWindow" component={LoginWindow} options={{swipeEdgeWidth: 0, drawerItemStyle: {height: 0}}} />



     </Drawer.Navigator>

   </PaperProvider>
</AppContext.Provider>
    </NavigationContainer>


  );
};

export default App;
