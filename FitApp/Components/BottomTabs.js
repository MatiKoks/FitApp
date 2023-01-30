import { BottomNavigation } from 'react-native-paper';
import React, { useState, useContext, useEffect } from 'react';

import RegistrationWindow from '../Windows/RegistrationWindow/RegistrationWindow';
import LoginWindow from '../Windows/LoginWindow/LoginWindow';
import BMICalculatorWindow from '../Windows/BMICalculatorWindow/BMICalculatorWindow';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { AppContext } from '../storage/storage';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const { store, setStoreData } = useContext(AppContext);

  const [routes] = useState([
    { key: 'Login', title: 'Logwanie', focusedIcon: 'login'},
    { key: 'Registration', title: 'Rejestracja', focusedIcon: 'pencil' },
    { key: 'BMI', title: 'BMI', focusedIcon: 'calculator' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Login: () => <LoginWindow navigation={navigation} />,
    Registration: ()=> <RegistrationWindow navigation={navigation}/>,
    BMI: BMICalculatorWindow
  })

  
  return (

    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#2A2E34"
        inactiveColor="#3B3F46"
        barStyle={{backgroundColor:'#d9a007', height: 80}}
      />


    </>

  );
};

export default BottomTabs;
