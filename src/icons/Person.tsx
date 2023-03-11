import { Icon } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'



export default function Person(props) {
  return <Icon as={FaUserCircle} {...props}/>
}