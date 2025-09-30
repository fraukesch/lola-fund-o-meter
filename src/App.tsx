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
        May: [
            5.01,  // transferred plus from Apr
            77,
            71.2,
            120,
            51.5,
            120, // from Felix and Frauke
            108.5,
            229.85,
            40,
            171.8,
        ],
        Jun: [
            131,
            86,
            133,
            100, // from Felix and Frauke
            133.45,
            144.63,
        ],
        Jul: [
            178.1, // cash
            28.08, // plus from June
            100, // from Felix and Frauke
            12, // PayPal on Wednesday
            170,
            61.5,
        ],
        Aug: [
            148.5,
            108,
            187.65,
            337.10,
            102,
            180, // from Felix and Frauke
            155,
            112.5,
        ],
        Sep: [
            8.43, // plus from Aug minus deficit from July,
            397.5,
            348.98, // First two Sundays
            236.70,
            143.9,
            126.6,
            40, // from Felix
            50, // from Frauke 
        ],
        Okt: [
            92.11, // plus from Sep
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
                <Month name='May' sum={accumulateMonth(donations['2025'].May)} sundays={4} wednesdays={4} pricePerHour={72}/>
                <Month name='June' sum={accumulateMonth(donations['2025'].Jun)} sundays={5} pricePerHour={72}/>
                <Month name='July' sum={accumulateMonth(donations['2025'].Jul)} sundays={4} pricePerHour={72}/>
                <Month name='August' sum={accumulateMonth(donations['2025'].Aug)} sundays={9} pricePerHour={72}/>
                <Month name='September' sum={accumulateMonth(donations['2025'].Sep)} sundays={4} wednesdays={4} pricePerHour={90}/>
                <Month name='October' sum={accumulateMonth(donations['2025'].Oct)} sundays={4} wednesdays={5} pricePerHour={85}/>
            </Year>
            </Year>

        </Accordion>
      </Flex>
  )
}

export default App
