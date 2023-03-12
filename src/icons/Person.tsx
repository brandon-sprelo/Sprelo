import { Icon } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'



export default function Person(props: any) {
  return <Icon as={FaUserCircle} {...props}/>
}