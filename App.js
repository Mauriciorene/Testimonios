import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Testimonio from './COMPONENTES/Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./IMAGENES/logo.png')} style={styles.logo} />

      <Text style={styles.tituloText}>Esto es lo que nuestros alumnos dicen sobre FreeCodeCamp:</Text>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Testimonio imagen={require('./IMAGENES/1.png')} />
        <Testimonio imagen={require('./IMAGENES/2.png')} />
        <Testimonio imagen={require('./IMAGENES/3.png')} />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: '100%',
    height: 80,
  },
  tituloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  scrollView: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20, 
  },
});
