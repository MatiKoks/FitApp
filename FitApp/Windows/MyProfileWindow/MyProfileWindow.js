import { View, Image, Modal,Alert} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import {NativeBaseProvider, Text, Button, Container, Input, useToast, Spinner } from 'native-base';
import { styles } from './styles';
import axios from 'axios';
import { APP_API } from '../../constants/path';
import { AppContext } from '../../storage/storage';
import Navbar from '../../Components/Navbar';



const MyProfileWindow = ({ navigation }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const { store } = useContext(AppContext);
  const [data, setData] = useState({
        login: '',
        age: '',
        weight:'',
        height:'',
        image: '',
  });

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: ''
  });
 
  const clearForm = () => {
    formData.oldPassword ='';
    formData.newPassword ='';
  }

  const onChangeForm = (label, value) => {
    setFormData({ ...formData, [label]: value });
  };

  const formValidation = () => {
    const isValid =
      Object.values(formData).every(el => el)
    if (isValid) {
      return true;
    }
    Alert.alert('Formularz zawiera błędy');
    return false;
  };

  const changePassword = () => {
    formValidation() &&
      axios
        .put(APP_API.USER.CHANGE_PASSWORD(store.idUser), {id: store.idUser, oldPassword: formData.oldPassword, newPassword: formData.newPassword})
        .then(() => {
          setModalVisible(false);
          Alert.alert("Hasło zostało zmienione!")
          clearForm();
        })
        .catch(e=>{
          const { code, message } = e.response.data;
          if (code === 400) {
            Alert.alert(message);
          }
        });
  };



  useEffect(() => {
    axios.get(APP_API.USER.GET_BY_ID(store.idUser)).then(res => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <NativeBaseProvider>
    <View style={styles.body}>
    {isLoading&&<View style={styles.spinner}><Spinner color="#F5B301" size='lg'/></View>}
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.modalView}>
            <Text style={styles.headerPassword}>Zmiana hasła</Text>

            <Container style={styles.rowContainerPassword}>
            <Input
                type="password"
                placeholder='Stare hasło'
                label="Hasło"
                value={formData.oldPassword}
                onChangeText={value => onChangeForm('oldPassword', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>

            <Container style={styles.rowContainerPassword}>
            <Input
                type="password"
                placeholder='Nowe hasło'
                label="Hasło"
                value={formData.newPassword}
                onChangeText={value => onChangeForm('newPassword', value)}
                style={styles.loginInput}
                width={200}
                height={10}
            />
            </Container>

              <Button style={styles.rotateCamera} onPress={changePassword}>
              <Text style={styles.textButton}>Akceptuj</Text>
              </Button>
              <Button style={styles.takePhotoButton} onPress={()=> { 
                clearForm();
                setModalVisible(false)}}>
              <Text style={styles.textButton}>Wróć</Text>
              </Button>

          </View>
      </Modal>

  
      <Navbar navigation={navigation}/>

        <View style={styles.insidePanel}>
            <Text style={styles.headerText}>Mój profil</Text>

            <View style={styles.importPhotoContainer}>
                  
                   <Image style={styles.newImage}  source={{ uri: `data:image/jpg;base64,${data.image}`}} />

            </View>
            
            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/user.png')} style={styles.logoImg}/>
            <Text style={styles.infoText} >{data.login}</Text>
            </Container>


            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/cake.png')} style={styles.logoImg}/>
            <Text style={styles.infoText} >{data.age} lat</Text>
            </Container>

            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/weight.png')} style={styles.logoImg}/>
            <Text style={styles.infoText} >{data.weight} kg</Text>
            </Container>

            <Container style={styles.rowContainer}>
            <Image source={require('../../icons/height.png')} style={styles.logoImg}/>
            <Text style={styles.infoText} >{data.height} cm</Text>
            </Container>
 

            <Button
                style={styles.changePasswordButton}
                onPress={() => setModalVisible(true)}
            >
            <Text style={styles.buttonText}>Zmień hasło</Text>
            </Button>
      </View>
    </View>
    </NativeBaseProvider>
  );
};


export default MyProfileWindow;
