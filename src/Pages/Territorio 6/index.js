import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView, SafeAreaView, Alert} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio6() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal = [
  {
    nome: 'Chimpanzé',
    imagem: require('../../../assets/chimpanze.jpg'),
    Sobre: 'O chimpanzé é um dos primatas mais inteligentes e o parente mais próximo do ser humano. Vive em florestas tropicais da África Central e Ocidental.',
    Hábitos: 'Extremamente social, vive em grandes grupos e utiliza ferramentas para obter alimento. Alimenta-se de frutas, folhas, insetos e, ocasionalmente, carne.',
    Reprodução: 'A gestação dura cerca de 8 meses, e nasce um filhote por vez. As mães cuidam dos filhotes por vários anos.',
    Conservação: 'Em perigo de extinção devido à caça, tráfico e destruição das florestas africanas.',
  },
  {
    nome: 'Orangotango',
    imagem: require('../../../assets/orangotango.jpg'),
    Sobre: 'O orangotango é um grande primata das florestas tropicais de Bornéu e Sumatra, conhecido por sua inteligência e pelos longos braços.',
    Hábitos: 'Arborícola e solitário, passa a maior parte do tempo em árvores, alimentando-se de frutas, folhas e cascas.',
    Reprodução: 'A gestação dura cerca de 8,5 meses e nasce um filhote. A mãe cuida dele por até 8 anos.',
    Conservação: 'Criticamente ameaçado devido ao desmatamento e à expansão de plantações de óleo de palma.',
  },
  {
    nome: 'Primatas Brasileiros',
    imagem: require('../../../assets/primatas-brasileiros.jpg'),
    Sobre: 'O Brasil abriga a maior diversidade de primatas do mundo, incluindo micos, bugios, saguis e macacos-prego.',
    Hábitos: 'Vivem em grupos sociais complexos, alimentando-se de frutas, folhas, insetos e néctar. Habitam florestas tropicais e áreas de mata.',
    Reprodução: 'O ciclo reprodutivo varia entre as espécies, com gestação de 4 a 6 meses e um filhote por vez.',
    Conservação: 'Muitas espécies estão ameaçadas pela destruição de habitats e caça ilegal.',
  },
  {
    nome: 'Muriqui-do-Sul',
    imagem: require('../../../assets/muriqui-do-sul.jpg'),
    Sobre: 'O muriqui-do-sul, também conhecido como mono-carvoeiro, é o maior primata das Américas e endêmico da Mata Atlântica.',
    Hábitos: 'Arborícola e pacífico, vive em grupos e se desloca pelas copas das árvores. Alimenta-se de frutas, folhas e flores.',
    Reprodução: 'A gestação dura cerca de 7,5 meses, e nasce um único filhote a cada dois ou três anos.',
    Conservação: 'Criticamente ameaçado devido à fragmentação da Mata Atlântica e à caça.',
  },
];

  
  const AbrirModal = (value) => {

    setContador(value);
    setVisible(true);
    
  }

  const FecharModal = () => {
    setVisible(false);
  }

  return (
    <ScrollView style={styles.container}>

        <Modal animationType="fade" visible={visible} transparent={true}>
          <View style={styles.modalOverlay}>
            <SafeAreaView style={styles.modalCard}>

              <Pressable onPress={FecharModal} style={styles.closeButton} accessible={true} accessibilityLabel="Fechar">
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>

              <View style={styles.v1}>
                <Text style={styles.nomeAnimal}>{animal[contador].nome}</Text>
                <Image source={animal[contador].imagem} style={styles.imagem} resizeMode="cover" />
              </View>

              <View style={styles.v2}>
                <ScrollView>
                  <Text style={styles.descricaoText}>Sobre: {animal[contador].Sobre}</Text>
                  <Text style={styles.descricaoText}>Hábitos: {animal[contador].Hábitos}</Text>
                  <Text style={styles.descricaoText}>Reprodução:{animal[contador].Reprodução}</Text>
                  <Text style={styles.descricaoText}>Conservação: {animal[contador].Conservação}</Text>

                </ScrollView>
              </View>

              <View style={styles.v3}>
                <Pressable onPress={FecharModal} style={styles.button} UnderlayColor="#ff6b6b">
                  <Text style={styles.buttonText}>Fechar</Text>
                </Pressable>
              </View>

            </SafeAreaView>
          </View>
        </Modal>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Território 6</Text>
        <Text style={styles.headerSubtitle}>Toque no animal para saber mais</Text>
      </View>

      <View style={styles.grid}>
        <Pressable style={styles.card} onPress={() => AbrirModal(0)}>
          <Image source={require('../../../assets/onca-5666405.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Onça Pintada</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => AbrirModal(1)}>
          <Image source={require('../../../assets/oçaParda.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Onça Parda</Text>
        </Pressable>
      
        <Pressable style={styles.card} onPress={() => AbrirModal(2)}>
          <Image source={require('../../../assets/jacare.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Jacaré</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => AbrirModal(3)}>
          <Image source={require('../../../assets/cagado.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Cágado</Text>
        </Pressable>
      
        
        </View>

        <View style={[styles.card, {backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0}]} />

      <StatusBar style="auto" />
    </ScrollView>
  );
}