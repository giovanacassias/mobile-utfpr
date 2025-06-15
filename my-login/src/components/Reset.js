"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const Reset = () => {
    const [password, setPassword] = (0, react_1.useState)("");
    const [passwordConfirmation, setPasswordConfirmation] = (0, react_1.useState)("");
    const [passwordIsValid, setPasswordIsValid] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        //console.log("Componente montado ou password alterada");
        let isValid = false;
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
        if (regex.test(password)) {
            //console.log("Senha válida!");
            //console.log(password);
            isValid = true;
            //console.log(isValid);
            setPasswordIsValid(true);
        }
        if (password !== passwordConfirmation) {
            isValid = false;
            //console.log(isValid);
        }
        setPasswordIsValid(isValid);
        console.log(passwordIsValid);
    }, [password, passwordConfirmation]);
    const handleReset = () => {
        console.log(`Password: ${password}`);
        console.log(`Password confirmation: ${passwordConfirmation}`);
        console.log(passwordIsValid);
    };
    return (<react_native_1.View>
      <react_native_1.TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry/>
      
      <react_native_1.TextInput placeholder="Password confirmation" value={passwordConfirmation} secureTextEntry onChangeText={(text) => setPasswordConfirmation(text)}/>

      {/* {!passwordIsValid && <Text>Senha inválida!</Text>} */}

      {(password.length > 0 || passwordConfirmation.length > 0) &&
            (passwordIsValid ? (<react_native_1.Text style={{ color: "green" }}>A senha é válida!</react_native_1.Text>) : (<react_native_1.Text style={{ color: "red" }}>Senha inválida!</react_native_1.Text>))}

      {passwordIsValid ? (<react_native_1.Button title="Reset password" disabled={false} onPress={handleReset}/>) : (<react_native_1.Button title="Reset password" disabled/>)}
    </react_native_1.View>);
};
exports.default = Reset;
//PRIMEIRA VERSÃO DO CÓDIGO
/*     if (regex.test(password)) {
      console.log("Senha válida!");
      console.log(password);
      isValid = true;
      console.log(isValid);
      setPasswordIsValid(true);
    } else {
      console.log("Senha continua inválida!");
      isValid = false;
      console.log(isValid);
      setPasswordIsValid(false);
    } */
