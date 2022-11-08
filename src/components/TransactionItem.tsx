import { Box, Text } from 'native-base'
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
    <Box flexDirection="row" justifyContent="space-between"  my={2}>
      <Box flexDirection="row" alignItems='center'>
        {data.value <= 0 ? (
          <ArrowCircleDown weight={'bold'} size={20} color="#53BD13" />
        ) : (
          <ArrowCircleUp weight={'bold'} size={20} color="#eb3737" />
        )}
        <Text fontSize='md' fontFamily='medium' ml={2} color='black.500'>{data.title}</Text>
      </Box>
      <Text fontSize='md' fontFamily='bold'>{data.value}</Text>
    </Box>
  )
}
