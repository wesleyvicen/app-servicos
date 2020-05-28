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
  Perfil,
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

  backWhats: {
    backgroundColor: '#95cb85',
  },
  backTell: {
    backgroundColor: '#E14653',
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
      let response = await api.get(`/profession/lists/${id}`);
      setData(response.data.data);
      console.tron.log(response.data.data);
    } catch (error) {
      console.tron.log(error);
    }
  }

  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      setContato(item);
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
              <Box style={styles.item} onPress={() => toggleModal(item)}>
                <Avatar source={{uri: item.urlImage}} />
                <Container2>
                  <Text>{item.name}</Text>
                  <Text2>{item.description}</Text2>
                </Container2>
              </Box>
            </>
          );
        }}
      />
      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        backdropOpacity={0.3}
        onBackdropPress={toggleModal}
        style={styles.modal}>
        <BottomHalfModal>
          <ViewContato>
            <Perfil source={{uri: contato.urlImage}} />
            <Text2>{contato.description}</Text2>
            <FlatList
              data={contato.contact}
              keyExtractor={(index) => `list-item-${index.id}`}
              renderItem={({item}) => {
                if (item.whatsapp) {
                  return (
                    <>
                      <ButtonContato
                        style={[styles.item, styles.backWhats]}
                        onPress={() =>
                          Linking.openURL(
                            `https://api.whatsapp.com/send?phone=55${item.num}&text=Vim%20pelo%20Contrate%20J%C3%A1!`,
                          )
                        }>
                        <Icon name="call" size={26} color="white" />
                        <TextModal>
                          {'   '}
                          Whatsapp:{' '}
                          {item.num
                            .replace(/\D/g, '')
                            .replace(/(\d{0})(\d)/, '$1($2')
                            .replace(/(\d{2})(\d)/, '$1) $2')
                            .replace(/(\d{5})(\d)/, '$1 $2')}
                        </TextModal>
                      </ButtonContato>
                    </>
                  );
                } else {
                  return (
                    <>
                      <ButtonContato
                        style={[styles.item, styles.backTell]}
                        onPress={() => Linking.openURL(`tel:${item.num}`)}>
                        <Icon name="call" size={26} color="white" />
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
                  );
                }
              }}
            />
          </ViewContato>

          <Button title="Cancelar" onPress={toggleModal} />
        </BottomHalfModal>
      </Modal>
    </Container>
  );
};

export default User;
