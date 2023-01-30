import { View,Image} from "react-native";
import React from "react";
import {  Button } from "native-base";
import { styles } from "./styles"

export default function Navbar({navigation}) {


        return(
    
        
        <View style={styles.headerIcons}>
            <Image source={require('../icons/logo.png')} style={styles.fitAppLogo}/>
            <Button style={styles.navButton} onPress={() => navigation.toggleDrawer()}>
                <Image source={require('../icons/bar.png')} style={styles.navIcon}/>
            </Button>
        </View>
        
    );
}
