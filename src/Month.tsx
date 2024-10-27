import {Box, Center, Flex, Heading, Progress, Text} from '@chakra-ui/react';

export const Month = ({name, sum, sundays}: {name: string, sum: number, sundays: number}) => (
    <Box shadow='md' borderWidth='1px' mb={4}>
        <Heading as='h2' size='md' m={2}>{name}</Heading>
        <Center m={4}>
            <Box position='relative' width='90%' maxWidth='800px'>
                <Progress
                    value={sum / sundays}
                    colorScheme='purple'
                />
                <Flex width='100%' justifyContent='space-between' mt={2}>
                    <Text fontWeight='bold' color='purple.600'>{`${sum} €`}</Text>
                    <Text>{sundays * 100} €</Text>
                </Flex>
            </Box>
        </Center>
    </Box>
)