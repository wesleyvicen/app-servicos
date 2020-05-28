import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import api from '../../../services/api';

import {Container, Text, Option} from './styles';

// import { Container } from './styles';

const SubCategories = ({route, navigation}) => {
  const {id} = route.params;
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    loadSubCategories();
  }, []);

  async function loadSubCategories() {
    try {
      setLoading(true);
      let response = await api.get(`subcategory/lists/${id}`);
      setData(response.data.data);
      setIsFetching(false);
      setLoading(false);
    } catch (error) {
      console.tron.log(error);
    }
  }

  function onRefresh() {
    setIsFetching(true), loadSubCategories();
  }

  const columns = 1;
  return (
    <Container>
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
              <Option
                onPress={() =>
                  navigation.navigate('User', {
                    name: item.name,
                    id: item.id,
                  })
                }>
                <Text>{item.name}</Text>
              </Option>
            </>
          );
        }}
      />
    </Container>
  );
};

export default SubCategories;
