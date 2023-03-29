import { ImageBackground } from "react-native";
import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, TextInput, ScrollView, Image } from "react-native";

const Register = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [answer, setAnswer] = useState("");
  return <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.heading}>Welcome back!</Text>
        <TabView tabTitles={["Register", "Login"]} selected={selectedTab} onPress={setSelectedTab} style={styles.tabView} />
        <Input text="Email address" value={email} onChange={setEmail} />
        <Input text="Password" value={password} onChange={setPassword} />
        <Input text="Confirm password" value={confirmPassword} onChange={setConfirmPassword} />
        <Input text="Phone number" value={phoneNumber} onChange={setPhoneNumber} />
        <Input text="How did you hear about us?" value={answer} onChange={setAnswer} />
        <Button buttonText="Register" style={styles.button} />
      </ScrollView>
    <ImageBackground style={styles.FTagMlLZ} source={{
      uri: "data:image/png;base64,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"
    }} resizeMode="cover"></ImageBackground></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 23,
    color: "#000"
  },
  tabView: {
    width: "80%"
  },
  button: {
    marginTop: 30
  },
  LVpdfMbU: {
    height: 38,
    width: 50,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  gOTXcYdf: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  CXeNXtfT: {
    width: 186,
    height: 123
  },
  FTagMlLZ: {
    width: 107,
    height: 62
  }
});
export default Register;

const Input = props => {
  return <View style={[inputStyles.inputContainer, props.containerStyle]}>
      {props.text ? <Text style={inputStyles.inputText}>{props.text}</Text> : null}

      <TextInput style={[inputStyles.input, props.style, props.textArea ? inputStyles.textArea : null]} placeholder={props.placeholder ? props.placeholder : "Enter"} value={props.value} onChangeText={() => props.onChange()} placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "#9B9B9B"} editable={props.editable !== false} autoCapitalize="none" autoCorrect={false} multiline={!!props.textArea} />
      {props.errorText ? <Text style={inputStyles.error}>{props.errorText}</Text> : null}
      {props.icon ? <Image source={props.icon} style={props.text ? inputStyles.iconWithText : inputStyles.iconWithoutText} /> : null}
      <View style={styles.children}>{props.children}</View>
    </View>;
};

const inputStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center"
  },
  inputText: {
    fontSize: 14,
    marginLeft: 20,
    color: "#111112"
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%",
    height: 50,
    color: "#000"
  },
  iconWithText: {
    position: "absolute",
    right: 30,
    top: 48,
    width: 15,
    height: 15,
    resizeMode: "contain"
  },
  iconWithoutText: {
    position: "absolute",
    right: 30,
    top: 28,
    width: 15,
    height: 15,
    resizeMode: "contain"
  },
  textArea: {
    height: 150
  },
  children: {}
});

const Button = params => {
  const backgroundColor = params.color || "#000";
  const textColor = params.textColor || "#fff";
  const btnStyle = {
    backgroundColor: backgroundColor,
    borderColor: params.outlineColor || backgroundColor,
    borderWidth: 1
  };
  const btnText = {
    color: textColor
  };
  return <View style={[buttonStyles.btnContainer, params.style]}>
      <View style={!params.hideShadow ? buttonStyles.shadowContainer : null}>
        <Pressable style={[buttonStyles.btn, btnStyle]} onPress={params.onPress}>
          <Text style={[buttonStyles.btnText, btnText]}>
            {params.buttonText}
          </Text>
          <View style={styles.childrenContainer}>{params.children}</View>
        </Pressable>
      </View>
    </View>;
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center"
  },
  shadowContainer: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  btn: {
    height: 50,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  childrenContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});

const TabView = ({
  tabTitles,
  selected,
  onPress,
  tabColor,
  backgroundColor,
  style,
  icons
}) => {
  const tabColorStyle = {
    backgroundColor: tabColor || "#fff"
  };
  const backgroundColorStyle = {
    backgroundColor: backgroundColor || "#F1F1F1"
  };
  const propStyle = style || {};
  return <View style={[tabViewStyles.paletteContainer, backgroundColorStyle, propStyle]}>
      {tabTitles.map((title, index) => <Pressable onPress={() => onPress ? onPress(index) : null} style={index === selected ? [tabViewStyles.selected, tabColorStyle, tabViewStyles.tabItem] : [tabViewStyles.unSelected, backgroundColorStyle, tabViewStyles.tabItem]} key={index}>
          {icons ? <Image source={icons[index]} style={[tabViewStyles.icon, index === selected ? tabViewStyles.selectedIcon : tabViewStyles.unSelectedIcon]} /> : null}
          <Text>{title}</Text>
        </Pressable>)}
    </View>;
};

const tabViewStyles = StyleSheet.create({
  paletteContainer: {
    height: 48,
    backgroundColor: "#E4E4E4",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 6,
    marginVertical: 10
  },
  tabItem: {
    borderRadius: 10,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  selected: {
    shadowColor: "gray",
    elevation: 10
  },
  unSelected: {
    backgroundColor: "#f1f1f1"
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 5
  },
  selectedIcon: {
    tintColor: "#000"
  },
  unSelectedIcon: {
    tintColor: "#7C7C7C"
  }
});