import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';

export default function Modals({animationTypes, visibles, onRequestCloses}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType={animationTypes}
        transparent={true}
        visible={visibles}
        onRequestClose={onRequestCloses}
      />
    </View>
  );
}
