import { StatusBar} from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style';   

export default function Territorio() {
  return (
    <View style={styles.container}>
      <Text>Pagina Sobre</Text>
      <StatusBar style="auto" />
    </View>
  );
}