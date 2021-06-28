import { NativeModules, Platform } from "react-native";

const { NotificationSounds } = NativeModules;

export default NotificationSounds;

export const playSampleSound = (soundObject) => {
  const sound = soundObject.url;
  NotificationSounds.playSample(sound);
};
export const getDefaultSound = async () => {
  const defaultUrl = await NotificationSounds.getDefaultSound();
  return defaultUrl;
};

export const stopSampleSound = () => {
  // const sound = Platform.OS === 'ios' ? soundObject.soundID : soundObject.url;
  NotificationSounds.stopSample();
};
