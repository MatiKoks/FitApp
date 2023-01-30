import { View,Image, Keyboard } from 'react-native';
import React, { useContext } from 'react';
import {NativeBaseProvider, Text, Button, Stack, Container, Radio, Input} from 'native-base';
import { styles } from './styles';
import Navbar from '../../Components/Navbar';
import { AppContext } from '../../storage/storage';


const BMICalculatorWindow = ({ navigation }) => {
  const [value, setValue] = React.useState("K");
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const [resultBMI, setBMI] = React.useState();
  const [BMIComment,setBMIComment]= React.useState(' ');
  const { store, setStoreData } = useContext(AppContext);
  
  function handleCalculate(){
    setBMI((weight / (height*height*0.0001)).toFixed(2))
    if(resultBMI < 16){
      setBMIComment("Wygłodzenie")
    }else if(resultBMI >= 16 && resultBMI < 17){
      setBMIComment("Wychudzenie")
    }else if(resultBMI >= 17 && resultBMI < 18.5){
      setBMIComment("Niedowaga")
    }else if(resultBMI >= 18.5 && resultBMI < 25){
      setBMIComment("Wartość prawidłowa")
    }else if(resultBMI >= 25 && resultBMI < 30){
      setBMIComment("Nadwaga")
    }else if(resultBMI >= 30 && resultBMI < 35){
      setBMIComment("I stopień otyłości")
    }else if(resultBMI >= 35 && resultBMI < 40){
      setBMIComment("II stopień otyłości")
    }else if(resultBMI >= 40){
      setBMIComment("Otyłość skrajna")
    }
    Keyboard.dismiss()
  }

  return (
    <NativeBaseProvider >
    <View style={styles.body} >

    {store.idUser==''?<Image source={require('../../icons/logo.png')} style={styles.fitAppLogo}/>:<Navbar navigation={navigation}/>}

        <View style={styles.insidePanel}>
            <Text variant="titleLarge" style={styles.headerText}>Oblicz BMI</Text>
            <Container style={styles.genderContainer}>
              <Text style={styles.infoText}>Płeć: </Text>
              
              <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                setValue(nextValue);
                console.log(value)
              }}>
            <Stack direction={{
      base: "row",
      md: "row"
    }} alignItems={{
      base: "flex-start",
      md: "center"
    }} space={4} w="75%" maxW="300px">
                  <Radio colorScheme="yellow" value="K" my={1}>
                    <Text style={styles.radioText}>K</Text>
                  </Radio>
                  <Radio colorScheme="yellow" value="M" my={1}>
                    <Text style={styles.radioText}>M</Text>
                  </Radio>
                  </Stack>
              </Radio.Group>
          </Container>
          <Container style={styles.rowContainer}>
          <Text style={styles.infoText}>Waga:</Text>
          <Input 
          style={styles.weightInput}
          keyboardType = 'numeric'
          onChangeText = {setWeight}
          value = {9}
          width={100}
        /> 
          </Container>

          <Container style={styles.rowContainer}>
          <Text style={styles.infoText}>Wzrost:</Text>
          <Input 
          style={styles.weightInput}
          keyboardType = 'numeric'
          onChangeText = {setHeight}
          value = {9}
          width={100}
        /> 
          </Container>


            <Button
                isDisabled={!weight || !height}
                style={styles.calculateButton}
                onPress={handleCalculate}
            >
            <Text style={styles.buttonText}>Oblicz</Text>
            </Button>
            <Container style={styles.rowContainer}>
            <Text style={styles.infoText}>Wynik:</Text>
            <Text style={styles.infoText}>{resultBMI}</Text> 
            </Container>
            <Text style={styles.infoBMI}>{BMIComment}</Text>
            
      </View>
    </View>
    </NativeBaseProvider>

  );
};

export default BMICalculatorWindow;
