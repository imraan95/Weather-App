import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sun, Droplets, Wind } from 'lucide-react-native';

const WeatherDisplay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>San Francisco</Text>
      <Text style={styles.temperature}>72°</Text>
      <Text style={styles.description}>Sunny</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Sun size={24} color="#FFD700" />
          <Text style={styles.detailText}>UV 2</Text>
        </View>
        <View style={styles.detailItem}>
          <Droplets size={24} color="#00BFFF" />
          <Text style={styles.detailText}>20%</Text>
        </View>
        <View style={styles.detailItem}>
          <Wind size={24} color="#7FFFD4" />
          <Text style={styles.detailText}>5 mph</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  location: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '200',
    color: '#fff',
  },
  description: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    marginTop: 5,
  },
});

export default WeatherDisplay; 