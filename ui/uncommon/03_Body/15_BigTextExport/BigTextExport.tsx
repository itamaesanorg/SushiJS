import BigText from 'ui/uncommon/03_Body/14_BigText/BigText'

export default function Home() {
  return (
    <>
        <div className='py-16 flex flex-col items-center justify-center inset-0'>
          <BigText
            slides={[
              'npm i sushis',
              'TypeScript',
              'NextJS',
              'EU-Privacy',
              'TailwindCSS',
              'Framer'
            ]}
          />
        </div>
      </>

  )
}

