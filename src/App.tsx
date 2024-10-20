import {Box, Center, Flex, Heading, Progress, Text} from '@chakra-ui/react'

const donations = {
    Oct: [196, 66.50, 89.90]
}

function App() {
  const oktSum = donations.Oct.reduce((val, acc) => acc + val, 0);
  const oktPerc = oktSum/4;
  return (
      <Flex m={4} flexDirection='column'>
        <Heading as='h1' size='lg' mb={2}>Lola Fund-O-Meter</Heading>
        <Box shadow='md' borderWidth='1px'>
            <Heading as='h2' size='md' m={2}>October</Heading>
            <Center m={4}>
                <Box position='relative' width='90%' maxWidth='800px'>
                    <Progress
                        value={oktPerc}
                        colorScheme='purple'
                    />
                    <Flex width='100%' justifyContent='space-between' mt={2}>
                        <Text fontWeight='bold' color='purple.600'>{`${oktSum} €`}</Text>
                        <Text>400 €</Text>
                    </Flex>
                </Box>
            </Center>
        </Box>
      </Flex>
  )
}

export default App
