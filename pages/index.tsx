import BigText from 'components/BigText'
import Container from 'components/Container'

export default function Home() {
  return (
    <>
      <Container>
        <div className='flex flex-col items-center justify-center inset-0'>
          <BigText
            slides={['TypeScript', 'NextJS', 'EU-Privacy', 'TailwindCSS', 'Framer &', 'soon Prisma']}
          />
        </div>
      </Container>
    </>
  )
}
