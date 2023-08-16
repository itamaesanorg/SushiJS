import BigText from 'src/common/components/elements/02 Body/17 BigText'

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

