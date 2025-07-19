import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Build your skills, step by step
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
