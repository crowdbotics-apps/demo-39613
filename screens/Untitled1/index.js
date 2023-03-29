import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.akAYzzJD}><ImageBackground style={styles.AcYjwSOu} source={require("./Splash.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  tDhgBzov: {
    height: 569,
    width: 255,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  akAYzzJD: {
    height: 650,
    width: 360,
    backgroundColor: "#000000",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: -1,
    top: 0,
    transform: [{
      rotate: "0deg"
    }]
  },
  EtdvcBoH: {
    width: 358,
    height: 573
  },
  qPTLrglR: {
    width: 350,
    height: 110,
    lineHeight: 100,
    fontSize: 100,
    borderRadius: 0,
    fontFamily: "Roboto",
    textAlign: "center",
    color: "#ffffff"
  },
  AcYjwSOu: {
    width: 353,
    height: 573
  }
});
export default Untitled1;