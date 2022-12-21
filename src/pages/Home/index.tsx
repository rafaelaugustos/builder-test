import React, {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {weatherAtom} from '../../store/atoms';
import Geolocation from '@react-native-community/geolocation';
import service from '../../services';

import {Container} from './style';

import Address from '../../components/Address';
import Stats from '../../components/Stats';

const App: React.FC = () => {
  const setWeather = useSetRecoilState(weatherAtom);
  const [address, setAddress] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    Geolocation.getCurrentPosition(async ({coords}) => {
      getAddress(coords.latitude, coords.longitude);
      const {data} = await service.get(coords.latitude, coords.longitude);

      setWeather(data);
    });
  };

  const getAddress = async (lat: number, long: number) => {
    const {data: addressResponse} = await service.address(lat, long);

    setAddress(addressResponse[0].name);
  };

  return (
    <Container>
      <Address name={address} update={getData} />
      <Stats />
    </Container>
  );
};

export default App;
