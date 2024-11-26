import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';

const FlexBoxLayout = () => {
  const showMessage = (boxNumber) => {
    Alert.alert(`Box ${boxNumber}`);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://th.bing.com/th/id/R.a40b697350e5c303990b6eed71cc9b21?rik=YQOc5VUesrdW9w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-fcW-wzY7LrQ%2fUPzwf_Jm2xI%2fAAAAAAAAANU%2feEvGjluPrIw%2fs1600%2fAbu-abu.png&ehk=i0kmpcX8Lh9z2W22G72%2fbehDR3degAAFooCwEQ8NCnQ%3d&risl=&pid=ImgRaw&r=0' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>TUGAS DPM PERTEMUAN 2</Text>
        <TouchableOpacity style={styles.box1} onPress={() => showMessage(1)}>
          <Text style={styles.boxText}>Box 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2} onPress={() => showMessage(2)}>
          <Text style={styles.boxText}>Box 2</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    top: '-100%', 
    left: '29%',
    fontFamily: 'ModerneSans.ttf',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#640D5F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-10%', 
    left: '-40%',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#7BD3EA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-10%', 
    left: '-25%',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FlexBoxLayout;