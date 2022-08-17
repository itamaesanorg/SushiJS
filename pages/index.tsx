import BigText from 'bento/BigText'
import Container from 'bento/Container'

export default function Home() {
  return (
    <>
      <Container>
        <div className='flex flex-col items-center justify-center inset-0'>
          <BigText
            slides={['TypeScript.', 'NextJS.', 'TailwindCSS.', 'Framer.']}
          />
        </div>
      </Container>
    </>
  )
}
