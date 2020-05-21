import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Button, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import api from '../../services/api';

import {
  Container,
  Container2,
  Text,
  Text2,
  Avatar,
  Box,
  BottomHalfModal,
  ViewContato,
  ButtonContato,
  TextModal,
} from './styles';

const styles = StyleSheet.create({
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});

const User = ({route}) => {
  const {id} = route.params;
  let [contato, setContato] = useState([]);
  let [data, setData] = useState([]);
  let [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      let response = await api.get(`/user/lists/${id}`);
      setData(response.data.data);
      console.tron.log(response.data.data);
    } catch (error) {
      console.tron.log(error);
    }
  }

  const toggleModal = (contato) => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      setContato(contato);
    } else {
      setContato([]);
    }
  };

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(index) => `list-item-${index.id}`}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <>
              <Box
                style={styles.item}
                onPress={() => toggleModal(item.contacts)}>
                <Avatar source={{uri: item.urlImage}} />
                <Container2>
                  <Text style={styles.item}>{item.name}</Text>
                  <Text2>{item.servicos}</Text2>
                </Container2>
              </Box>
              <Modal
                testID={'modal'}
                isVisible={isModalVisible}
                backdropOpacity={0.3}
                style={styles.modal}>
                <BottomHalfModal>
                  <ViewContato>
                    <FlatList
                      data={contato}
                      keyExtractor={(index) => `list-item-${index.id}`}
                      renderItem={({item}) => (
                        <>
                          <ButtonContato
                            style={styles.button}
                            onPress={() => Linking.openURL(`tel:${item.num}`)}>
                            <Icon name="call" size={26} color="#eb3b3d" />
                            <TextModal>
                              {'   '}
                              Ligar para:{' '}
                              {item.num
                                .replace(/\D/g, '')
                                .replace(/(\d{0})(\d)/, '$1($2')
                                .replace(/(\d{2})(\d)/, '$1) $2')
                                .replace(/(\d{5})(\d)/, '$1 $2')}
                            </TextModal>
                          </ButtonContato>
                        </>
                      )}
                    />
                    <Button title="Cancelar" onPress={toggleModal} />
                  </ViewContato>
                </BottomHalfModal>
              </Modal>
            </>
          );
        }}
      />
    </Container>
  );
};

export default User;
