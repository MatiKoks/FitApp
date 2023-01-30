import { View,Image,Alert} from "react-native";
import React, { useContext,useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Text,
  Button,
  Stack,
  Container,
  Radio,
  Input,
  ScrollView,
} from "native-base";

import * as Progress from 'react-native-progress';
import { APP_API } from '../../constants/path';
import { AppContext } from '../../storage/storage';
import Navbar from '../../Components/Navbar';
import { styles } from "./styles";
import axios from "axios";

let sumOfCalories = 0;
const percentage = 69;
const limit = 3000;



const DailyCaloriesWindow = ({ navigation }) => {



  const { store, setStoreData } = useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');

  let userProductToRemove = {
        productId: '',
  };

  const getAllUserProducts = ()=>{
    axios
    .post(APP_API.USER_PRODUCTS.GET_USER_PRODUCTS(store.idUser), {userId: store.idUser})
    .then(res => {
      setProducts(res.data);
    });
  }

  const removeNewUserProduct = () => {
    console.log('DELETE: ', userProductToRemove.productId)
      axios
        .post(APP_API.USER_PRODUCTS.DELETE_USER_PRODUCT, {userProductId: userProductToRemove.productId})
        .then((res) => {
          const { message } = res.data;
          //setFormData('');
          Alert.alert(message);
          getAllUserProducts();
          
  
        })
        .catch(e => {
          const { code, message } = e.response.data;
          if (code === 400) {
            Alert.alert(message);
          }
        });
  }


  const getFilteredProducts = () => {
    if (!searchPhrase){
      sumOfCalories = 0;
      products.forEach(el => {
        sumOfCalories += el.productCalories;
      });
      console.log(sumOfCalories)
      return products 
    };
    return products.filter(el => el.productName.includes(searchPhrase));
  };

  useEffect(() => {getAllUserProducts()
  }, []);

  useEffect(() => {
    setProductsToDisplay(getFilteredProducts());
  }, [searchPhrase,products]);


  return (
    <NativeBaseProvider>
      
      <View style={styles.body}>
      <Navbar navigation={navigation}/>
        <View style={styles.insidePanel }>
        <Progress.Circle progress={(sumOfCalories/limit)} showsText={true} size={150} 
        borderWidth={0}
        color={'#F5B301'}
        unfilledColor={'rgb(121, 119, 119)'}/>
              <Container 
              style={styles.caloriesCounter}>
              <Text style={styles.caloriesText}>{sumOfCalories} </Text>
              <Text style={styles.caloriesText}>/ {limit} kcal</Text>
              </Container>

              <Container style={styles.caloriesCounter}>

            </Container>

              <Container 
              style={styles.productInfo}>
              <Text style={styles.productText}>Nazwa</Text>
              <Text style={styles.productText}>kcal</Text>
              </Container>
              
              <Container style={styles.scrollView}>
                <ScrollView>
                {productsToDisplay.map(el => (
                  <Container key={el._id}
                  style={styles.singleProduct}>
                  <Text style={styles.productTextName1}>{el.productName}</Text>
                  <Text style={styles.productTextName2}>{el.productCalories}</Text>

                  <Button style={styles.removeProduct} onPress={()=>{
                    userProductToRemove.productId = el._id; removeNewUserProduct()}}>
                   <Text style={styles.textRemove}>-</Text>
                  </Button> 

                  </Container>
                  ))}
                </ScrollView>
              </Container>
        </View>
      </View>
    </NativeBaseProvider>
  );
};


export default DailyCaloriesWindow;
