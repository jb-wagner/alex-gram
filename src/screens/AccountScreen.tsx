import {
  StyleSheet,
  ViewStyle,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ActionSheetIOS
} from "react-native";
import { Camera, ImagePicker, CameraObject } from "expo";
import React from "react";
import { NavigationOptions } from "../navigation/RootNavigation";

const imageSize = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#334455"
  } as ViewStyle,
  header: {
    flex: 1
  } as ViewStyle,
  name: {
    color: "white",
    alignSelf: "center"
  },
  content: {
    flex: 2,
    marginLeft: 8,
    marginTop: 8,
    marginRight: 8,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "powderblue"
  },
  image: {
    height: imageSize,
    width: imageSize,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "blue",
    borderRadius: imageSize / 2
  },
  cameraButton: {
    padding: 4,
    fontSize: 18,
    marginBottom: 10,
    color: "white"
  },
  cameraButtonTouchable: {
    flex: 1
  },
  cameraButtonBar: {}
});

interface Props {}

interface State {
  name: string;
  image: any;
  cameraType: string;
  takingPhoto: boolean;
}

export default class AccountScreen extends React.Component<Props, State> {
  static navigationOptions: NavigationOptions = {
    title: "Account"
  };

  private camera: CameraObject | undefined;

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ name: "Alex Boyd", takingPhoto: false });
  }

  onTapImage() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Take Photo ...", "Select From Gallery ..."],
        title: "Update Profile Photo",
        cancelButtonIndex: 0
      },
      ((index: number) => {
        if (index === 1) {
          this.setState({ takingPhoto: true });
        } else if (index === 2) {
          this.onPickFromGallery();
        }
      }).bind(this)
    );
  }

  async onPickFromGallery() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (result.cancelled === false) {
      this.setState({ image: result.uri });
    }
  }

  async onTakePhoto() {
    if (this.camera == undefined) return;

    let photo = await this.camera.takePictureAsync({});
    this.setState({ image: photo.uri, takingPhoto: false });
  }

  render() {
    let camera = (
      <Camera
        style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}
        ref={(ref: any) => {
          this.camera = ref;
        }}
        type={this.state.cameraType}
      >
        <View
          style={{
            flex: 0,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={styles.cameraButtonTouchable}
            onPress={() => {
              this.setState({
                cameraType: this.state.cameraType === "back" ? "front" : "back"
              });
            }}
          >
            <Text style={styles.cameraButton}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButtonTouchable}
            onPress={this.onTakePhoto.bind(this)}
          >
            <Text style={styles.cameraButton}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButtonTouchable}
            onPress={() => {
              this.setState({ takingPhoto: false });
            }}
          >
            <Text
              style={[
                styles.cameraButton,
                {
                  color: "red",
                  textAlign: "right"
                }
              ]}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );

    let nonCamera = (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onTapImage.bind(this)}>
            {this.state.image != null ? (
              <Image
                style={styles.image}
                source={{ uri: this.state.image }}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.image} />
            )}
          </TouchableOpacity>
          <TextInput
            style={styles.name}
            onChangeText={text => this.setState({ name: text })}
          >
            {this.state.name}
          </TextInput>
        </View>
      </View>
    );

    return this.state.takingPhoto ? camera : nonCamera;
  }
}
