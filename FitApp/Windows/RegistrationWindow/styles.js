

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
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        height: "80%",
        // #2A2E34
        backgroundColor: "#2A2E34",
        borderRadius: 20,
    },
    imageCam:{
        backgroundColor: 'transparent',
        marginTop: -90,
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
      flex: 1,
      flexDirection: "row",
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1,
    },
    newImage:{
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor:"#3B3F46"
    },
    spinner:{
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      height:'100%',
      backgroundColor:"black",
      opacity: 0.6,
      zIndex: 1,
    }
  }