import {
    Accordion,
    Flex,
    Heading
} from '@chakra-ui/react'
import {Month} from './Month.tsx';
import {Year} from './Year.tsx';

const donations = {
    '2024': {
        Oct: [196, 66.50, 89.90, 62.50],
        Nov: [14.90, 132.60, 111, 62, 74.50, 95, 164, 79.10],
        Dec: [33.10, 175, 55, 138.5, 192, 31.40], // last value is filling the gap to complete funding of fee
    },
    '2025': {
        Jan: [92, 92, 93.3, 68.9, 95.2, 96.7, 105],
        Feb: [98, 100, 97, 200, 104],
        Mar: [
            74, // transferred plus from Feb
            141, 73, 95.08, 45.2, 109, 160.2, 88.21, 117
        ],
        Apr: [
            102.69, // transferred plus from Mar
            310,
            106.42,
            63,
            239.9,
            120, // from Felix and Frauke
            71,
        ],
    }
}

const round2Decs = (x: number) => Math.round(x * 100) / 100

const accumulateMonth = (values: number[]) => values.reduce((val, acc) => round2Decs(acc + val), 0)

function App() {
  return (
      <Flex m={4} flexDirection='column'>

        <Heading as='h1' size='lg' mb={2}>Lola Fund-O-Meter</Heading>

        <Accordion allowToggle allowMultiple defaultIndex={[1]}>

            <Year year='2024'>
                <Month name='October' sum={accumulateMonth(donations['2024'].Oct)} sundays={4} />
                <Month name='November' sum={accumulateMonth(donations['2024'].Nov)} sundays={4} wednesdays={4}/>
                <Month name='December' sum={accumulateMonth(donations['2024'].Dec)} sundays={4} wednesdays={3}/>
            </Year>

            <Year year='2025'>
                <Month name='January' sum={accumulateMonth(donations['2025'].Jan)} sundays={5} wednesdays={2}/>
                <Month name='Febuary' sum={accumulateMonth(donations['2025'].Feb)} sundays={3} wednesdays={3}/>
                <Month name='March' sum={accumulateMonth(donations['2025'].Mar)} sundays={5} wednesdays={4}/>
                <Month name='April' sum={accumulateMonth(donations['2025'].Apr)} sundays={4} wednesdays={4} pricePerHour={72}/>
            </Year>

        </Accordion>
      </Flex>
  )
}

export default App
