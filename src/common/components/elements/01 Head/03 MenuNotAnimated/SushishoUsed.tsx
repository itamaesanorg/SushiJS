import React from 'react'
import Link from 'next/link'

export default function Sushisho() {
  return (
    <div className='hidden md:inline'>
      <nav
      >
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://wri.sushijs.com/'>
            <p className='hover:text-primary transition-all cursor-pointer'>
              💎 Wri
            </p>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='https://helpdesk.sushijs.com/'>
            <p className='hover:text-primary transition-all cursor-pointer'>
              📃 Helpdesk
            </p>
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
      </nav>
    </div>
  )
}
