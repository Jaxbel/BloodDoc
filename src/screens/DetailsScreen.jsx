import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const DetailsScreen = ({ route }) => {
    const { patientData } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <DetailItem label="Nombre:" value={patientData.name} />
                <DetailItem label="Edad:" value={patientData.age} />
                <DetailItem label="Tipo de Sangre:" value={patientData.bloodType} />
                <DetailItem label="Presión Sistólica:" value={patientData.systolic} />
                <DetailItem label="Presión Diastólica:" value={patientData.diastolic} />
                <DetailItem label="Frecuencia Cardíaca:" value={patientData.heartRate} />
                <DetailItem label="SpO2:" value={`${patientData.spo2}%`} />
                <DetailItem label="Estado de Salud:" value={patientData.healthResult} />
            </ScrollView>
        </SafeAreaView>
    );
};

const DetailItem = ({ label, value }) => (
    <View style={styles.detailContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

DetailItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingVertical: 20,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#b22222',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 18,
        color: '#b22222',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default DetailsScreen;
