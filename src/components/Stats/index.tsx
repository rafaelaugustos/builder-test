import React from 'react';
import {useRecoilState} from 'recoil';
import {weatherAtom} from '../../store/atoms';
import {Container, Item, ItemText, ItemTitle} from './style';

const App: React.FC = () => {
  const [weather] = useRecoilState(weatherAtom);

  return (
    <Container>
      <Item>
        <ItemTitle>Umidade</ItemTitle>
        <ItemText>{weather.current.humidity}%</ItemText>
      </Item>
      <Item>
        <ItemTitle>Vento</ItemTitle>
        <ItemText>{weather.current.wind_speed}/ms</ItemText>
      </Item>
      <Item>
        <ItemTitle>Sensação</ItemTitle>
        <ItemText>{weather.current.feels_like.toFixed(0)}°</ItemText>
      </Item>
    </Container>
  );
};

export default App;
