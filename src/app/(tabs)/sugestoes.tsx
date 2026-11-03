import {View, Text, StyleSheet} from 'react-native'

export default function Sugestoes(){
     
    return(
        <View style={syles.container}>
         
        </View>
    )
    
}

const syles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#a81f6b",
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
})