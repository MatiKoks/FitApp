import { View,Image, Keyboard } from "react-native";
import React, { useContext } from "react";
import {
  NativeBaseProvider,
  Text,
  Button,
  Stack,
  Container,
  Radio,
  Input,
} from "native-base";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "./styles";
import Navbar from '../../Components/Navbar';


const CaloricNeedWindow = ({ navigation }) => {

  const [value, setValue] = React.useState("K");
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const [age, setAge] = React.useState();
  const [activity, setActivity] = React.useState();
  const [purpose, setPurpose] = React.useState();
  const [resultCalories, setCalories] = React.useState();

  function validation(){

  }
  function handleCalculate(){

    if(value === "M"){
      setCalories((((66 + (13.7 * weight) + (5 * height) - (6.8 * age))* activity)+ purpose).toFixed(0))
    }else if(value === "K"){
      setCalories((((655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))* activity)+ purpose).toFixed(0))
    }
    Keyboard.dismiss()
  }

  return (
    <NativeBaseProvider>
      <View style={styles.body}>
      
        <Navbar navigation={navigation}/>
        <View style={styles.insidePanel}>
          <Text style={styles.headerText}>Zapotrzebowanie</Text>
          <Text style={styles.headerText}>kaloryczne</Text>
          <Container style={styles.genderContainer}>
            <Text style={styles.infoText}>Płeć: </Text>

            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
                console.log(value);
              }}
            >
              <Stack
                direction={{
                  base: "row",
                  md: "row",
                }}
                alignItems={{
                  base: "flex-start",
                  md: "center",
                }}
                space={4}
                w="75%"
                maxW="300px"
              >
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
              keyboardType="numeric"
              onChangeText={setWeight}
              value={9}
              width={100}
            />
          </Container>

          <Container style={styles.rowContainer}>
            <Text style={styles.infoText}>Wzrost:</Text>
            <Input
              style={styles.weightInput}
              keyboardType="numeric"
              onChangeText={setHeight}
              value={9}
              width={100}
            />
          </Container>
          <Container style={styles.rowContainer}>
            <Text style={styles.infoText}>Wiek:</Text>
            <Input
              style={styles.weightInput}
              keyboardType="numeric"
              onChangeText={setAge}
              value={9}
              width={100}
            />
          </Container>
          <Text style={styles.infoActivity}>Aktywność fizyczna</Text>
          <RNPickerSelect
            style={pickerStyle}
            onValueChange={setActivity}
            placeholder={{ label: "Wybierz aktywność fizyczną", value: null }}
            items={[
              { label: "Siedzący", value: 1.2 },
              { label: "lekko aktywny", value: 1.375 },
              { label: "umiarkowanie aktywny", value: 1.55 },
              { label: "bardzo aktywny", value: 1.725 },
              { label: "ekstra aktywny", value: 1.9 },
            ]}
          />
          <Text style={styles.infoActivity}>Planuję</Text>
          <RNPickerSelect
            style={pickerStyle}
            onValueChange={setPurpose}
            placeholder={{ label: "Wybierz co chcesz osiągnąć", value: null }}
            items={[
              { label: "Utrzymać", value: 0.0000001},
              { label: "Przytyć", value: 300 },
              { label: "Schudnąc", value: -300 },
            ]}
          />

          <Button isDisabled={!weight || !height || !age || !activity || !purpose}
            style={styles.calculateButton}
            onPress={handleCalculate}
          >
            <Text style={styles.buttonText}>Oblicz</Text>
          </Button>
          <Container style={styles.rowContainer}>
            <Text style={styles.infoText}>Wynik:</Text>
            <Text style={styles.infoText}>{resultCalories} kcal</Text>
          </Container>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const pickerStyle = {
  inputIOS: {
    color: "black",
    fontSize: 15,
    backgroundColor: "white",
    width: 250,
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 5,
    marginRight: "auto",
    marginLeft: "auto",
  },
  placeholder: {
    color: "black",
  },
};

export default CaloricNeedWindow;
