import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sushisho() {
  return (
    <div className='hidden md:inline'>
      <motion.nav
        className='px-8 py-4 drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-white top-2 md:top-4 rounded-md mx-auto flex justify-between items-center'
        animate={{ y: 25 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/'
            className='visible'
            target='_blank'
            rel='noreferrer'
          >
            <p className='hover:text-primary transition-all cursor-pointer'>
              Home
            </p>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://wri.vercel.app/'
            className='visible'
            target='_blank'
            rel='noreferrer'
          >
            <p className='hover:text-primary transition-all cursor-pointer'>
              💎 Wri
            </p>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://helpdesksushijs.vercel.app/'
            className='visible'
            target='_blank'
            rel='noreferrer'
          >
            <p className='hover:text-primary transition-all cursor-pointer'>
              📃 Helpdesk
            </p>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://giveawaytool.vercel.app/'
            className='visible'
            target='_blank'
            rel='noreferrer'
          >
            <p className='hover:text-primary transition-all cursor-pointer'>
              🪅 GiveAway Tool
            </p>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://twitter.com/itamaesanorg'
            className='visible'
            target='_blank'
            rel='noreferrer'
          >
            <p className='hover:text-primary transition-all cursor-pointer'>
              🐦 Twitter
            </p>
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}
