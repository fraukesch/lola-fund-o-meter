import {Box, Center, Flex, Heading, Progress, Text} from '@chakra-ui/react';

export const Month = (
    {
        name,
        sum,
        sundays,
        wednesdays = 0,
        pricePerHour = 50,
    }: {name: string, sum: number, sundays: number, wednesdays?: number, pricePerHour?: number}
) => (
    <Box shadow='md' borderWidth='1px' mb={4}>
        <Heading as='h3' size='sm' m={2}>{name}</Heading>
        <Center m={4}>
            <Box position='relative' width='90%' maxWidth='800px'>
                <Progress
                    value={sum / (sundays * 2 * pricePerHour + wednesdays * 1.5 * pricePerHour) * 100}
                    colorScheme='purple'
                />
                <Flex width='100%' justifyContent='space-between' mt={2}>
                    <Text fontWeight='bold' color='purple.600'>{`${sum} €`}</Text>
                    <Text>{sundays * 2 * pricePerHour + wednesdays * 1.5 * pricePerHour} €</Text>
                </Flex>
            </Box>
        </Center>
    </Box>
)