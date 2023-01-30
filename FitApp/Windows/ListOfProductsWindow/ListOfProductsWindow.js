import { View, Image, Alert} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Text,
  Button,
  Container,
  Input,
  ScrollView,
} from "native-base";
import { styles } from "./styles";
import axios from "axios";
import { APP_API } from '../../constants/path';
import { AppContext } from '../../storage/storage';
import Navbar from '../../Components/Navbar';

let userProductToInsert = {
  productName: '',
      productCalories: ''  
};

const ListOfProductsWindow = ({ navigation }) => {
  const { store, setStoreData } = useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [formData, setFormData] = useState({
      productName: '',
      productCalories: ''  
  });

  const getFilteredProducts = () => {
    if (!searchPhrase) return products;
    return products.filter(el => el.name.includes(searchPhrase));
  };

  useEffect(() => {
    axios.get(APP_API.PRODUCT.GET_ALL)
    .then(res => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    setProductsToDisplay(getFilteredProducts());
  }, [searchPhrase,products]);


  const addNewUserProduct = () => {
    console.log(userProductToInsert)
    console.log(store)
      axios
        .post(APP_API.USER_PRODUCTS.INSERT_PRODUCT(store.idUser), {userId: store.idUser, userProductToInsert})
        .then((res) => {
          const { message } = res.data;
          setFormData('');
          Alert.alert(message);
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
      <Navbar navigation={navigation}/>
        <View style={styles.insidePanel}>
          <Text style={styles.headerText}>Lista produktów</Text>
          <Container style={styles.rowContainer}>
              <Image source={require('../../icons/search.png')} style={styles.logoImg}/>
              <Input
                  placeholder= {"Szukaj"}
                  placeholderTextColor="blue"
                  onChangeText={value => setSearchPhrase(value)}
                  label="Szukaj"
                  style={styles.searcher}
                  width={180}
                  />
              </Container>

              <Container 
              style={styles.productInfo}>
              <Text style={styles.productText}>Nazwa</Text>
              <Text style={styles.productText}>kcal</Text>
              </Container>

              <Container style={styles.scrollView}>
                <ScrollView>
                {productsToDisplay.map(el => (
                  <Container 
                  key={el._id}
                  style={styles.singleProduct}>
                  <Text style={styles.productTextName1}>{el.name}</Text>
                  <Text style={styles.productTextName2}>{el.calories}</Text>
                  <Button style={styles.addProduct} onPress={()=>{
                    userProductToInsert.productName = el.name;
                     userProductToInsert.productCalories = el.calories;
                      addNewUserProduct()}}>
                   <Text style={styles.textAdd}>+</Text>
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


export default ListOfProductsWindow;
