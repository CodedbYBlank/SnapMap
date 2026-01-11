import { StyleSheet } from "react-native";

const SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 18,
    backgroundColor: "#FF5A7A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  /* SnapMap title */
  title: {
    fontSize: 36,
    fontWeight: "600",
    lineHeight: 40,
    letterSpacing: -0.9,
    textAlign: "center",
    color: "#111111",
    marginBottom: 12,
  },

  /* Subtitle */
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#6B6B6B",
    marginBottom: 40,
  },

  /* Button */
  googleButton: {
    width: "100%",
    backgroundColor: "#FF3B5C",
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: "center",
  },

  /* Button text */
  googleButtonText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: 0.45,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default SignInStyle;
