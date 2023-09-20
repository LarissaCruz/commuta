import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  containerLogo: {
    flex: 1 / 1.1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 56,
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    marginBottom: 28,
  },

  input: {
    backgroundColor: "white",
    fontFamily: "MontserratRegular",
    lineHeight: 24,
    marginBottom: 28,
  },
  link: {
    color: "#8178FF",
    textDecorationLine: "underline",
    textAlign: "right",
  },
  labelButton: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "white",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4B3EFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
  },
});
export default styles;
