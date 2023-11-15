import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import BgImage from "./Screenshot_8.jpg";
import Cadeado from "./images.png"


export default function App() {
   return (
      <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: "absolute", left: 0 }}>

    <View style={styles.container} >
      <TouchableOpacity style={styles.buttontop}>
        <Text style={styles.texticon}>..</Text>
      <View>
        <Text style={styles.textonome}> Olá,Janaelson</Text>
        <Text style={styles.textinfo} > ag...  /con...</Text>
      </View>
      </TouchableOpacity>
      <Text style={styles.textentrar}> Olá,Janaelson</Text>
        <View style={styles.viewbox}>
          <Image style={styles.imagbox} source={Cadeado} />
          <TextInput/>
        </View>
      </View>
      </ImageBackground>
   );
}