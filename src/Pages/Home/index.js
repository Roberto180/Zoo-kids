import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View, Pressable, Image } from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation(); 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Zoo Kids</Text>
        <Text style={styles.headerSubtitle}>Explore os territórios e conheça os animais!</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.card} onPress={ () => navigation.navigate('Territorio1')}>
           <Image 
              style={styles.logo}
              source={require('../../../assets/leãozinho.png')}
           />
           <Text style={styles.textButton}>Território 1</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={ () => navigation.navigate('Territorio2')}>
           <Image 
              style={styles.logo}
              source={require('../../../assets/hino.png')}
           />
           <Text style={styles.textButton}>Território 2</Text>
        </Pressable>
      </View>

        {/* Territorio 2 */}
      <View style={styles.row}>
        <Pressable style={styles.card} onPress={ () => navigation.navigate('Territorio3')}>
           <Image 
              style={styles.logo}
              source={require('../../../assets/monkey.png')}
           />
           <Text style={styles.textButton}>Território 3</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={ () => navigation.navigate('Territorio4')}>
           <Image 
              style={styles.logo}
              source={require('../../../assets/girafa.png')}
           />
           <Text style={styles.textButton}>Território 4</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.card} onPress={ () => navigation.navigate('Territorio5')}>
           <Image 
              style={styles.logo}
              source={require('../../../assets/zebra.png')}
           />
           <Text style={styles.textButton}>Território 5</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={ () => navigation.navigate('Territorio6')}>
           <Image 
              style={styles.logo}
              source={require('../../../assets/papagaio.jpg')}
           />
           <Text style={styles.textButton}>Território 6</Text>
        </Pressable>
      </View>
       
      <StatusBar style="auto" />
    </ScrollView>
  );
}