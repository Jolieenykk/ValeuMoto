import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'

export default function Recarga(){
     
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Recarga do passe</Text>
                <View style={styles.saldoContainer}>
                    <Text style={styles.subtitle}>Saldo Atual</Text>
                    {/* aqui vai ser o saldo do usuário, que será puxado do banco de dados, por uma variável,
                    que irá ser alimentada de acorodo com o que o usuário for recarregando,
                    e também com o que ele for gastando, que será puxado do banco de dados */}
                    <Text style={styles.saldo}>R$ 12,00</Text>
                    {/* //aqui vai ser uma conta, que calculará quantas viajens o usuário poderá fazer
                     com o saldo atual, que será puxado do banco de dados, por uma variável,
                    //que irá ser alimentada de acorodo com o que o usuário for recarregando,
                    //  e também com o que ele for gastando, que será puxado do banco de dados */}
                    <Text style={styles.subtitle}>Sufuciente para 6 viagens de R$ 2,00</Text>
                </View>
                {/* Vai passar o valor digitado pelo usuário e adicionar ao saldo */}
                <View style={styles.recargaContainer}>
                     <Text style={styles.label}>Digite o número do seu passe</Text>
                    <TextInput
                     placeholder="(4 dígitos atrás do cartão)"
                    style={styles.input}
                    />
                    <Text style={styles.label}>Digite o valor da recarga</Text>
                    <TextInput
                     placeholder="Digite o valor da recarga"
                    style={styles.input}
                    />
                </View>
                <View style={styles.pagamentoContainer}>
                     <Text style={styles.labelBold}> Método de pagamento</Text>
                     <View style={styles.pixCartaoContainer}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                                <Text style={styles.buttonText}>Pix</Text>
                            </TouchableOpacity>
                     
                            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                                <Text style={styles.buttonText}>Cartão de Crédito</Text>
                            </TouchableOpacity>
{/*                         
                        <View style={styles.pixContainer}> */}
                            {/* No pontilhado vai estar o número que o cliente digitou no input */}
                            {/* <Text style={styles.label}> Recarregue .... com o código Pix abaixo </Text> */}
                            {/* <View style={styles.CodigoPixContainer}> */}
                                {/* <Text style={styles.label}>00020126BR.GOV.BCB.PIX-valeumoto-519r5n98-15.00 </Text> */}
                            {/* </View> */}
                        {/* </View> */}
                     </View>
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonConfirma}>
                            <Text style={styles.buttonTextConfirma}>CONFIRMAR RECARGA</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#F1F4FA ",
    },
    title:{
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 35,
        color: "#a81f6b",
        marginLeft: 8,
        marginTop: 65,
    },
    saldoContainer:{
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:"#8D1A5C",
        borderRadius: 25,
        padding: 20,
        width: 360,
        height: 170,
        marginTop: 20,
    },
    saldo:{
        fontFamily: 'Poppins_700Bold',
        fontSize: 40,
        color: "#fff",
    },
    subtitle:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: "#fff",
    },
     label: {
      fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: "#141314",
    marginBottom: 5,
  },
    labelBold: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 19,
        color: "#141314",
        marginTop: 5, 
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
recargaContainer:{
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:"#E8E4EE",
    borderRadius: 25,
    padding: 20,    
    marginTop: 20,
},
pixCartaoContainer:{
    flexDirection: 'row',
    alignItems:'center',
    gap: 20,
},
pagamentoContainer:{
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:"#E8E4EE",
    borderRadius: 25,
    padding: 20,    
    marginTop: 30,
    width: 360,
    marginBottom: 40,
},
button: {
    backgroundColor: "#E8E4EE",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    width: 150,
    borderColor: "#8D1A5C",
    borderWidth: 3,
},
buttonConfirma: {
    width: 320,
    backgroundColor: "#8D1A5C",
    borderRadius: 15,   
    padding: 15,
    marginTop: 15,
},
buttonTextConfirma:{
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
},
buttonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: "#8D1A5C",
    textAlign: "center",
},
pixContainer:{
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:"#E8E4EE",
    borderRadius: 25,
    padding: 20,
    marginTop: 30,
},
CodigoPixContainer:{
        alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:"#E8E4EE",
    borderRadius: 25,
    padding: 20,    
    marginTop: 30,
    width: 360,
    marginBottom: 40,
}

})