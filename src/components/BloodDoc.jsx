import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { Picker } from '@react-native-picker/picker';

const BloodDoc = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [result, setResult] = useState(null);
    const [heartRate, setHeartRate] = useState('');
    const [healthResult, setHealthResult] = useState('');
    const [healthColor, setHealthColor] = useState('');

    const handleSubmit = () => {
        const ageInt = parseInt(age);

        if (isNaN(ageInt) || ageInt <= 0 || ageInt > 120) {
            setResult("Por favor, ingrese una edad válida.");
            return;
        }

        const heartRateInt = parseInt(heartRate);
        if (isNaN(heartRateInt) || heartRateInt <= 0 || heartRateInt > 200) {
            setResult("Por favor, ingrese una frecuencia cardíaca válida.");
            return;
        }
        
        let healthResult = "";
        if (ageInt <= 18) {
            if (heartRateInt < 60) {
                healthResult = "Pulso Bajo";
            } else if (heartRateInt <= 120) {
                healthResult = "Pulso Normal";
            } else {
                healthResult = "Pulso Alto";
            }
        } else if (ageInt <= 65) {
            if (heartRateInt < 60) {
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

        setResult(healthResult);

        // Agregamos la lógica para determinar si es una persona saludable
        if (
            (ageInt <= 18 && (heartRateInt >= 60 && heartRateInt <= 120)) ||
            (ageInt <= 65 && (heartRateInt >= 60 && heartRateInt <= 85)) ||
            (ageInt > 65 && (heartRateInt >= 60 && heartRateInt <= 100))
        ) {
            setHealthResult("Persona Saludable");
            setHealthColor("green");
        } else {
            setHealthResult("Usted no cumple con los estándares de salud.");
            setHealthColor("red");
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.heading}>Monitor de Salud</Text>
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
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
                <Picker.Item label="Seleccionar Género" value="" />
                <Picker.Item label="Masculino" value="male" />
                <Picker.Item label="Femenino" value="female" />
                <Picker.Item label="Otro" value="other" />
            </Picker>
            <Text style={styles.head2}>Latidos en estado de reposo</Text>
            <TextInput
                style={styles.input}
                placeholder="Latidos por Minuto"
                onChangeText={setHeartRate}
                value={heartRate}
                keyboardType="numeric"
            />
            <Button title="Evaluar Salud" onPress={handleSubmit} />
            {result && (
                <View style={styles.resultContainer}>
                    <Text style={styles.text}>Latidos por Minuto: {heartRate}</Text>
                    <Text style={[styles.resultText, { color: healthColor }]}>{result}</Text>
                    <Text style={[styles.healthResultText, { color: healthColor }]}>{healthResult}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
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
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
        
    },
    head2: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    healthResultText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 40,
    },
});

export default BloodDoc;
