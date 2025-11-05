import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView, SafeAreaView, Alert} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio4() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal = [
  {
    nome: 'Rinoceronte',
    imagem: require('../../../assets/rinoceronte.jpg'),
    Sobre: 'O rinoceronte é um dos maiores mamíferos terrestres, conhecido por seu chifre característico e pele espessa.',
    Hábitos: 'Herbívoro, alimenta-se de gramíneas e folhas. Vive solitário ou em pequenos grupos, dependendo da espécie.',
    Reprodução: 'A gestação dura cerca de 15 a 16 meses, geralmente nascendo um único filhote.',
    Conservação: 'Criticamente ameaçado devido à caça ilegal por causa de seus chifres e à perda de habitat.',
  },
  {
    nome: 'Zebra',
    imagem: require('../../../assets/zebra.jpg'),
    Sobre: 'A zebra é um mamífero herbívoro africano conhecido por suas listras pretas e brancas únicas.',
    Hábitos: 'Vive em grupos nas savanas, alimentando-se de capim e folhas. É muito social e possui fortes laços com o grupo.',
    Reprodução: 'A gestação dura cerca de 12 meses, e geralmente nasce um filhote por vez.',
    Conservação: 'Algumas espécies estão ameaçadas pela caça e pela destruição das savanas africanas.',
  },
  {
    nome: 'Girafa',
    imagem: require('../../../assets/girafa.jpg'),
    Sobre: 'A girafa é o animal terrestre mais alto do mundo, com pescoço longo e manchas características.',
    Hábitos: 'Herbívora, alimenta-se principalmente de folhas de acácias. Vive em grupos soltos e é ativa durante o dia.',
    Reprodução: 'A gestação dura cerca de 15 meses, e nasce um único filhote que já consegue ficar em pé após algumas horas.',
    Conservação: 'Vulnerável devido à perda de habitat e à caça em algumas regiões da África.',
  },
  {
    nome: 'Suricato',
    imagem: require('../../../assets/suricato.jpg'),
    Sobre: 'O suricato é um pequeno mamífero da família dos mangustos, conhecido por seu comportamento vigilante e social.',
    Hábitos: 'Vive em grupos organizados chamados de colônias. Alimenta-se de insetos, pequenos vertebrados e frutas.',
    Reprodução: 'A fêmea tem de 2 a 5 filhotes por gestação, e todo o grupo ajuda a cuidar dos jovens.',
    Conservação: 'Atualmente não está ameaçado, mas sofre com a perda de habitat e mudanças climáticas.',
  },
  {
    nome: 'Dromedário',
    imagem: require('../../../assets/dromedario.jpg'),
    Sobre: 'O dromedário é um grande mamífero do deserto, com uma única corcova e grande resistência ao calor e à falta de água.',
    Hábitos: 'Adaptado a ambientes áridos, alimenta-se de vegetação seca e pode passar dias sem beber água.',
    Reprodução: 'A gestação dura cerca de 13 meses, com o nascimento de um único filhote.',
    Conservação: 'Não está ameaçado, sendo amplamente domesticado em regiões desérticas.',
  },
  {
    nome: 'Família dos Leões (Realeza da Savana)',
    imagem: require('../../../assets/leoes.jpg'),
    Sobre: 'Os leões são grandes felinos africanos, conhecidos como os "reis da selva" por sua força e postura imponente.',
    Hábitos: 'Vivem em grupos chamados alcateias, liderados por um ou mais machos dominantes. Caçam em equipe, geralmente as fêmeas.',
    Reprodução: 'A gestação dura cerca de 110 dias, e nascem de 2 a 4 filhotes por ninhada.',
    Conservação: 'Vulneráveis devido à perda de habitat, caça e conflitos com humanos.',
  },
  {
    nome: 'Tigre',
    imagem: require('../../../assets/tigre.jpg'),
    Sobre: 'O tigre é o maior felino do mundo, com pelagem laranja e listras pretas distintas.',
    Hábitos: 'Predador solitário e territorial, caça cervos, javalis e outros grandes mamíferos.',
    Reprodução: 'A gestação dura cerca de 3,5 meses e nascem de 2 a 4 filhotes.',
    Conservação: 'Em perigo de extinção devido à caça ilegal e à destruição de florestas asiáticas.',
  },
  {
    nome: 'Hipopótamo',
    imagem: require('../../../assets/hipopotamo.jpg'),
    Sobre: 'O hipopótamo é um grande mamífero semi-aquático africano, conhecido por seu corpo massivo e comportamento territorial.',
    Hábitos: 'Passa o dia na água para se refrescar e sai à noite para se alimentar de gramíneas.',
    Reprodução: 'A gestação dura cerca de 8 meses e nasce um filhote por vez, geralmente na água.',
    Conservação: 'Vulnerável devido à caça e à perda de habitat, embora ainda exista em boas populações em várias regiões da África.',
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
        <Text style={styles.headerTitle}>Território 4</Text>
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