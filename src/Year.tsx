import * as React from 'react';
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Heading} from '@chakra-ui/react';

export const Year = (
    {children, year}: {children: React.ReactNode, year: string}
) => (
    <AccordionItem>
        <AccordionButton>
            <Heading as='h2' size='md' flex='1' textAlign='left'>
                {year}
            </Heading>
            <AccordionIcon/>
        </AccordionButton>
        <AccordionPanel>
            {children}
        </AccordionPanel>
    </AccordionItem>
)