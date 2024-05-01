import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

// Dados das vacinas
const vacinas = [
  { id: 1, texto: 'Já tomou a vacina contra gripe (Influenza)?' },
  { id: 2, texto: 'Já tomou a vacina pneumocócica conjugada (VPC13)?' },
  { id: 3, texto: 'Já tomou a vacina contra hepatite B?' },
  { id: 4, texto: 'Já tomou a vacina contra febre amarela?' },
  { id: 5, texto: 'Já tomou a vacina HPV4 contra o Papilomavírus humano?' },
  { id: 6, texto: 'Já tomou a vacina VSR contra o Vírus Sincicial Respiratório?' },
  { id: 7, texto: 'Já tomou a Vacina dupla bacteriana do tipo adulto dT?' },
  { id: 8, texto: 'Já tomou a vacina contra hepatite B?' },
];

const VaccineForm = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          respostas: vacinas.reduce((acc, vacina) => {
            acc[vacina.id] = ''; // Inicializa todas as respostas como vazio
            return acc;
          }, {})
        }}
        onSubmit={(values) => {
          console.log('Respostas do formulário:', values);
          // Aqui você pode enviar as respostas para a sua API no Vercel
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            {vacinas.map(vacina => (
              <View key={vacina.id} style={styles.inputContainer}>
                <Text style={styles.text}>{vacina.texto}</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={[styles.button, values.respostas[vacina.id] === 'Sim' && styles.buttonSelected]} onPress={() => handleChange(`respostas.${vacina.id}`, 'Sim')}>
                    <Text>Sim</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, values.respostas[vacina.id] === 'Não' && styles.buttonSelected]} onPress={() => handleChange(`respostas.${vacina.id}`, 'Não')}>
                    <Text>Não</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={{ color: 'white' }}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonSelected: {
    backgroundColor: 'blue',
    color: 'white',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default VaccineForm;
