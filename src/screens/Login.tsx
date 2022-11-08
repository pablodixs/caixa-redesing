import {
  VStack,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Container,
} from 'native-base'
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import Logo from '../assets/logo.svg'
import FaceId from '../assets/faceid-icon.svg'

export function Login() {
  const hour = new Date().getHours()
  function greeting(data: number) {
    if (data <= 5) return 'Boa madrugada'
    if (data < 12) return 'Bom dia'
    if (data < 18) return 'Boa tarde'
    return 'Boa noite'
  }
  const greetingMessage = greeting(hour)

  return (
    <VStack
      bgColor="blue.700"
      flex={1}
      alignItems="center"
      justifyContent="flex-end"
    >
      <Container mb={40}>
        <Logo />
      </Container>
      <KeyboardAvoidingView behavior="padding">
        <Box
          bgColor="white"
          width="100%"
          padding={8}
          borderTopRadius={24}
          justifyContent="space-between"
        >
          <Box mb={16} onTouchEnd={Keyboard.dismiss}>
            <Heading color="blue.800" fontSize="xxl" fontFamily="heading">
              {greetingMessage}!
            </Heading>
            <Text color="black.500" fontWeight="medium" fontSize="md">
              Internet banking
            </Text>
          </Box>
          <Box width="100%">
            <Text color="gray.300" fontWeight="bold" fontSize="md">
              Usuário
            </Text>
            <Input
              borderWidth={0}
              borderBottomWidth={2}
              width="100%"
              borderRadius={0}
              placeholder="000.000.000-00"
              fontSize={26}
              fontFamily="heading"
              textAlign="left"
              padding={0}
              color="black.500"
              keyboardType="number-pad"
            />
            <TouchableOpacity>
              <Box
                my={6}
                alignItems="center"
                flexDirection="row"
                justifyContent="center"
              >
                <FaceId />
                <Text
                  fontSize={14}
                  color="gray.300"
                  marginLeft={2}
                  fontFamily="bold"
                >
                  Entrar com Face ID
                </Text>
              </Box>
            </TouchableOpacity>
            <Button
              onPress={Keyboard.dismiss}
              borderRadius="100%"
              bgColor="orange.500"
            >
              <Text fontFamily="black" fontSize={20} color="white">
                Entrar
              </Text>
            </Button>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              my={4}
            >
              <Button
                borderColor="gray.100"
                borderWidth={1}
                borderRadius="100%"
                bgColor="white"
                flex={1}
              >
                <Text fontFamily="bold" fontSize={14} color="black.300">
                  Alterar ou cadastrar usuário
                </Text>
              </Button>
              <Button
                borderColor="gray.100"
                borderWidth={1}
                borderRadius="100%"
                bgColor="white"
                marginLeft={4}
              >
                <Text fontFamily="bold" fontSize={14} color="black.300">
                  Ajuda
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
      </KeyboardAvoidingView>
      <StatusBar barStyle="light-content" />
    </VStack>
  )
}
