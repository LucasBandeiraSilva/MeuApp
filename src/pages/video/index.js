import React, { useCallback, useState } from "react";
import { View, StyleSheet, ActivityIndicator,useWindowDimensions } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation'

const VIDEO_HEIGHT = 180;
const SCREEN_SPACE = 24;

export default function videoScreen() {
  const {width} = useWindowDimensions();
  const [videoReady, setVideoReady] = useState(false);
  const VIDEO_WIDTH = width - (SCREEN_SPACE*2);

  const onFullScreenChange = useCallback((isFullScreen)=> {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    
  },{});

  return (
    <View style={styles.container}>
    <View style={styles.player}>
      <YoutubeIframe
        videoId="iXaNLlkmwps"
        width={VIDEO_WIDTH}
        height={videoReady ? VIDEO_HEIGHT: 0}
        onReady={() => setVideoReady(true)}
        onFullScreenChange={onFullScreenChange}
      />
      {!videoReady && <ActivityIndicator color="red" />}
    </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: SCREEN_SPACE,
    backgroundColor:'#000'
  },
  player: {
    width: "100%",
    height: VIDEO_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
});
