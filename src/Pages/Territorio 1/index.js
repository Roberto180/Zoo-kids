import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView, SafeAreaView, Alert} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio1() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal = [
  {
    nome: 'Onça Pintada',
    imagem: require('../../../assets/onca-5666405.jpg'),
    Sobre: 'A onça-pintada é o maior felino das Américas, com pelagem amarela e manchas em forma de rosetas. É um predador de topo e símbolo da fauna sul-americana.',
    Hábitos: 'Predadora solitária e territorial, caça mamíferos, aves e répteis. É uma excelente nadadora, adaptada a florestas e áreas alagadas.',
    Reprodução: 'A gestação dura cerca de 3 a 4 meses, nascendo de 1 a 4 filhotes por ninhada. As fêmeas cuidam dos filhotes por até 2 anos.',
    Conservação: 'Quase ameaçada devido à caça e destruição do habitat, mas protegida por leis e programas de conservação.',
  },
  {
    nome: 'Onça Parda',
    imagem: require('../../../assets/oncaParda.jpg'),
    Sobre: 'Também chamada de puma ou suçuarana, a onça-parda é um grande felino de pelagem uniforme e hábitos discretos.',
    Hábitos: 'Habita florestas, montanhas e áreas abertas. Caça veados, capivaras e outros mamíferos de médio porte.',
    Reprodução: 'A gestação dura de 85 a 95 dias, e nascem de 1 a 4 filhotes. As fêmeas cuidam sozinhas da prole.',
    Conservação: 'Ameaçada localmente por perda de habitat e conflitos com humanos.',
  },
  {
    nome: 'Jacaré',
    imagem: require('../../../assets/jacare.jpg'),
    Sobre: 'O jacaré é um réptil semi-aquático encontrado em rios, lagoas e pântanos da América do Sul.',
    Hábitos: 'Predador que se alimenta de peixes, aves e pequenos mamíferos. Passa boa parte do tempo dentro d’água para se manter fresco.',
    Reprodução: 'A fêmea faz ninhos de vegetação e coloca entre 20 e 60 ovos, que protege até a eclosão.',
    Conservação: 'Algumas espécies já foram caçadas por sua pele, mas programas de manejo vêm recuperando populações.',
  },
  {
    nome: 'Cágado',
    imagem: require('../../../assets/cagado.jpg'),
    Sobre: 'O cágado é um réptil aquático de água doce, com carapaça achatada e pescoço comprido.',
    Hábitos: 'Alimenta-se de plantas aquáticas, pequenos peixes e invertebrados. Vive em rios, lagos e brejos.',
    Reprodução: 'A fêmea sai da água para enterrar seus ovos em locais secos e ensolarados.',
    Conservação: 'Ameaçado pela poluição e destruição dos ambientes aquáticos.',
  },
  {
    nome: 'Elefante',
    imagem: require('../../../assets/elefante-africano.jpg'),
    Sobre: 'O elefante é o maior mamífero terrestre, com tromba longa e presas de marfim. Possui grande inteligência e memória.',
    Hábitos: 'Vive em grupos familiares liderados por fêmeas. É herbívoro, alimentando-se de folhas, frutas e cascas.',
    Reprodução: 'A gestação dura cerca de 22 meses, resultando em um único filhote que recebe cuidados intensos da mãe e do grupo.',
    Conservação: 'Ameaçado pela caça e pela perda de habitat, especialmente o elefante-africano.',
  },
  {
    nome: 'Flamingo',
    imagem: require('../../../assets/flamingo.jpg'),
    Sobre: 'O flamingo é uma ave aquática conhecida por sua plumagem rosa e pernas longas e finas.',
    Hábitos: 'Vive em bandos próximos a lagos e lagoas, alimentando-se de crustáceos e algas que dão a cor rosada às penas.',
    Reprodução: 'Constrói ninhos de lama em forma de cone, onde coloca um único ovo.',
    Conservação: 'Algumas espécies estão ameaçadas pela poluição e pela destruição dos habitats aquáticos.',
  },
  {
    nome: 'Pequenos Felinos',
    imagem: require('../../../assets/pequeno.jpg'),
    Sobre: 'Os pequenos felinos incluem espécies como o gato-do-mato, jaguatirica e maracajá, todos de hábitos discretos.',
    Hábitos: 'São predadores solitários que caçam aves, roedores e pequenos répteis. Habitam florestas e cerrados.',
    Reprodução: 'A gestação varia entre 70 e 85 dias, com ninhadas de 1 a 4 filhotes.',
    Conservação: 'Ameaçados pela fragmentação florestal e caça ilegal por suas peles.',
  },
  {
    nome: 'Quati',
    imagem: require('../../../assets/Quati.jpg'),
    Sobre: 'O quati é um mamífero da família dos guaxinins, com focinho longo e cauda anelada. É curioso e muito adaptável.',
    Hábitos: 'Onívoro, alimenta-se de frutas, insetos e pequenos vertebrados. Vive em bandos e é ativo durante o dia.',
    Reprodução: 'A gestação dura de 10 a 11 semanas, e nascem de 2 a 7 filhotes.',
    Conservação: 'Relativamente comum, mas sofre com atropelamentos e perda de habitat.',
  },
  {
    nome: 'Lobo-Guará',
    imagem: require('../../../assets/guara.jpg'),
    Sobre: 'O lobo-guará é o maior canídeo da América do Sul, famoso por suas pernas longas e pelagem avermelhada.',
    Hábitos: 'Onívoro, alimenta-se de pequenos animais, frutos e insetos. É solitário e de hábitos crepusculares.',
    Reprodução: 'A gestação dura cerca de 65 dias, com ninhadas de 2 a 6 filhotes.',
    Conservação: 'Quase ameaçado, devido à destruição do Cerrado e atropelamentos.',
  },
  {
    nome: 'Iraras',
    imagem: require('../../../assets/iraras.jpg'),
    Sobre: 'As iraras são mamíferos carnívoros da família dos mustelídeos, encontradas em florestas e cerrados da América Central e do Sul.',
    Hábitos: 'São ágeis e boas caçadoras, alimentando-se de pequenos mamíferos, aves e frutos.',
    Reprodução: 'A gestação dura cerca de 2 meses, com ninhadas de 2 a 5 filhotes.',
    Conservação: 'Ameaçadas localmente pela caça e destruição do habitat natural.',
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
        <Text style={styles.headerTitle}>Território 1</Text>
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