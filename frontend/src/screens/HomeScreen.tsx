import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ScreenProps } from "../types";
import { useUser } from "@clerk/clerk-expo";

const HomeScreen = ({ navigation }: ScreenProps<"HomeScreen">) => {
  const { user } = useUser();

  console.log("user", user);

  useEffect(() => {
    if (!user) return;

    if (!user.publicMetadata?.isRegistered) {
      navigation.navigate("RegisterUserScreen");
    }
  }, [user, navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.mapContainer}>
        <Image
          source={require("../assets/images/map.png")}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <Text style={styles.buttonText}>EXPLORE MAP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CameraScreen")}
        >
          <Ionicons
            name="camera-outline"
            size={24}
            color="#FFFFFF"
            style={styles.cameraIcon}
          />
          <Text style={styles.buttonText}>TAKE PHOTO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    overflow: "hidden",
  },
  mapImage: {
    width: "125%",
    height: "125%",
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 40,
    gap: 16,
  },
  button: {
    backgroundColor: "#FF4444",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  cameraIcon: {
    marginRight: 12,
  },
});
