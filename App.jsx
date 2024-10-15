import React, { useCallback, useEffect, useState } from "react"
import { Dimensions, FlatList, Image, ImageBackground, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SvgXml } from "react-native-svg"
import ICONS from "./Assets/Icons"

const App = () => {
  const [messages, setMessages] = useState([{ message: "Hi", id: 1 },]);
  const [chat, setChat] = useState("")
  const [popUp, setPopUp] = useState(false)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const address = "Raviteja Illuri"
  const handleEnterkeyBoard = (e) => {
    const putMessage = { message: chat, id: new Date() }
    setMessages([...messages, putMessage])
    setChat("")
  }

  // console.log(messages, "messages")
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <SafeAreaView style={Styles.container} >
      <View style={Styles.headerContainer}>
        <View style={Styles.innerHeader}>
          <SvgXml xml={ICONS.LeftArrow} />
          <Image
            source={require('./Assets/PNG/humanFace.jpg')}
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
          />
          <Text style={Styles.userName} >{address} </Text>
        </View>
        <View style={Styles.secondinnerContainer} >
          <SvgXml xml={ICONS.VideoCall} style={{ marginRight: 5 }} />
          <SvgXml xml={ICONS.TelePhone} style={{ marginLeft: 5 }} />
          <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: 5 }} onPress={() => setPopUp(!popUp)}>
            <SvgXml xml={ICONS.DotedIcons} />
          </TouchableOpacity>
        </View>
      </View>
      {popUp && <View style={Styles.popUpStyles} >

      </View>}
      <ImageBackground source={require('./Assets/PNG/humanFace.jpg')} resizeMode="cover" style={Styles.behindImage} >
        <FlatList
          data={messages}
          decelerationRate={0.5}
          style={Styles.chatContainer}
          renderItem={({ item, index }) => {
            return (
              <View key={item.id}  >
                <Text style={[Styles.chatTxt, { marginBottom: index === messages.length - 1 && "17%" }]} >
                  {item.message}
                </Text>
              </View>
            )
          }}
          keyExtractor={item => item.id}
        />
        <View style={Styles.inputContainer} >
          <TextInput  style={Styles.messageBox} placeholder="start Message ...." value={chat} onChangeText={(e) => setChat(e)} onSubmitEditing={(e) => handleEnterkeyBoard(e)} />
          <TouchableOpacity activeOpacity={0.7} style={Styles.microPhoneBox} >
            <SvgXml xml={ICONS.MicroPhone} />
          </TouchableOpacity>
        </View>
      </ImageBackground >
    </SafeAreaView>
  )
}
export default App
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-between",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    position: "absolute",
    top: 0,
    zIndex: 1
  },
  innerHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  secondinnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    color: "#000"
  },
  chatContainer: {
    backgroundColor: "transparent",
    paddingTop: "12%",
    marginBottom: "20%",
  },
  messageBox: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "85%"
  },
  inputContainer: {
    position: "absolute",
    bottom: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  microPhoneBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  popUpStyles: {
    height: 200,
    position: "absolute",
    right: 5,
    top: 45,
    zIndex: 2,

    width: 150,
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 10,
  },
  behindImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  chatTxt: {
    marginTop: 5,
    backgroundColor: "green",
    borderRadius: 10,
    padding: 15,
    marginLeft: 10,
    color: "#fff",
    alignSelf: "flex-start",
    // marginBottom:20
  }

})