import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image, ScrollView} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio1() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const animal =[
    {nome: 'Onça Pintada',
    imagem: require('../../../assets/onca-5666405.jpg'),
    descricao: 'A onça-pintada é o maior felino das Américas e o terceiro maior do mundo, depois do tigre e do leão. Ela é conhecida por sua pelagem amarela com manchas pretas em forma de rosetas, que lhe conferem uma camuflagem eficaz na floresta tropical.'  
  },
    {nome: 'Arara Azul',
    imagem: require('../../../assets/arara-azul.jpg'),
    descricao: 'A arara-azul é uma espécie de ave nativa da América do Sul, conhecida por sua plumagem azul vibrante e seu tamanho impressionante. Elas são encontradas principalmente na região do Pantanal e na Amazônia.'  
    }  

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

        <Modal animationType="fade" visible={visible}>
           
            <View>
              <Text>{animal[contador].nome}</Text>
              <Image source={animal[contador].imagem} style={styles.imagem} />
              <Text>{animal[contador].descricao}</Text>
              <Pressable onPress={FecharModal}>
                <Text>Fechar Modal</Text>
              </Pressable>
            </View>
        </Modal>

      

        <Pressable onPress={() => AbrirModal(0)}>
         <Image source={require('../../../assets/onca-5666405.jpg')} style={styles.img}
         resizeMode='contain'
         ></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(1)} >
         <Image source={require('../../../assets/')} style={styles.img}
         resizeMode='contain'
         ></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(2)}>
        <Image source={require('../../../assets/jacare.jpg')} style={styles.img}></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(3)}>
         <Image source={require('../../../assets/cagado.jpg')} style={styles.img}></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(4)}>
         <Image source={require('../../../assets/elefante-africano.jpg')} style={styles.img}></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(5)}>
         <Image source={require('../../../assets/flamingo.jpg')} style={styles.img}></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(6)}>
         <Image source={require('../../../assets/pequenos.jpg')} style={styles.img}></Image>
        </Pressable>
        
        <Pressable onPress={() => AbrirModal(7)}>
         <Image source={require('../../../assets/Quati.jpg')} style={styles.img}></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(8)}>
         <Image source={require('../../../assets/guara.jpg')} style={styles.img}></Image>
        </Pressable>

        <Pressable onPress={() => AbrirModal(9)}>
         <Image source={require('../../../assets/iraras.jpg')} style={styles.img}></Image>
        </Pressable>
        

      <StatusBar style="auto" />
    </ScrollView>
  );
}