import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image } from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Territorio 1 */}
      <View style={styles.v1}>  
        <Pressable style={styles.button} onPress={ () => navigation.navigate('Territorio')}>
          <Image 
            style={styles.logo}
            source={require('../../../assets/leãozinho.png')}
          />
          <Text style={styles.textButton}>Território 1</Text>
        </Pressable>
      </View>

      {/* Territorio 2 */}
      <View style={styles.v2}>
        <Pressable style={styles.button} onPress={ () => navigation.navigate('Territorio')}>
          <Text style={styles.textButton}>Território 2</Text>
        </Pressable>
      </View>

      {/* Territorio 3 */}
      <View style={styles.v3}>
        <Pressable style={styles.button} onPress={ () => navigation.navigate('Territorio')}>
          <Text style={styles.textButton}>Território 3</Text>
        </Pressable>
      </View>

      {/* Territorio 4 */}
      <View style={styles.v4}>
        <Pressable style={styles.button} onPress={ () => navigation.navigate('Territorio')}>
          <Text style={styles.textButton}>Território 4</Text>
        </Pressable>
      </View>

      {/* Territorio 5 */}
      <View style={styles.v5}>
        <Pressable style={styles.button} onPress={ () => navigation.navigate('Territorio')}>
          <Text style={styles.textButton}>Território 5</Text>
        </Pressable>
      </View>

      {/* Territorio 6 */}
      <View style={styles.v6}>
        <Pressable style={styles.button} onPress={ () => navigation.navigate('Territorio')}>
          <Text style={styles.textButton}>Território 6</Text>
        </Pressable>
      </View>
       
      <StatusBar style="auto" />
    </View>
  );
}