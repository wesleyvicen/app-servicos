import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Button, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import api from '../../services/api';
import NetInfo from '@react-native-community/netinfo';

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
  Description,
  TextDescription,
  ViewPerfil,
  TextConection,
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
  icon: {
    fontSize: 200,
    flex: 1,
  },
});

const User = ({route, navigation}) => {
  const {id} = route.params;
  let [contato, setContato] = useState([]);
  let [data, setData] = useState([]);
  let [isModalVisible, setModalVisible] = useState(false);
  let [isInternetReachable, setIsInternetReachable] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsInternetReachable(state.isInternetReachable);
    });
    unsubscribe();
    if (isInternetReachable) {
      loadUsers();
    }
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
      {isInternetReachable ? (
        <TextConection />
      ) : (
        <TextConection>
          <Icon style={styles.icon} name="pipe-disconnected" color="#E63946" />
          {`\n`}
          Poooxa, Você não está conectado...
        </TextConection>
      )}
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
            <ViewPerfil>
              <Perfil source={{uri: contato.urlImage}} />
            </ViewPerfil>
            <Description style={styles.item}>
              <TextDescription>{contato.description}</TextDescription>
            </Description>
            <FlatList
              data={contato.contact}
              keyExtractor={(index) => `list-item-${index.id}`}
              renderItem={({item}) => {
                if (item.whatsapp) {
                  return (
                    <>
                      <ButtonContato
                        style={[styles.item]}
                        onPress={() =>
                          Linking.openURL(
                            `https://api.whatsapp.com/send?phone=55${item.num}&text=Vim%20pelo%20Contrate%20J%C3%A1!`,
                          )
                        }>
                        <Icon name="whatsapp" size={26} color="#25d366" />
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
                        style={[styles.item]}
                        onPress={() => Linking.openURL(`tel:${item.num}`)}>
                        <Icon name="phone" size={26} color="#E63946" />
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
