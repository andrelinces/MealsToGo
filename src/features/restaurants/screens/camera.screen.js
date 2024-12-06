// import React, { useRef, useState, useEffect } from "react";
// import { Camera } from "expo-camera";
// import styled from "styled-components/native";
// import { View, ActivityIndicator, Text } from "react-native";

// const ProfileCamera = styled(Camera)`
//   width: 100%;
//   height: 100%;
// `;

// export const CameraScreen = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   //   const [type, setType] = useState(null);
//   const [type, setType] = useState(Camera.current); // Set a default camera type
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       console.log("Requesting camera permissions...");
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       console.log("Permission status:", status);

//       setHasPermission(status === "granted");

//       if (status === "granted") {
//         console.log("Camera.Constants.Type:", Camera.Constants.Type);
//         setType(Camera.Constants.Type.front);
//       }
//     })();
//   }, []);

//   // Debugging logs for state changes
//   useEffect(() => {
//     console.log("hasPermission state changed:", hasPermission);
//     console.log("type state changed:", type);
//   }, [hasPermission, type]);

//   if (hasPermission === null) {
//     console.log("Camera permission is null, showing loading...");
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Requesting camera permissions...</Text>
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     console.log("No camera access, showing error message...");
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>No access to camera</Text>
//       </View>
//     );
//   }

//   if (!type) {
//     console.log("Camera type not set, showing loading...");
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Camera...</Text>
//       </View>
//     );
//   }

//   console.log("Rendering camera view...");
//   return (
//     <ProfileCamera
//       ref={(camera) => {
//         cameraRef.current = camera;
//       }}
//       type={type}
//     />
//   );
// };

//testing... mo cod

import React, { useRef, useState, useEffect } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../components/typography/text.component";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  console.log("Requesting camera permissions...");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(null); // Set a default camera type
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    console.log("No camera access, showing error message...");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  if (!type) {
    // Error, Warning: TypeError: Cannot read property 'Type' of undefined
    console.log("Camera type not set, showing loading...", type);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Camera...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
