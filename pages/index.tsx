import BigText from 'bento/BigText'
import Container from 'bento/Container'
import Bottom from 'bento/Bottom'

export default function Home() {
  return (
    <>
      <Container>
        <div className='flex flex-col items-center justify-center inset-0'>
          <BigText
            slides={[
              'TypeScript',
              'NextJS',
              'EU-Privacy',
              'TailwindCSS',
              'Framer &',
              'soon Prisma',
            ]}
          />
        </div>
      </Container>
      <Bottom />
    </>
  )
}
