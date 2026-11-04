import {Pressable, StyleSheet, Text} from "react-native";

interface BotaoCustomizadoProps{
    title:string;
    onPress: ()=> void;
}


export function BotaoCustomizado({title, onPress}:BotaoCustomizadoProps){
    return(
        <Pressable style={[styles.button,]}
        onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E8E4EE",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    width: 150,
    borderColor: "#8D1A5C",
    borderWidth: 3,
},
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: "#8D1A5C",
    textAlign: "center",
},
})