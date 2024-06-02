
import { Card, CardHeader, CardBody, CardFooter,Image ,Stack,Heading,Text,Divider,ButtonGroup,Button,StackDivider,Box} from '@chakra-ui/react'
import {useparams} from 'react-router-dom'
import { useState ,useEffect} from 'react';
import axios from 'axios';





export default function detailsFetch(){
    let [sinproduct,setSinProoduct]=useState({});
    let [err,setErr]=useState(false);
    let [loading,setLoading]=useState(false);

   let {id}=useparams();
   async function fetchingdet(id){
    setLoading(true)
    try {
       
        let res=await axios({
            method:"get",
            url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
        })
        setLoading(false)
        setSinProoduct(res?.data?.data)
       
    } catch (error) {
        setErr(true)
        setLoading(false)
    }
   }
   useEffect(()=>{
    fetchingdet(id)
},[id])

let {brand,title,image,category,price}=sinproduct;
return(
    <>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{brand}</Heading>
      <Text>
        {title}
      </Text>
      <Text>
        {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</>
  
)
    
}