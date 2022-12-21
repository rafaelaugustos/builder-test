import React from 'react';
import {SafeAreaView} from 'react-native';
import {RecoilRoot} from 'recoil';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#34495e'}}>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </SafeAreaView>
  );
};

export default App;
