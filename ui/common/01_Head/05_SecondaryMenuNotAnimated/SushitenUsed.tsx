import React from 'react'
import Link from 'next/link'

export default function Sushiten() {
  return (
    <div className='hidden md:inline'>
    <nav className='px-8 py-4 drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-gray-800 top-10 md:top-20 rounded-md mx-auto flex justify-between items-center'>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/In-Store'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            In Store
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Street-Marketing'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            Street Marketing
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Ferias-Congresos'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            Ferias y Congresos
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Servicios'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            SERVICIOS
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Eventos-Imagen'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            Eventos de Imágen
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Otros-Eventos'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            Otros Eventos
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Uniformes'>
          <p className='hover:text-primary transition-all cursor-pointer'>
            Uniformes
          </p>
        </Link>
      </div>
    </nav>
    </div>
  )
}
