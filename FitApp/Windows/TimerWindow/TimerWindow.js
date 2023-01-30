import { View,Image } from 'react-native';
import React, { useContext, setTarget, target } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {NativeBaseProvider, Text, Button, Input, Container} from 'native-base';
import { styles } from './styles';
import Navbar from '../../Components/Navbar';

let intervalId = null;
let hoursTmpp, minutesTmpp, secondsTmpp;



const TimerWindow = ({ navigation }) => {
  const [seconds, setSeconds] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [isActivate, setIsActivate] = React.useState(false);
  



  function startTimer() {
    hoursTmpp = hours;
    minutesTmpp = minutes;
    secondsTmpp = seconds;
    if(--hoursTmpp<0) {
      setHours('00');
    }
    if(--minutesTmpp<0) {
      setMinutes('00');
    }
    if(--secondsTmpp<0) {
      setSeconds('00');
    }
    setIsActivate(true)
    let duration = hours * 3600 + minutes * 60 + seconds-1;
  
    
    let timer = duration, hoursTmp, minutesTmp, secondsTmp;
  
    
    intervalId = setInterval(function () {
    hoursTmp = parseInt(timer / 3600, 10);
    minutesTmp = parseInt((timer % 3600) / 60, 10);
    secondsTmp = parseInt(timer % 60, 10);
    
    hoursTmp = hoursTmp < 10 ? "0" + hoursTmp : hoursTmp;
    minutesTmp = minutesTmp < 10 ? "0" + minutesTmp : minutesTmp;
    secondsTmp = secondsTmp < 10 ? "0" + secondsTmp : secondsTmp;
    console.log(hoursTmp + ":" + minutesTmp + ":" + secondsTmp);
  
    
    setHours(hoursTmp);
    setMinutes(minutesTmp);
    setSeconds(secondsTmp);
    

    if (--timer < 0) { 
    console.log("Time is up!");
    resetTimer()
    }
    
    }, 1000);
    }
    
    function resetTimer() {
      clearInterval(intervalId);
      setIsActivate(false);
      setHours('');
      setMinutes('');
      setSeconds('');
      hoursTmp = 0;
      minutesTmp = 0;
      secondsTmp = 0;

    }

    function getAllUnits(j) {
      const objectsArray = [];
      for (let i = 1; i <= j; i++) {
        objectsArray.push({
          label: i<10?'0'+i:''+i,
          value: '0'+i,
        });
      }
      return objectsArray;
    }

  return (
    <NativeBaseProvider>
    <View style={styles.body}>
      <Navbar navigation={navigation}/>
        <View style={styles.insidePanel}>
            <Text variant="titleLarge" style={styles.headerText}>Timer</Text>
            
            <Container style={styles.containerChoice}>
            {isActivate&&<Text style={styles.time} >{hours} </Text>}
            {!isActivate&&<RNPickerSelect disabled={isActivate} style={pickerStyle}
                  onValueChange={(value) => setHours(value)}
                  placeholder = {{label:'00',value: '00'}}
                  items={
                      getAllUnits(23)
                  }
            />}

                        <Text style={styles.dots}>:</Text>
                        {isActivate&&<Text style={styles.time} > {minutes} </Text>}

                        {!isActivate&&<RNPickerSelect style={pickerStyle}
                            onValueChange={(value) => setMinutes(value)}
                            placeholder = {{label:'00',value: '00'}}
                            items={getAllUnits(59)}
                      />}
                      <Text variant="titleLarge" style={styles.dots}>:</Text>
                      {isActivate&&<Text style={styles.time} > {seconds}</Text>}
          {!isActivate&&<RNPickerSelect style={pickerStyle}
                  onValueChange={(value) => setSeconds(value)}
                  placeholder = {{label:'00',value: '00'}}
                  items={getAllUnits(59)}
            />}
            </Container>
            {!isActivate&&<Button 
                style={styles.startButton}
                onPress={startTimer}
            >
            <Text style={styles.buttonText}>START</Text>
            </Button>}
            {isActivate&&<Button 
                style={styles.startButton}
                onPress={resetTimer}
            >
            <Text style={styles.buttonText}>RESET</Text>
            </Button>}
      </View>
    </View>
    </NativeBaseProvider>
  );
};

const pickerStyle = {
  inputIOS: {
      color: 'black',
      fontSize: 30,
      backgroundColor: 'white',
      width: 60,
      height: 60,
      borderRadius: 5,
      textAlign: 'center',
      marginRight: 10,
      marginLeft: 10
  },
  placeholder: {
      color: 'black',
    },
};

export default TimerWindow;
