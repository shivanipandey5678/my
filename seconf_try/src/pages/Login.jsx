import { Heading ,Input,Button,VStack,Container} from '@chakra-ui/react'

export default function Login(){

    return (<Container maxW="800px">
        <VStack spacing={6 }>
         <Heading as='h2' size='xl'>
           Login PAGE
        </Heading>
        <Input placeholder='Email' size='lg'type='email'  />
        <Input placeholder='password' size='lg'  type='password'/>
        <Button colorScheme='teal' variant='solid'>
            Submit
        </Button>
        
        </VStack>
        
       </Container>
    )
}