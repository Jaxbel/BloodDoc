import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { patientData } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{patientData.name}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>Edad:</Text>
                    <Text style={styles.value}>{patientData.age}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>Tipo de Sangre:</Text>
                    <Text style={styles.value}>{patientData.bloodType}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>Presión Sistólica:</Text>
                    <Text style={styles.value}>{patientData.systolic}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>Presión Diastólica:</Text>
                    <Text style={styles.value}>{patientData.diastolic}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>SpO2:</Text>
                    <Text style={styles.value}>{patientData.spo2}%</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    scrollContainer: {
        paddingVertical: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 18,
        color: '#555',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default DetailsScreen;
