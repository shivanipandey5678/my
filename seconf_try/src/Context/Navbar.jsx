import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'
import { useContext } from "react";
import { AuthContext } from "./Authcontext";
import { Button,Flex } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'


export default function Navbar(){
      let navigate=useNavigate();
    let {userDetail:{email,isAuthenticated},logout}=useContext(AuthContext);
    return(
        <Flex
        justify="space-evenly"
        align="center"
        bg="gray"
        color="blue"
        p={4}>
           {isAuthenticated&&<h2>{email}</h2>}
           {isAuthenticated&&(<ChakraLink as={ReactRouterLink} to='/' >
               HOME
                </ChakraLink>)}
           {isAuthenticated&&(<Button colorScheme='blue' onClick={logout}>LOGOUT</Button>)}
           {!isAuthenticated&&(<Button colorScheme='blue' onClick={()=>{navigate("/login")}}>Login</Button>)}

        
        
        </Flex>
    )
}
