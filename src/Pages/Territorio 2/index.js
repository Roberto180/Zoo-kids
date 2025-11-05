import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView, SafeAreaView, Alert} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio2() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal = [
  {
    nome: 'Araras',
    imagem: require('../../../assets/araras.jpg'),
    Sobre: 'As araras são aves coloridas e inteligentes, pertencentes à família dos papagaios. Vivem principalmente nas florestas tropicais da América do Sul.',
    Hábitos: 'Vivem em pares ou bandos, alimentando-se de frutas, sementes e castanhas. São conhecidas por sua força no bico e grande capacidade vocal.',
    Reprodução: 'Formam casais para a vida toda. A fêmea bota de 2 a 4 ovos, e ambos os pais cuidam dos filhotes.',
    Conservação: 'Algumas espécies estão ameaçadas pela caça e tráfico ilegal, além da destruição do habitat.',
  },
  {
    nome: 'Papagaios',
    imagem: require('../../../assets/papagaio.jpg'),
    Sobre: 'Papagaios são aves tropicais conhecidas pela plumagem verde e pela habilidade de imitar sons e fala humana.',
    Hábitos: 'Vivem em grupos e são diurnos. Alimentam-se de frutas, sementes e flores.',
    Reprodução: 'Constroem ninhos em ocos de árvores, onde a fêmea põe de 2 a 5 ovos. Ambos os pais alimentam os filhotes.',
    Conservação: 'Ameaçados pelo tráfico ilegal e pela destruição de florestas tropicais.',
  },
  {
    nome: 'Serpentes',
    imagem: require('../../../assets/serpente.jpg'),
    Sobre: 'As serpentes são répteis sem patas que possuem grande variedade de tamanhos e hábitos, presentes em quase todos os habitats do planeta.',
    Hábitos: 'Podem ser diurnas ou noturnas; alimentam-se de pequenos mamíferos, aves e anfíbios. Algumas espécies são venenosas.',
    Reprodução: 'A maioria põe ovos, mas algumas espécies têm parto vivo. O número de filhotes varia muito entre espécies.',
    Conservação: 'Ameaçadas pela perseguição humana e destruição de habitats.',
  },
  {
    nome: 'Micos',
    imagem: require('../../../assets/mico.jpg'),
    Sobre: 'Os micos são pequenos primatas encontrados principalmente na Amazônia e na Mata Atlântica.',
    Hábitos: 'Vivem em grupos familiares, são diurnos e se alimentam de frutas, insetos e néctar.',
    Reprodução: 'A gestação dura cerca de 5 meses, e geralmente nascem gêmeos. Os pais cuidam dos filhotes juntos.',
    Conservação: 'Algumas espécies, como o mico-leão-dourado, estão ameaçadas devido à perda de habitat.',
  },
  {
    nome: 'Anfíbios',
    imagem: require('../../../assets/anfibio.jpg'),
    Sobre: 'Anfíbios incluem sapos, rãs e salamandras. São vertebrados que vivem parte da vida na água e parte em terra.',
    Hábitos: 'Geralmente noturnos, alimentam-se de insetos e outros invertebrados.',
    Reprodução: 'Realizam postura de ovos na água, de onde nascem girinos que passam por metamorfose.',
    Conservação: 'Muitas espécies estão ameaçadas pela poluição, fungos e destruição de habitats aquáticos.',
  },
  {
    nome: 'Formigueiro',
    imagem: require('../../../assets/tamandua.jpg'),
    Sobre: 'O tamanduá-bandeira, também chamado de formigueiro, é um mamífero que se alimenta principalmente de formigas e cupins.',
    Hábitos: 'Soltário e terrestre, usa suas garras longas para abrir formigueiros e cupinzeiros.',
    Reprodução: 'A fêmea tem um filhote por vez, que costuma ser carregado nas costas.',
    Conservação: 'Ameaçado pela caça e destruição do cerrado e de florestas tropicais.',
  },
  {
    nome: 'Invertebrados',
    imagem: require('../../../assets/invertebrados.jpg'),
    Sobre: 'Os invertebrados são animais sem coluna vertebral, incluindo insetos, aranhas, moluscos, crustáceos e muitos outros.',
    Hábitos: 'Possuem enorme variedade de hábitos e ambientes — de florestas a oceanos profundos.',
    Reprodução: 'Podem se reproduzir de forma sexuada ou assexuada, dependendo do grupo.',
    Conservação: 'Importantes para o equilíbrio ecológico, muitos estão ameaçados por pesticidas e destruição de habitats.',
  },
  {
    nome: 'Bosque Corujas do Mundo',
    imagem: require('../../../assets/coruja.jpg'),
    Sobre: 'Corujas são aves de rapina noturnas conhecidas por seus olhos grandes e visão apurada.',
    Hábitos: 'Caçam à noite, alimentando-se de pequenos mamíferos, insetos e aves. Têm voo silencioso.',
    Reprodução: 'Põem de 2 a 6 ovos, e a fêmea cuida dos filhotes enquanto o macho caça.',
    Conservação: 'Algumas espécies estão ameaçadas devido à perda de habitat e poluição.',
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
        <Text style={styles.headerTitle}>Território 2</Text>
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