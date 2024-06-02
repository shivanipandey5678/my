import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

export default function Error(){
    return(
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Something wrong</AlertTitle>
            <AlertDescription>Alert!!.</AlertDescription>
            </Alert>
    )
}