import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

function Testimonio(props) {
  const getTestimonioText = () => {
    switch (props.imagen) {
      case require('../IMAGENES/1.png'):
        return {
          nombre: "Shawn Wang en Singapur",
          cargo: "Ingeniero de Software en Amazon",
          testimonio: "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        };
      case require('../IMAGENES/2.png'):
        return {
          nombre: "Sarah Chima en Nigeria",
          cargo: "Ingeniera de Software en ChatDesk",
          testimonio: "FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        };
      case require('../IMAGENES/3.png'):
        return {
          nombre: "Emma Bostian en Suecia",
          cargo: "Ingeniera de Software en Spotify",
          testimonio: "Siempre he tenido dificultades para aprender a programar, hasta que descubrí freeCodeCamp. En cuestión de meses, conseguí mi primer trabajo como desarrolladora. freeCodeCamp me cambió la vida."
        };
      default:
        return {
          nombre: "",
          cargo: "",
          testimonio: ""
        };
    }
  };

  const { nombre, cargo, testimonio } = getTestimonioText();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.imagen} />
      <View style={styles.content}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.cargo}>{cargo}</Text>
        <Text style={styles.testimonio}>{testimonio}</Text>
      </View>
    </View>
  );
}

export default Testimonio;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 10,
  },
  image: {
    flex: 1,
    borderRadius: 8,
    marginRight: 10,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cargo: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  testimonio: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});
