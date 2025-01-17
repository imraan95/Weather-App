import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Cloud, Sun } from 'lucide-react-native';

const forecastData = [
  { id: '1', day: 'Mon', icon: Sun, temp: '75°' },
  { id: '2', day: 'Tue', icon: Sun, temp: '73°' },
  { id: '3', day: 'Wed', icon: Cloud, temp: '68°' },
  { id: '4', day: 'Thu', icon: Sun, temp: '72°' },
  { id: '5', day: 'Fri', icon: Sun, temp: '76°' },
];

const ForecastItem = ({ day, Icon, temp }) => (
  <View style={styles.forecastItem}>
    <Text style={styles.day}>{day}</Text>
    <Icon size={24} color="#FFD700" />
    <Text style={styles.temp}>{temp}</Text>
  </View>
);

const ForecastList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={forecastData}
        renderItem={({ item }) => (
          <ForecastItem day={item.day} Icon={item.icon} temp={item.temp} />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  forecastItem: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
    minWidth: 80,
  },
  day: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  temp: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ForecastList; 