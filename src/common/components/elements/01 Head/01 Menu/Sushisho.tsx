// Welcome to SushiJS at SushiJS.com by ITAMAESAN at Itamaesan.org
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
          <Link href='https://wri.sushijs.com/'>     
            <a className='hover:text-primary transition-all cursor-pointer'>
              💎 Wri
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://helpdesk.sushijs.com/'>
            <a className='hover:text-primary transition-all cursor-pointer'>
              📃 Helpdesk
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
              🍣 SushiJS
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://github.com/itamaesanorg/Giveaway-Tool'>
            <a className='hover:text-primary transition-all cursor-pointer'>
              🪅 GiveAway Tool
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://twitter.com/itamaesanorg'>
          <a className='hover:text-primary transition-all cursor-pointer'>
              🐦 Twitter
            </a>
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}
