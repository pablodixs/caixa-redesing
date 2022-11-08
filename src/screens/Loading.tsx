import { Center, Spinner, StatusBar } from 'native-base'

export function Loading() {
  return (
    <Center bgColor="blue.700" flex={1}>
      <Spinner color='white'/>
      <StatusBar barStyle="light-content" />
    </Center>
  )
}