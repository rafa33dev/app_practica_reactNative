import  PushNotification  from "react-native-push-notification"

const requestPermissions = () => {
    PushNotification.requestPermissions();
  };

export const showNotification = (title, message) => {
    requestPermissions()
    PushNotification.localNotification({
      channelId: 'default-channel-id', // Debe ser el mismo que el definido en la configuración de canales de Android
      title: title,
      message: message,
      playSound: true,
      soundName: 'default',
      vibrate: true,
      vibration: 300,
      smallIcon: 'ic_notification', // Nombre del recurso ic_notification.png en la carpeta de recursos de Android
      actions: '["Ver", "Cerrar"]', // Puedes agregar acciones personalizadas en la notificación
    });
  };
  


