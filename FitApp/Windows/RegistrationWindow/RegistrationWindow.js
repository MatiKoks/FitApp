import { View, Image, Alert } from 'react-native';
import React, { useContext, useState, useEffect, useRef  } from 'react';
import { styles } from './styles';
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
import axios from 'axios';
import { APP_API } from '../../constants/path';

const RegistrationWindow = ({ navigation }) => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const { store, setStoreData } = useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

    const [formData, setFormData] = useState({
        mail: '',
        login: '',
        password: '',
        age: '',
        weight:'',
        height:'',
        //image:''
      });

      const onChangeForm = (label, value) => {
        setFormData({ ...formData, [label]: value });
      };

    
      const formValidation = () => {
        const isValid =
          Object.values(formData).every(el => el) &&
    
          formData.mail.includes('@');
        if (isValid) {
          setIsLoading(true);
          return true;
        }
        Alert.alert('Formularz zawiera błędy');
        return false;
      };
    
      const registrationNewUser = () => {
        
        //onChangeForm('image', store.image);

        console.log("click")
        //console.log('zdjecie', formData.image)
        formValidation() &&
          axios
            .post(APP_API.AUTH.REGISTRATION, {formData, image: store.image})
            .then((res) => {
              const { message } = res.data;
              setFormData('');
              setStoreData('');
              Alert.alert(message)
              setIsLoading(false);
              navigation.navigate('Wyloguj');
            })
            .catch(e => {
              const { code, message } = e.response.data;
              if (code === 400) {
                Alert.alert(message);
              }
            });
    }

  return (

    <NativeBaseProvider>
    <View style={styles.body}>
    {isLoading&&<View style={styles.spinner}><Spinner color="#F5B301" size='lg'/></View>}
    <Image source={require('../../icons/logo.png')} style={styles.fitAppLogo}/>
        <View style={styles.insidePanel}>
            <Text style={styles.fitAppText}>Rejestracja</Text>

            <View style={styles.importPhotoContainer}
            >
            <Image style={styles.newImage}  source={{ uri: `data:image/jpg;base64,${store.image}`}} />

            <Button onPress={() => {navigation.navigate('CameraWindow')}} style={styles.imageCam}>
              <Image source={require('../../icons/photo.png')} style={styles.photoLogo}/>
            </Button>

            </View>

            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/email.png')} style={styles.logoImg}/>
            <Input
                placeholder='E-mail'
                label="E-mail"
                value={formData.mail}
                onChangeText={value => onChangeForm('mail', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>
            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/user.png')} style={styles.logoImg}/>
            <Input
                placeholder='Login'
                label="Login"
                value={formData.login}
                onChangeText={value => onChangeForm('login', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>
            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/password.png')} style={styles.logoImg}/>
            <Input
                type="password"
                placeholder='Hasło'
                label="Hasło"
                value={formData.password}
                onChangeText={value => onChangeForm('password', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>

            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/cake.png')} style={styles.logoImg}/>
            <Input
                placeholder='Wiek'
                label="Wiek"
                value={formData.age}
                onChangeText={value => onChangeForm('age', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>
            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/weight.png')} style={styles.logoImg}/>
                <Input
                placeholder='Waga'
                label="Waga"
                value={formData.weight}
                onChangeText={value => onChangeForm('weight', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>
            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/height.png')} style={styles.logoImg}/>
            <Input
                placeholder='Wzrost'
                label="Wzrost"
                value={formData.height}
                onChangeText={value => onChangeForm('height', value)}
                style={styles.loginInput}
                width={200}
                height={10}
                />
                </Container>

            <Button 
                mode="outlined"
                style={styles.createAccountButton}
                onPress={registrationNewUser}
            >
            <Text style={styles.buttonText}>Utwórz konto</Text>
            </Button>
      </View>
    </View>
    </NativeBaseProvider>
  );
};


export default RegistrationWindow;
