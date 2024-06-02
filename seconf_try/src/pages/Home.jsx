import axios from 'axios';
import { useState ,useEffect} from 'react';
import Loading from '../component/Loading';
import Error from '../component/Error';
import {useNavigate} from 'react-router-dom'
import Carding from '../component/productCrds';
import { Select,Flex,SimpleGrid } from '@chakra-ui/react'


export default function Home(){
    let [product,setProoduct]=useState([]);
    let [err,setErr]=useState(false);
    let [loading,setLoading]=useState(false);


    async function fetch(){
        setLoading(true)
        try {
            let query={};
            let res=await axios({
                method:"get",
                url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
            })
            setLoading(false)
            setProoduct(res?.data?.data)
           
        } catch (error) {
            setErr(true)
            setLoading(false)
        }
       
    }
    useEffect(()=>{
        fetch()
    },[])
    return(
        <>
        <Flex>
        <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
        <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
        </Flex>
        <SimpleGrid columns={{base:1,md:2,lg:3}}>
            {product.map((e)=>(
              <Carding {...e} key={e.id}/>
            ))}
        </SimpleGrid>

        
        
        
        </>
    )
}