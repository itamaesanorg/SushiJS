import BigTextExport from 'src/common/components/elements/02 Body/18 BigTextExport'
import Sushisho from 'src/common/components/elements/01 Head/01 Menu'
import Sushiten from 'src/common/components/elements/01 Head/02 SecondaryMenu'
import Meta from 'src/common/components/elements/00 Header/00 Meta'
import Footer from 'src/common/components/elements/03 Footer/25 Footer'

export default function Home() {
  return (
    <div>
      <Meta />
      <Sushisho />
      <Sushiten />
      <BigTextExport />
      <Footer />
    </div>
  )
}

