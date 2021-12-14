declare module 'react-native-notification-sounds' {
  export interface Sound {
    soundID: string
    url: string
    title: string
  }

  export function playSampleSound(s: Sound): void
  export function stopSampleSound(): void
  export function getDefaultSound(): Promise<string>
  
  const NotificationSounds = { getNotifications(type: string): Promise<Sound[]> };
  export default NotificationSounds
}
