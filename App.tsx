import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Header} from "@/features/1-header/ui/Header";
import {Main} from "@/features/2-main/ui/Main";
import {HideKeyboard} from "@/common/components/HideKeyboard";

export default function App() {

  return (
    <HideKeyboard>
      <SafeAreaProvider style={styles.container}>
        <Header/>
        <Main/>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
