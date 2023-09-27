import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
  },
  navbar: {
    paddingTop: 40,
    paddingBottom: 18,
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
  },
  label: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    marginBottom: 28,
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
    marginVertical: 8,
  },
  photoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButton: {
    width: 124,
    height: 124,
    backgroundColor: "#C9C5FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
export default styles;
