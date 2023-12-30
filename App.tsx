import {StatusBar} from 'expo-status-bar';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Header} from "@/features/1-header/ui/Header";
import {Main} from "@/features/2-main/ui/Main";
import {HideKeyboard} from "@/common/components/HideKeyboard";

const bcImage = require('@/assets/img/bcApp/bc.jpg');


export default function App() {

  return (
    <HideKeyboard>
        <SafeAreaProvider style={styles.container}>
          <ImageBackground source={bcImage} style={styles.bc}>
          <Header/>
          <Main/>
          </ImageBackground>
          <StatusBar style="auto" />
        </SafeAreaProvider>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  bc:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
