import { StyleSheet, View, Image, ImageBackground, Dimensions, Text} from 'react-native';

const DemoImagen = () => { 
return (
    <View style={styles.container}>

        <ImageBackground
            style={styles.fondo}
            source={require('../assets/miau.jpg')}
        >
            <View style={styles.container}>
                <Image
                    style={styles.foto}
                    source={{uri:'https://http.cat/205'}}
                /> 

                <Text style={styles.titulo}>Gatos APP</Text>
            </View>
        </ImageBackground>

    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fondo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 16,
    borderWidth: 10,
    borderColor: '#b14dcf',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    elevation: 9,
  },

  titulo: {
    color: '#d550da',
    fontSize: 60,
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    textAlign: 'center',
  },
});

export default DemoImagen;