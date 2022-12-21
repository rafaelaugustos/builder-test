import React from 'react';
import {useRecoilState} from 'recoil';
import {weatherAtom} from '../../store/atoms';
import {Container, Text, TextWeather, Desc, Button, ButtonText} from './style';

interface Props {
  update: () => void;
  name: string;
}

const App: React.FC<Props> = ({update, name}) => {
  const [weather] = useRecoilState(weatherAtom);

  return (
    <Container>
      <Text>{name}</Text>
      <TextWeather>{weather.current.temp.toFixed(0)}°</TextWeather>
      <Desc>{weather.current.weather[0]?.description}</Desc>
      <Button onPress={update}>
        <ButtonText>Atualizar</ButtonText>
      </Button>
    </Container>
  );
};

export default App;
