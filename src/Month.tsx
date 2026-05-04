import {Box, Center, Flex, Heading, Progress, Text} from '@chakra-ui/react';

type SessionsWithHoursAndPrice = {
    numberOfSessions: number;
    hours: number;
    pricePerHour: number;
};

export const Month = (
    {
        name,
        sum,
        sundays,
        wednesdays = 0,
        pricePerHour = 50,
        sessionsWithHoursAndPrice = [{numberOfSessions: sundays, hours: 2, pricePerHour}, {numberOfSessions: wednesdays, hours: 1.5, pricePerHour}]
    }: {
        name: string,
        sum: number,
        sundays: number,
        wednesdays?: number,
        pricePerHour?: number,
        sessionsWithHoursAndPrice: SessionsWithHoursAndPrice[]
    }
) => {
    const needed = sessionsWithHoursAndPrice.reduce((acc, it) => it.numberOfSessions * it.hours * it.pricePerHour + acc, 0)
    return (
        <Box shadow='md' borderWidth='1px' mb={4}>
            <Heading as='h3' size='sm' m={2}>{name}</Heading>
            <Center m={4}>
                <Box position='relative' width='90%' maxWidth='800px'>
                    <Progress
                        value={sum / needed * 100}
                        colorScheme='purple'
                    />
                    <Flex width='100%' justifyContent='space-between' mt={2}>
                        <Text fontWeight='bold' color='purple.600'>{`${sum} €`}</Text>
                        <Text>{needed} €</Text>
                    </Flex>
                </Box>
            </Center>
        </Box>
    )
}