import { View, Image, Alert, LogBox,} from 'react-native';
import React, { useContext, useState } from 'react';
import { styles } from './styles';
import axios from 'axios';
import { APP_API } from '../../constants/path';
import { AppContext } from '../../storage/storage';
import {
  NativeBaseProvider,
  Text,
  Button,
  Stack,
  Container,
  Input,
  Spinner
} from "native-base";

LogBox.ignoreLogs(['Require cycle: Windows/LoginWindow/LoginWindow.js -> Components/BottomTabs.js -> Windows/LoginWindow/LoginWindow.js']);

const LoginWindow = ({ navigation }) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { store, setStoreData } = useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

  const clearVariables = ()=>{
      setLogin('')
      setPassword('')
  }

const loginUser = () => {
  setIsLoading(true);
  axios
    .post(APP_API.AUTH.LOGIN, { password, login })
    .then(res => {
      setStoreData({ ...store, idUser: res.data.id});
      setIsLoading(false);
      navigation.navigate('Licznik kalorii');
      clearVariables()
    })
    .catch(e => {
      const { code, message } = e.response.data;
      if (code === 400) {
        setIsLoading(false);
        Alert.alert(message);
      }
    });
  };

  return (
    <NativeBaseProvider>
    <View style={styles.body}>
    {isLoading&&<View style={styles.spinner}><Spinner color="#F5B301" size='lg'/></View>}
      <Image source={require('../../icons/logo.png')} style={styles.logoImg}/>
      <Text style={styles.loginText}> Logowanie</Text>
      <Input
            placeholder='Login'
        label="Login"
        value={login}
        onChangeText={text => setLogin(text)}
        style={styles.loginInput}
        width={250}
        height={10}
        marginTop={10}
        marginLeft='auto'
        marginRight='auto'
        marginBottom={2}
      />

      <Input
        type='password'
        placeholder='Hasło'
        label="Hasło"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.loginInput}
        width={250}
        height={10}
        marginLeft='auto'
        marginRight='auto'
        marginBottom={2}
        />

      <Button mode="contained" style={styles.loginButton}
      onPress={loginUser}
      >
      <Text style={styles.textButton}>Zaloguj</Text>
      </Button>
      
    </View>
    </NativeBaseProvider>
  );
};

export default LoginWindow;
