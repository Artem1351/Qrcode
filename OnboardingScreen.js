import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const OnboardingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Обработка нажатия на кнопку "Вперед"
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Обучение завершено");
    }
  };

  // Функция для отображения текущего шага
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <View style={styles.screen}>
            <Text style={styles.title}>QR Scanner</Text>
            <View style={styles.line_gray}></View>
            <Text style={styles.description}>Select the type of QR code</Text>
            <Image
              source={require("../images/combat_screen1.png")}
              style={styles.combat_screen1}
            />
              <Text style={styles.title2}>Universal{"\n"}
            QR Code Scanner</Text>
            <Text style={styles.description2}>Scan QR codes{"\n"} 
            everywhere!</Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.screen}>
            <Text style={styles.title}>QR Scanner</Text>
            <View style={styles.line_gray}></View>
            <Image
              source={require("../images/combat_screen2.png")}
              style={styles.combat_screen1}
            />
             <Text style={styles.title2}>Universal{"\n"}
            QR Code Scanner</Text>
            <Text style={styles.description2}>Scan QR codes{"\n"} 
            everywhere!</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.screen}>
            <Text style={styles.title}>QR Scanner</Text>
            <View style={styles.line_gray}></View>
            <Image
              source={require("../images/combat_screen3.png")}
              style={styles.combat_screen1}
            />
               <Text style={styles.title2}>Universal{"\n"}
            QR Code Scanner</Text>
            <Text style={styles.description2}>Scan QR codes{"\n"} 
            everywhere!</Text>
          </View>
        );
      case 3:
        return (
          <View style={styles.screen}>
            <Text style={styles.title}>Экран 4</Text>
            <Text style={styles.description}>Это третий экран обучения.</Text>
          </View>
        );
      case 4:
        return (
          <View style={styles.screen}>
            <Text style={styles.title}>Экран 5</Text>
            <Text style={styles.description}>Это третий экран обучения.</Text>
          </View>
        );
      default:
        return null;
    }
  };

  // Отображение кружочков для пагинации
  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentStep ? "#F9F9F9" : "#A49D8F",
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["#FFF9F1", "#EBE1D3"]}
      style={styles.gradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.container}>
        <Image
          source={require("../images/bag_black1.png")}
          style={styles.bag_black1}
        />
        <Image
          source={require("../images/bag_black2.png")}
          style={styles.bag_black2}
        />
        <Image
          source={require("../images/bag_black3.png")}
          style={styles.bag_black3}
        />
        {renderCurrentStep()}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        {renderPagination()}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    width: 300,
    height: 600,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 50,
    color: "#1A1816"
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 17,
    color: "#828275"
  },
  pagination: {
    flexDirection: "row",
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    marginTop: 30,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 15.4959,
    width: "80%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#1E1E1E",
    fontSize: 24,
    fontWeight: "500"
  },
  bag_black1: {
    position: "absolute",
    // borderWidth: 1,
    // borderColor: "red",
    width: 300,
    height: 300,
    // bottom: 0,
    top: -1,
    left: 0,
  },
  bag_black2: {
    position: "absolute",
    // borderWidth: 1,
    // borderColor: "red",
    width: 100,
    height: 300,
    right: 0,
    top: 150,
  },
  bag_black3: {
    position: "absolute",
    // borderWidth: 1,
    // borderColor: "red",
    width: 300,
    height: 300,
    left: 0,
    bottom: 0,
  },
  line_gray: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#B9B9A9",
    opacity: 0.9,
    marginTop: 20,
  },
  combat_screen1: {
    width: 235,
    height: 285,
    marginTop: 15,
  },
  title2: {
    fontSize: 32.51,
    fontWeight: "bold",
    // marginBottom: 10,
    marginTop: 25,
    textAlign: "center",
    color: "#1A1816"
  },
  description2: {
    fontSize: 15.48,
    textAlign: "center",
    marginTop: 5,
     color: "#8D8476",
  },
});

export default OnboardingScreen;
