import React from "react";
import {Text,SafeAreaView, TouchableOpacity,StyleSheet} from 'react-native';

const App = () => {
    return (
        <SafeAreaView  style={style.container}>
            <Text style={style.numero}>0</Text>
            <TouchableOpacity style={style.botao}>
                <Text style={style.texto}>Gerar número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#C8E6C9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numero: {
        fontSize: 35,
        color: '#03A9F4',
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#3F51B5',
        width: '60%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    texto: {
        fontSize: 32,
        color: '#03A9F4'
    }
})
export default App;