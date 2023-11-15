import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bgImage:{
        position: "relative",
        flex: 1,
     },
    container: {
        flex:1,
        backgroundColor: '#ec9826',
        paddingTop: 0,
        
        
    },
    buttontop: {
        backgroundColor: '#FFFFFF',
        height: 90,
        paddingTop: 20,
        
        flexDirection: 'row'

    },
    texticon:{
        backgroundColor: '#D2D7DD',
        marginLeft: 10,
        marginTop: 10,
        width: 50,
        height: 50,
        color: '#ec9826',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    textonome:{
        color: '#ec9826',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'justify',
        justifyContent: 'center',

        padding: 5,
    },
    textinfo: {

        color: '#686866',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify',
        justifyContent: 'center',
        paddingLeft : 10,
    },
    textentrar: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign : 'center',
        marginTop: 40,
        
    },
    viewbox: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        width: 250,
        
    },
    imagbox:{
        height: 28,
        width: 27,
    }
    
});