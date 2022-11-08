import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts } from 'expo-font'

import { THEME } from './src/styles/theme'

import { Login } from './src/screens/Login'
import { Loading } from './src/screens/Loading'
import { Summary } from './src/screens/Summary'

export default function App() {
  const [fontsLoaded] = useFonts({
    AvenirRegular: require('./assets/fonts/Avenir-Regular.otf'),
    AvenirMedium: require('./assets/fonts/Avenir-Medium.otf'),
    AvenirBold: require('./assets/fonts/Avenir-Bold.otf'),
    AvenirBlack: require('./assets/fonts/Avenir-Black.otf'),
  })

  return (
    <NativeBaseProvider theme={THEME}>
      {!fontsLoaded ? <Loading /> : <Summary />}
      <StatusBar
        barStyle="light-content"
        backgroundColor="blue.500"
        translucent
      />
    </NativeBaseProvider>
  )
}
