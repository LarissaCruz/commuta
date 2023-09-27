import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  logoContainer: {
    flex: 1 / 1.1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 56,
  },
  logo: {
    width: 156,
    height: 156,
    borderRadius: 10,
  },
  title: {
    fontFamily: "MontserratMedium",
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    marginBottom: 28,
  },
  link: {
    color: "#8178FF",
    textDecorationLine: "underline",
    textAlign: "right",
  },
  input: {
    backgroundColor: "white",
    fontFamily: "MontserratRegular",
    lineHeight: 24,
    marginBottom: 28,
  },
  button: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  primaryButton: {
    backgroundColor: "#4B3EFF",
  },
  secondaryButton: {
    backgroundColor: "white",
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
    color: "white",
  },
  secondaryButtonText: {
    color: "#4B3EFF",
  },
  orText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
  },
});
export default styles;
