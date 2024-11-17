import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const MainLayout = ({ children }: any) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    position: 'absolute',
    margin: 10,
    bottom: 10,
    width: '100%'
  }
});

export default MainLayout;