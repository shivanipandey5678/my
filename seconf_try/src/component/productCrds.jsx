import { Card, CardHeader, CardBody, CardFooter,Image ,Stack,Heading,Text,Divider,ButtonGroup,Button,StackDivider,Box} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

export default function Carding({id,category,price,title}){
    let navigate=useNavigate();
    return(
        <Card key={id}>
        <CardHeader>
          <Heading size='md'>card</Heading>
        </CardHeader>
      
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
              title:{title}
              </Heading>
             
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
              category:{category}
              </Heading>
              
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
              price:{price}
              </Heading>
             
            </Box>
                <Button variant='solid' colorScheme='blue' onClick={()=>{navigate(`/home/${id}`)}}>
               view Detail
            </Button>
          </Stack>
        </CardBody>
      </Card>
    )
}