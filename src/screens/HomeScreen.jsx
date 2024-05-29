import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [spo2, setSpo2] = useState('');
    const [healthResult, setHealthResult] = useState('');

    const validateInputs = () => {
        if (name.trim() === '' || age.trim() === '' || bloodType === '' || systolic.trim() === '' || diastolic.trim() === '' || heartRate.trim() === '' || spo2.trim() === '') {
            setHealthResult("Por favor, complete todos los campos.");
            return false;
        }
        const ageInt = parseInt(age);
        if (isNaN(ageInt) || ageInt <= 0 || ageInt > 120) {
            setHealthResult("Por favor, ingrese una edad válida.");
            return false;
        }
        const systolicInt = parseInt(systolic);
        if (isNaN(systolicInt) || systolicInt <= 0 || systolicInt > 300) {
            setHealthResult("Por favor, ingrese una presión sistólica válida.");
            return false;
        }
        const diastolicInt = parseInt(diastolic);
        if (isNaN(diastolicInt) || diastolicInt <= 0 || diastolicInt > 200) {
            setHealthResult("Por favor, ingrese una presión diastólica válida.");
            return false;
        }
        const heartRateInt = parseInt(heartRate);
        if (isNaN(heartRateInt) || heartRateInt <= 0 || heartRateInt > 200) {
            setHealthResult("Por favor, ingrese una frecuencia cardíaca válida.");
            return false;
        }
        const spo2Int = parseInt(spo2);
        if (isNaN(spo2Int) || spo2Int < 0 || spo2Int > 100) {
            setHealthResult("Por favor, ingrese un nivel de SpO2 válido.");
            return false;
        }
        return true;
    };

    const calculateHealth = () => {
        const ageInt = parseInt(age);
        const systolicInt = parseInt(systolic);
        const diastolicInt = parseInt(diastolic);
        const heartRateInt = parseInt(heartRate);
        const spo2Int = parseInt(spo2);

        let healthResult = "";

        // Calculate health based on age and vital signs
        if (ageInt <= 18) {
            if (heartRateInt < 70) {
                healthResult = "Pulso Bajo";
            } else if (heartRateInt <= 100) {
                healthResult = "Pulso Normal";
            } else {
                healthResult = "Pulso Alto";
            }
        } else if (ageInt <= 65) {
            if (heartRateInt < 70) {
                healthResult = "Pulso Bajo";
            } else if (heartRateInt <= 80) {
                healthResult = "Pulso Normal";
            } else {
                healthResult = "Pulso Alto";
            }
        } else {
            if (heartRateInt < 60) {
                healthResult = "Pulso Bajo";
            } else if (heartRateInt <= 100) {
                healthResult = "Pulso Normal";
            } else {
                healthResult = "Pulso Alto";
            }
        }

        // Check for healthy range
        if (
            (ageInt <= 18 && (heartRateInt >= 60 && heartRateInt <= 120)) ||
            (ageInt <= 65 && (heartRateInt >= 60 && heartRateInt <= 85)) ||
            (ageInt > 65 && (heartRateInt >= 60 && heartRateInt <= 100))
        ) {
            setHealthResult("Persona Saludable");
        } else {
            setHealthResult("Usted no cumple con los estándares de salud.");
        }
    };

    const handleSubmit = () => {
        if (!validateInputs()) return;
        calculateHealth();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Ingreso de Paciente</Text>
            <Image source={require('assets/blood-drop.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                onChangeText={setAge}
                value={age}
                keyboardType="numeric"
            />
            <Picker
                style={styles.input}
                selectedValue={bloodType}
                onValueChange={(itemValue, itemIndex) => setBloodType(itemValue)}
            >
                <Picker.Item label="Seleccionar Tipo de Sangre" value="" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
            </Picker>
            <TextInput
                style={styles.input}
                placeholder="Presión Sistólica (mmHg)"
                onChangeText={setSystolic}
                value={systolic}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Presión Diastólica (mmHg)"
                onChangeText={setDiastolic}
                value={diastolic}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Frecuencia Cardíaca (bpm)"
                onChangeText={setHeartRate}
                value={heartRate}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Nivel de SpO2 (%)"
                onChangeText={setSpo2}
                value={spo2}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar Datos</Text>
            </TouchableOpacity>
            {healthResult !== '' && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Estado de Salud: {healthResult}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#f4f4f4',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;
