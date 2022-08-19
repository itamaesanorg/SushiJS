import BigText from 'bento/17 BigText'
import Container from 'bento/10 Container'
import Bottom from 'bento/18 Bottom'

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
              'Documented',
              'Structured &',
              'soon Prisma',
            ]}
          />
        </div>
      </Container>
      <Bottom />
    </>
  )
}
