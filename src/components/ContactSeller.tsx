'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useChat } from '@/hooks/use-chat'
import { Product } from '@/payload-types'

const ContactSeller = ({
  product,
}: {
  product: Product
}) => {
  //const { addChat } = useChat()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  return (
    <Button
      onClick={() => {
        //addChat(product)
        setIsSuccess(true)
      }}
      size='lg'
      className='w-full'>
      {isSuccess ? 'Check the chat!' : 'Contact the seller'}
    </Button>
  )
}

export default ContactSeller