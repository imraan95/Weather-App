import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ForecastList from './ForecastList';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherDisplay />
      <ForecastList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App; 