'use client'

import {MessageCircle } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Chat = () => {

    const chatCount = 0

  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <MessageCircle
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          0
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Chat (0)</SheetTitle>
        </SheetHeader>

        {chatCount > 0 ? (
          <>
            {/* Chat service */}
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div className='text-xl font-semibold'>
              No ongoing chats
            </div>
            <SheetTrigger asChild>
              <Link
                href='/products'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className:
                    'text-sm text-muted-foreground',
                })}>
                Chat People
              </Link>
            </SheetTrigger>
          </div>
        )}

      </SheetContent>
    </Sheet>
  )
}

export default Chat