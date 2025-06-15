"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_status_bar_1 = require("expo-status-bar");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Reset_1 = __importDefault(require("./src/components/Reset"));
function App() {
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text>Choose a new password</react_native_1.Text>
      <expo_status_bar_1.StatusBar style="auto"/>
      <Reset_1.default />
    </react_native_1.View>);
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
