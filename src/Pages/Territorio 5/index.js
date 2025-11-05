import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView, SafeAreaView, Alert} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio5() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal = [
  {
    nome: 'Águias',
    imagem: require('../../../assets/aguia.jpg'),
    Sobre: 'As águias são aves de rapina poderosas, conhecidas por sua visão aguçada e voo majestoso. São predadoras de topo em diversos ecossistemas.',
    Hábitos: 'Caçam durante o dia, alimentando-se de pequenos mamíferos, peixes e outras aves. Costumam viver em pares e manter territórios amplos.',
    Reprodução: 'Constroem ninhos grandes em penhascos ou árvores altas. A fêmea bota de 1 a 3 ovos, e ambos os pais cuidam dos filhotes.',
    Conservação: 'Algumas espécies estão ameaçadas pela destruição de habitat e pelo uso de pesticidas, mas programas de conservação vêm auxiliando na recuperação das populações.',
  },
  {
    nome: 'Gaviões',
    imagem: require('../../../assets/gaviao.jpg'),
    Sobre: 'Os gaviões são aves de rapina ágeis e versáteis, com visão precisa e bico curvado para rasgar carne.',
    Hábitos: 'Caçam principalmente durante o dia, capturando presas em voo ou no solo. Vivem em áreas florestais e abertas.',
    Reprodução: 'Fazem ninhos em árvores altas; a fêmea põe de 2 a 4 ovos, e os pais dividem o cuidado dos filhotes.',
    Conservação: 'Algumas espécies são afetadas pelo desmatamento e envenenamento, mas muitas ainda são comuns em diversas regiões.',
  },
  {
    nome: 'Harpia',
    imagem: require('../../../assets/harpia.jpg'),
    Sobre: 'A harpia é a maior águia das Américas, com garras enormes e força impressionante. É símbolo de poder e um importante predador das florestas tropicais.',
    Hábitos: 'Vive em florestas densas e caça macacos, preguiças e aves. Costuma caçar em pares e é extremamente territorial.',
    Reprodução: 'Constrói ninhos enormes em árvores altas. A fêmea põe um único ovo, e o filhote fica sob cuidados por mais de um ano.',
    Conservação: 'Vulnerável à extinção devido à destruição das florestas tropicais e caça ilegal.',
  },
  {
    nome: 'Condor',
    imagem: require('../../../assets/condor.jpg'),
    Sobre: 'O condor é uma das maiores aves voadoras do mundo, pertencente à família dos abutres, com envergadura que pode ultrapassar 3 metros.',
    Hábitos: 'Alimenta-se de carcaças e tem papel essencial na limpeza dos ecossistemas. Vive em regiões montanhosas e ventosas.',
    Reprodução: 'A fêmea põe um único ovo a cada dois anos, e ambos os pais cuidam do filhote até que ele possa voar.',
    Conservação: 'Em perigo de extinção, principalmente devido à caça e envenenamento de carcaças.',
  },
  {
    nome: 'Urubu-rei',
    imagem: require('../../../assets/urubu-rei.jpg'),
    Sobre: 'O urubu-rei é uma grande ave necrófaga encontrada nas florestas tropicais da América Central e do Sul, reconhecida pelas cores vivas da cabeça.',
    Hábitos: 'Alimenta-se de carcaças, sendo um dos primeiros a chegar a uma fonte de alimento devido à sua dominância sobre outros urubus.',
    Reprodução: 'Faz ninhos em árvores altas ou falhas de rochas. A fêmea geralmente põe um único ovo.',
    Conservação: 'Quase ameaçado, afetado pela destruição de habitat e poluição.',
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
        <Text style={styles.headerTitle}>Território 5</Text>
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
      
        <Pressable style={styles.card} onPress={() => AbrirModal(4)}>
          <Image source={require('../../../assets/elefante-africano.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Elefante</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => AbrirModal(5)}>
          <Image source={require('../../../assets/flamingo.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Flamingo</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => AbrirModal(6)}>
          <Image source={require('../../../assets/pequeno.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Pequenos Felinos</Text>
        </Pressable>
        
        <Pressable style={styles.card} onPress={() => AbrirModal(7)}>
          <Image source={require('../../../assets/Quati.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Quati</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => AbrirModal(8)}>
          <Image source={require('../../../assets/guara.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Guará</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => AbrirModal(9)}>
          <Image source={require('../../../assets/iraras.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Irara</Text>
        </Pressable>
        </View>

        <View style={[styles.card, {backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0}]} />

      <StatusBar style="auto" />
    </ScrollView>
  );
}