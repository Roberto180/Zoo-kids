import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView, SafeAreaView, Alert} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio3() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal = [
  {
    nome: 'Espaço Xochimilco - Lar dos Axolotes',
    imagem: require('../../../assets/axolote.jpg'),
    Sobre: 'O axolote é um anfíbio mexicano conhecido por sua incrível capacidade de regenerar partes do corpo, como membros, coração e até partes do cérebro.',
    Hábitos: 'Vive em lagos e canais de água doce, sendo totalmente aquático. Alimenta-se de pequenos crustáceos, vermes e larvas.',
    Reprodução: 'A reprodução ocorre na água; a fêmea deposita centenas de ovos em plantas aquáticas. O desenvolvimento é direto, sem metamorfose completa.',
    Conservação: 'Criticamente ameaçado de extinção devido à poluição, perda de habitat e introdução de espécies invasoras nos lagos do México.',
  },
  {
    nome: 'Raposinha-do-campo',
    imagem: require('../../../assets/raposinha-do-campo.jpg'),
    Sobre: 'A raposinha-do-campo é um pequeno canídeo do Cerrado brasileiro, de corpo esguio e orelhas grandes, adaptada a ambientes abertos.',
    Hábitos: 'É crepuscular e noturna, alimentando-se de pequenos mamíferos, aves, insetos e frutas. Vive em pares ou sozinha.',
    Reprodução: 'A gestação dura cerca de 50 dias e nascem de 3 a 6 filhotes, geralmente em tocas.',
    Conservação: 'Apesar de não estar gravemente ameaçada, sofre com atropelamentos e destruição do habitat natural.',
  },
  {
    nome: 'Cachorro-do-mato',
    imagem: require('../../../assets/cachorro-do-mato.jpg'),
    Sobre: 'O cachorro-do-mato é um canídeo nativo da América do Sul, conhecido por sua pelagem acinzentada e comportamento cauteloso.',
    Hábitos: 'Onívoro e oportunista, alimenta-se de pequenos animais, frutas e carcaças. Vive em pares ou pequenos grupos.',
    Reprodução: 'A gestação dura cerca de 60 dias, resultando em 3 a 6 filhotes. Os pais participam do cuidado com os filhotes.',
    Conservação: 'Está em situação vulnerável devido à fragmentação de habitat, doenças e atropelamentos.',
  },
  {
    nome: 'Tamanduá-bandeira',
    imagem: require('../../../assets/tamandua-bandeira.jpg'),
    Sobre: 'O tamanduá-bandeira é um grande mamífero do Cerrado e da Amazônia, reconhecido por sua longa língua e cauda peluda característica.',
    Hábitos: 'Soltário e terrestre, alimenta-se principalmente de formigas e cupins, usando suas garras poderosas para abrir ninhos.',
    Reprodução: 'A fêmea tem um filhote por vez, que é carregado nas costas durante os primeiros meses de vida.',
    Conservação: 'Vulnerável à extinção por causa de incêndios, atropelamentos e perda de habitat.',
  },
  {
    nome: 'Urso-de-óculos',
    imagem: require('../../../assets/urso-de-oculos.jpg'),
    Sobre: 'O urso-de-óculos é o único urso nativo da América do Sul, encontrado nas florestas andinas, especialmente no Peru, Equador e Colômbia.',
    Hábitos: 'É onívoro, alimentando-se de frutas, bromélias e ocasionalmente de pequenos animais. Tem hábitos solitários e arborícolas.',
    Reprodução: 'A gestação dura cerca de 6 a 7 meses, e geralmente nascem dois filhotes.',
    Conservação: 'Vulnerável à extinção devido ao desmatamento e caça ilegal nas regiões montanhosas.',
  },
  {
    nome: 'Mundo Dino',
    imagem: require('../../../assets/dinossauro.jpg'),
    Sobre: 'Os dinossauros foram um grupo diversificado de répteis que dominaram a Terra por mais de 160 milhões de anos.',
    Hábitos: 'Variavam de herbívoros a carnívoros, vivendo em diferentes ambientes terrestres e aquáticos. Alguns eram sociais, outros solitários.',
    Reprodução: 'Botavam ovos, geralmente em ninhos coletivos. O cuidado parental variava entre as espécies.',
    Conservação: 'Extintos há cerca de 65 milhões de anos, possivelmente devido ao impacto de um asteroide e mudanças climáticas drásticas.',
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
        <Text style={styles.headerTitle}>Território 3</Text>
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