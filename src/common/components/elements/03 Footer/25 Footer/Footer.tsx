import Link from 'next/link'

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-3xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3 mx-auto flex justify-between items-center'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'><p className='text-gray-500 hover:text-gray-600 transition'>Home</p></Link>
          <ExternalLink href='https://twitter.com/itamaesanorg'>Twitter</ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className='text-gray-500 hover:text-gray-600 transition'
          >&gt; 1.2K/month on npm 🎉</p>
        <ExternalLink href='https://www.npmjs.com/package/sushis'>npm i sushis</ExternalLink>
        <ExternalLink href='https://www.npmjs.com/package/sushis-demo'>npm i sushis-demo</ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
        <ExternalLink href='https://github.com/itamaesanorg'>GitHub</ExternalLink>
        <ExternalLink href='https://bcnhostess.com'>Use Case</ExternalLink>
          <Link href='/404'><p className='text-gray-500 hover:text-gray-600 transition'>404</p></Link>
        </div>
      </div>
    </div>
  )
}
