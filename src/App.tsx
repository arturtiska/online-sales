import { SafeAreaView } from 'react-native';
import Login from './modules/login';

import { useState } from 'react';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
