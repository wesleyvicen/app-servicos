import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Text,
  Avatar,
  Button,
  BackText,
  TextConection,
} from './styles';
import MenssageInitial from '../Components/menssageInitial';
import api from '../../services/api';

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
  icon: {
    fontSize: 200,
    flex: 1,
  },
});

const Main = ({navigation}) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [isFetching, setIsFetching] = useState(false);
  let [isInternetReachable, setIsInternetReachable] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsInternetReachable(state.isInternetReachable);
    });
    unsubscribe();
    if (isInternetReachable) {
      loadCategory();
    }
  }, []);

  async function loadCategory() {
    try {
      setLoading(true);
      let response = await api.get('/category/lists');
      setData(response.data);
      setIsFetching(false);
      setLoading(false);
      console.tron.log(response);
    } catch (error) {
      console.tron.log(error);
    }
  }

  function onRefresh() {
    setIsFetching(true), loadCategory();
  }

  const columns = 2;
  return (
    <>
      <MenssageInitial />
      <Container>
        {isInternetReachable ? (
          <TextConection />
        ) : (
          <TextConection>
            <Icon
              style={styles.icon}
              name="pipe-disconnected"
              color="#E63946"
            />
            {`\n`}
            Poooxa, Você não está conectado...
          </TextConection>
        )}

        <FlatList
          data={data}
          keyExtractor={(item) => `list-item-${item.id}`}
          numColumns={columns}
          showsVerticalScrollIndicator={false}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
          renderItem={({item}) => {
            return (
              <>
                <Button
                  style={styles.item}
                  onPress={() =>
                    navigation.navigate('SubCategory', {
                      name: item.name,
                      id: item.id,
                    })
                  }>
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <>
                      <Avatar source={{uri: item.urlImage}} />
                      <BackText>
                        <Text></Text>
                      </BackText>
                      <Text>{item.name}</Text>
                    </>
                  )}
                </Button>
              </>
            );
          }}
        />
      </Container>
    </>
  );
};

export default Main;
