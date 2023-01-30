import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

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
      marginLeft: 10,
      marginTop: -30,
      marginBottom: 10,
    },
    insidePanel: {
        // display: 'flex', 
        // justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        height: "80%",
        // #2A2E34
        backgroundColor: "#2A2E34",
        borderRadius: 20,
    },
    fitAppText:{
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: 40,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      color: "white",
    },
    importPhotoContainer:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 120,
        height: 120,
        backgroundColor:"#3B3F46",
        borderRadius: 60,
        marginBottom: 20,
    },

    loginInput: {
      backgroundColor: '#FFF',
    },
    createAccountButton: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: "75%",
      borderRadius: 7,
      backgroundColor: "white",
    },
    buttonText: {
      fontSize:18,
      color: "black"
    },
    logoImg: {
      width: 30,
      height: 34,
      marginRight: 15,
    },
    photoLogo:{
      width: 40,
      height: 40,
    },
    rowContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 260,
      height: 50,
      alignItems: 'center',
      marginTop: 10,
    },
    cameraContainer: {
      marginTop: 40,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 0,
      width:250,
      height: 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column',
      borderRadius: 500,
      overflow: 'hidden'
    },
    fixedRatio: {
      width: 250,
      height: 250,
      borderRadius: 50
      //aspectRatio: 1,
    },
    textCamera:{
      paddingTop: 30,
      marginTop:40,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "white",
    },
    textButton:{
      color: 'black',
      fontSize: 18,
    },
      takePhotoButton: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      width: "50%",
      borderRadius: 7,
      backgroundColor: 'white',
    },
    rotateCamera:{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 90,
      width: "50%",
      borderRadius: 7,
      backgroundColor: 'white',
    },
    textButtonCamera:{
      color: 'black',
      fontSize: 18,
    },




    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: 300,
      height: 500,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    newPhoto:{
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: 'white',
    },

    newImage:{
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: 'white',
    },
    modalView:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 110,
        height: "80%",
        backgroundColor: "#2A2E34",
        borderRadius: 20,
    }
  }