import { StatusBar} from 'expo-status-bar';
import {View, Modal,Text, Pressable, Image} from 'react-native';
import styles from './style';   
import React, { useState } from 'react';

export default function Territorio() {
  
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const [animal] = useState([
    {nome: 'Onça Pintada',
    imagem: require('../../Assets/Images/oncapintada.jpg'),
    descricao: 'A onça-pintada é o maior felino das Américas e o terceiro maior do mundo, depois do tigre e do leão. Ela é conhecida por sua pelagem amarela com manchas pretas em forma de rosetas, que lhe conferem uma camuflagem eficaz na floresta tropical.'  
  },
    {nome: 'Arara Azul',
    imagem: require('../../Assets/Images/ararazul.jpg'),
    descricao: 'A arara-azul é uma espécie de ave nativa da América do Sul, conhecida por sua plumagem azul vibrante e seu tamanho impressionante. Elas são encontradas principalmente na região do Pantanal e na Amazônia.'  
    }  

  ]);

  const value = animal[contador]; 

  const AbrirModal = (value) => {
    setVisible(true);
    setContador(value)
  }

  const FecharModal = () => {
    setVisible(false);
  }

  return (
    <View style={styles.container}>

        <Modal animationType="fade" visible={visible}>
          <Text>animal[contador].nome</Text>
          <Pressable onPress={() => FecharModal()}>
            <Text>Fechar Modal</Text>
          </Pressable>
        </Modal>

      

        <Pressable onPress={() => AbrirModal(value)} value={animal[0]}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal(value)} value={animal[1]}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>
        
        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>

        <Pressable onPress={() => AbrirModal()}>
         <Text>Abrir Modal</Text>
        </Pressable>
        

      <StatusBar style="auto" />
    </View>
  );
}