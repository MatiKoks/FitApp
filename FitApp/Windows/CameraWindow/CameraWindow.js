import { View, Image, Modal } from 'react-native';
import React, { useContext, useState, useEffect, useRef  } from 'react';
import { Camera } from "expo-camera";
import { styles } from './styles';
import { AppContext } from '../../storage/storage';

import {
    NativeBaseProvider,
    Text,
    Button,
  } from "native-base";


const CameraWindow =  ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState(null);

  const camera = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { store, setStoreData } = useContext(AppContext);
  let tempImage;
  const [cameraRef, setCameraRef] = useState(null);

  
const permisionFunction = async () => {
    
    const cameraPermission = await Camera.requestCameraPermissionsAsync(); //zapytanie o uprawniwnia

    setCameraPermission(cameraPermission.status === 'granted');

    if (
      cameraPermission.status != 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  const onGetPicture = async () => {
    if (cameraRef) {

      const { base64 } = await cameraRef.takePictureAsync({ base64: true, quality: 0 });
      setStoreData({ ...store, image: base64});
      navigation.navigate('Wyloguj')
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NativeBaseProvider>
    <View style={styles.body}>

    <Image source={require('../../icons/logo.png')} style={styles.fitAppLogo}/>
        <View style={styles.insidePanel}>
        <Text style={styles.textCamera} >Zdjęcie profilowe</Text>
        <View style={styles.cameraContainer}>

        <Camera
          style={styles.fixedRatio}
          type={type}
          ref={ref => {
            setCameraRef(ref);
          }}
        ></Camera>
      
      
      </View>
      <Button
       style={styles.rotateCamera} 
        title="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back //obracanie aparatu
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
      <Text style={styles.textButtonCamera} >Odwróć</Text>
      </Button>

      <Button style={styles.takePhotoButton} title="Take Picture" onPress={onGetPicture}>
        <Text style={styles.textButton} >Zrób zdjęcie</Text>
      </Button>
        </View>
    </View>
    </NativeBaseProvider>
    
  );
};


export default CameraWindow;
