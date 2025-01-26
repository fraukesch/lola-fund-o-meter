import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Heading
} from '@chakra-ui/react'
import {Month} from './Month.tsx';

const donations = {
    Oct: [196, 66.50, 89.90, 62.50],
    Nov: [14.90, 132.60, 111, 62, 74.50, 95, 164, 79.10],
    Dec: [33.10, 175, 55, 138.5, 192, 31.40], // last value is filling the gap to complete funding of fee
    Jan: [92, 92, 93.3, 68.9, 95.2, 96.7]
}

const round2Decs = (x: number) => Math.round(x * 100) / 100

const accumulateMonth = (values: number[]) => values.reduce((val, acc) => round2Decs(acc + val), 0)

function App() {
  return (
      <Flex m={4} flexDirection='column'>

        <Heading as='h1' size='lg' mb={2}>Lola Fund-O-Meter</Heading>

        <Accordion allowToggle allowMultiple defaultIndex={[1]}>
            <AccordionItem>
                <AccordionButton>
                    <Heading as='h2' size='md' flex='1' textAlign='left'>
                        2024
                    </Heading>
                    <AccordionIcon />
            </AccordionButton>
                <AccordionPanel>
                    <Month name='October' sum={accumulateMonth(donations.Oct)} sundays={4} />
                    <Month name='November' sum={accumulateMonth(donations.Nov)} sundays={4} wednesdays={4}/>
                    <Month name='December' sum={accumulateMonth(donations.Dec)} sundays={4} wednesdays={3}/>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Heading as='h2' size='md' flex='1' textAlign='left'>
                        2025
                    </Heading>
                    <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel>
                    <Month name='January' sum={accumulateMonth(donations.Jan)} sundays={5} wednesdays={2}/>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
      </Flex>
  )
}

export default App
