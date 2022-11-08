import { Box, Divider, Text } from 'native-base'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react-native'

interface TransactionProps {
  type: string
  title: string
  value: number
  createdAt: string
}

interface DataProps {
  data: TransactionProps
}

export function TransactionItem({ data }: DataProps) {
  return (
    <>
      <Box flexDirection="row" justifyContent="space-between" my={2}>
        <Box flexDirection="row" alignItems="center">
          {data.type === 'income' ? (
            <ArrowCircleDown weight={'regular'} size={20} color="#53BD13" />
          ) : (
            <ArrowCircleUp weight={'regular'} size={20} color="#eb3737" />
          )}
          <Text fontSize="sm" fontFamily="bold" ml={2} color="black.500">
            {data.title}
          </Text>
        </Box>
        <Text fontSize="md" fontFamily="bold">
          {data.value}
        </Text>
      </Box>
    </>
  )
}
