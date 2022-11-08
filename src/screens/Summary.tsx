import { ScrollView, VStack, Box, Text, HStack, Button } from 'native-base'
import { CaretCircleDown } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

import LogoIcon from '../assets/icon.svg'
import PixIcon from '../assets/pix-icon.svg'
import PayIcon from '../assets/payments-icon.svg'
import ExtratoIcon from '../assets/extrato-icon.svg'

import { transactions } from '../utils/transactions'

import { TransactionItem } from '../components/TransactionItem'

export function Summary() {
  return (
    <VStack flex={1} bgColor="white.200">
      <Box
        height="35%"
        bgColor="blue.500"
        px={4}
        pt={20}
        pb={12}
        justifyContent="space-between"
      >
        <Box flexDirection="row" justifyContent="space-between">
          <TouchableOpacity>
            <Box flexDirection="row">
              <Text color="white.100" fontFamily="bold" fontSize="lg" mr={2}>
                Olá, Pablo!
              </Text>
              <CaretCircleDown size={24} weight={'fill'} color="#ffffff" />
            </Box>
          </TouchableOpacity>
          <LogoIcon />
        </Box>
        <Box flex={1} flexDirection="column" justifyContent="flex-end" mb={2}>
          <Text fontFamily="bold" color="blue.100" fontSize="md">
            Saldo disponível
          </Text>
          <Text fontFamily="heading" fontSize="xl" color="white.100">
            R$ 1.240,50
          </Text>
        </Box>
        <HStack mb={-24} justifyContent="space-between">
          <Box
            alignItems="center"
            justifyContent="center"
            width={100}
            height={100}
            padding={4}
            bgColor="white.100"
            borderRadius={10}
            borderWidth={1}
            borderColor="black.alpha"
          >
            <PixIcon />
            <Text color="blue.800" fontSize="md" fontFamily="bold" mt={2}>
              Pix
            </Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width={100}
            height={100}
            padding={4}
            bgColor="white.100"
            borderRadius={10}
            borderWidth={1}
            borderColor="black.alpha"
          >
            <PayIcon />
            <Text color="blue.800" fontSize="md" fontFamily="bold" mt={2}>
              Pagar
            </Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width={100}
            height={100}
            padding={4}
            bgColor="white.100"
            borderRadius={10}
            borderWidth={1}
            borderColor="black.alpha"
          >
            <ExtratoIcon />
            <Text color="blue.800" fontSize="md" fontFamily="bold" mt={2}>
              Extrato
            </Text>
          </Box>
        </HStack>
      </Box>
      <ScrollView mt={12} p={4}>
        <Box
          flex={1}
          bgColor="white.100"
          borderRadius={10}
          py={3}
          px={4}
          borderColor="black.alpha"
          borderWidth={1}
          marginBottom={4}
        >
          <Text fontSize="md" fontFamily="bold" color="blue.500">
            Meu cartão
          </Text>
        </Box>
        <Box
          flex={1}
          bgColor="white.100"
          borderRadius={10}
          py={3}
          px={4}
          borderColor="black.alpha"
          borderWidth={1}
          marginBottom={4}
        >
          <Text fontSize="md" fontFamily="bold" color="blue.500">
            Últimas movimentações
          </Text>
          {transactions.map((item, index) => {
            return <TransactionItem data={item} key={index} />
          })}
          <Button borderRadius={100} bgColor="blue.500">
            Ver todas as movimentações
          </Button>
        </Box>
      </ScrollView>
    </VStack>
  )
}
