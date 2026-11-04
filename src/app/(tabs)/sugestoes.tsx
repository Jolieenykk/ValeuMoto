import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Sugestoes(){
    const [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
});

if (!fontsLoaded) {
  return null; // or a loading indicator
}


  return (                    
        <ScrollView>
            <View style={styles.container}>
            
                <Text style={styles.title}> Cadastrar Sugestão</Text>
                <View>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                     placeholder="Digite seu nome"
                    style={styles.input}
                    />
                     <Text style={styles.label}>Sobrenome</Text>
                    <TextInput
                     placeholder="Digite seu sobrenome"
                    style={styles.input}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                     placeholder="Digite seu email"
                    style={styles.input}
                    />
                     <Text style={styles.label}>Telefone</Text>
                    <TextInput
                     placeholder="Digite seu telefone"
                    style={styles.input}
                    />
                    <Text style={styles.label}>Assunto</Text>
                    <TextInput
                     placeholder="Digite o assunto"
                    style={styles.input}
                    />
                     <Text style={styles.label}>Descrição da reclamação</Text>
                    <TextInput
                     multiline
                     numberOfLines={4}
                     placeholder="Digite a descrição da reclamação"
                    style={styles.input}
                    />
                </View>
                {/* onPress= envia um alert dizendo que a sugestão foi enviada */}
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
   
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F1F4FA",
},
input: {
    width: 320,
    height: 50,
    borderColor: "#060506",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000000",
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
},
  title: {
     fontFamily: 'Poppins_700Bold',
    fontSize: 33,
    color: "#E0007A",
    marginBottom: 20,
    marginTop: 65,
   
  },
    label: {
      fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: "#141314",
    marginBottom: 5,
  },
button: {
    backgroundColor: "#E0007A",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    minWidth: 250,
    alignItems: "center",
},
buttonText: {
            color: "#f1e1e1",
           fontFamily: 'Poppins_800ExtraBold',
            fontSize: 16,
            textAlign: "center",
}
});