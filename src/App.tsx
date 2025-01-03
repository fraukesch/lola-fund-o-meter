import {Flex, Heading} from '@chakra-ui/react'
import {Month} from './Month.tsx';

const donations = {
    Oct: [196, 66.50, 89.90, 62.50],
    Nov: [14.90, 132.60, 111, 62, 74.50, 95, 164, 79.10],
    Dec: [33.10, 175, 55, 138.5, 192]
}

function App() {
  return (
      <Flex m={4} flexDirection='column'>
        <Heading as='h1' size='lg' mb={2}>Lola Fund-O-Meter</Heading>
        <Month name='October' sum={donations.Oct.reduce((val, acc) => acc + val, 0)} sundays={4} />
        <Month name='November' sum={donations.Nov.reduce((val, acc) => acc + val, 0)} sundays={4} wednesdays={4}/>
        <Month name='December' sum={donations.Dec.reduce((val, acc) => acc + val, 0)} sundays={4} wednesdays={3}/>
      </Flex>
  )
}

export default App
