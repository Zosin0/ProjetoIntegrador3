// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const QRCodeScreen = () => {
//   const [qrCodeData, setQRCodeData] = useState(null);

//   const handleGenerateQRCode = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/qrcodes');
//       setQRCodeData(response.data);
//     } catch (error) {
//       console.error('Erro ao gerar QR code:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Gerar QR Code</Text>
//       <Button title="Gerar QR Code" onPress={handleGenerateQRCode} />
//       {qrCodeData && (
//         <View>
//           <Text>{qrCodeData}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default QRCodeScreen;