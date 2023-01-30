import { Center } from "native-base";

export const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      backgroundColor:"#F5B301"
    },
    fitAppLogo: {
      width: 120,
      height: 60,
    },
    insidePanel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        height: "80%",
        backgroundColor: "#2A2E34",
        borderRadius: 20,
    },
    headerText:{
      paddingTop: 20,
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "white",
    },
    infoText:{
      marginRight: 10,
      lineHeight: 30,
      fontSize: 25,
      fontWeight: 'bold',
      color: "white",
    },

   calculateButton: {
      marginTop: 40,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 20,
      width: 200,
      borderRadius: 7,
      backgroundColor: "white",
    },
    buttonText: {
      color: "black",
      fontSize: 20,
    },
    test: {
      color: 'red'
      
    },
    rowContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 300,
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 30,
  
    },
    
    searcher:{
      backgroundColor: 'white',
      fontSize:15,
    },
    productText:{
      marginRight: 30,
      marginLeft: 30,
      lineHeight: 30,
      fontSize: 20,
      color: "white",
      textAlign: 'center',
    },

    productInfo:{
      width: 250,
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#F5B301',
      borderBottomWidth: 3,
    },
    singleProduct:{
      width: 250,
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#F5B301',
      borderBottomWidth: 1,
    },
    productTextName1:{
      marginLeft: 20,
      lineHeight: 30,
      fontSize: 20,
      width: 150,
      color: "white",
    },
    productTextName2:{
      marginRight: 20,
      lineHeight: 30,
      fontSize: 20,
      width: 50,
      color: "white",
    },
    caloriesCounter:{
      width: 250,
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    caloriesText:{
      fontSize: 15,
      color: "white",
    },
    buttonTextOp:{
      fontSize: 30,
      lineHeight:25,
    },
    operationsButton:{
      backgroundColor: '#F5B301',
      width: 40,
      height:40,
      marginRight: 10,
      textAlign:'center',

    },
    scrollView: {
      display: 'flex',
      flexDirection: 'row',
      height: 400,
      width: 300,
      marginLeft: 50,
    },
    removeProduct:{
      height: 40,
      width: 40,
      marginBottom: 5,
      backgroundColor:'#F5B301'
    },
    textRemove:{
      lineHeight:23,
      color: 'black',
      fontSize: 25
    },
    headerIcons: {
      //width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -30,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
    },
    navButton: {
      backgroundColor: 'transparent',
      height: 50,
      width: 50
    },
    navIcon: {
      height: 30,
      width: 30
    }
  }