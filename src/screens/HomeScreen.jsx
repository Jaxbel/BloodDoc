import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        bloodType: '',
        systolic: '',
        diastolic: '',
        heartRate: '',
        spo2: '',
        healthResult: '',
    });
    const [healthResult, setHealthResult] = useState('');

    const handleInputChange = (field, value) => {
        setForm(prevForm => ({ ...prevForm, [field]: value }));
    };

    const validateInputs = () => {
        const { name, age, bloodType, systolic, diastolic, heartRate, spo2 } = form;
        if (!name || !age || !bloodType || !systolic || !diastolic || !heartRate || !spo2) {
            setHealthResult("Por favor, complete todos los campos.");
            return false;
        }

        const ageInt = parseInt(age);
        const systolicInt = parseInt(systolic);
        const diastolicInt = parseInt(diastolic);
        const heartRateInt = parseInt(heartRate);
        const spo2Int = parseInt(spo2);

        if (isNaN(ageInt) || ageInt <= 0 || ageInt > 120 ||
            isNaN(systolicInt) || systolicInt <= 0 || systolicInt > 300 ||
            isNaN(diastolicInt) || diastolicInt <= 0 || diastolicInt > 200 ||
            isNaN(heartRateInt) || heartRateInt <= 0 || heartRateInt > 200 ||
            isNaN(spo2Int) || spo2Int < 0 || spo2Int > 100) {
            setHealthResult("Por favor, ingrese valores válidos.");
            return false;
        }

        return true;
    };

    const calculateHealth = () => {
        const { age, heartRate } = form;
        const ageInt = parseInt(age);
        const heartRateInt = parseInt(heartRate);

        let healthResult = "";

        if (ageInt <= 18) {
            healthResult = heartRateInt < 70 ? "Pulso Bajo" : heartRateInt <= 100 ? "Pulso Normal" : "Pulso Alto";
        } else if (ageInt <= 65) {
            healthResult = heartRateInt < 70 ? "Pulso Bajo" : heartRateInt <= 80 ? "Pulso Normal" : "Pulso Alto";
        } else {
            healthResult = heartRateInt < 60 ? "Pulso Bajo" : heartRateInt <= 100 ? "Pulso Normal" : "Pulso Alto";
        }

        setHealthResult(healthResult);
        return healthResult;
    };

    const handleSubmit = () => {
        if (!validateInputs()) return;
        const healthResult = calculateHealth();
        setForm(prevForm => ({ ...prevForm, healthResult }));
        navigation.navigate('Details', { patientData: { ...form, healthResult } });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Ingreso de Paciente</Text>
            <Image source={require('../../assets/blood-drop.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={value => handleInputChange('name', value)}
                value={form.name}
            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                onChangeText={value => handleInputChange('age', value)}
                value={form.age}
                keyboardType="numeric"
            />
            <Picker
                style={styles.input}
                selectedValue={form.bloodType}
                onValueChange={value => handleInputChange('bloodType', value)}
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
                onChangeText={value => handleInputChange('systolic', value)}
                value={form.systolic}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Presión Diastólica (mmHg)"
                onChangeText={value => handleInputChange('diastolic', value)}
                value={form.diastolic}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Frecuencia Cardíaca (bpm)"
                onChangeText={value => handleInputChange('heartRate', value)}
                value={form.heartRate}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Nivel de SpO2 (%)"
                onChangeText={value => handleInputChange('spo2', value)}
                value={form.spo2}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar Datos</Text>
            </TouchableOpacity>
            {healthResult && (
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
        color: '#b22222',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#ffe6e6',
        height: 40,
        borderColor: '#b22222',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#b22222',
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
        color: '#b22222',
    },
});

export default HomeScreen;
