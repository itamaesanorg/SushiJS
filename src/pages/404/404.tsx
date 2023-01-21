import CoolErrorExport from 'src/common/components/elements/02 Body/20 CoolError404Exporter'
import Sushisho from 'src/common/components/elements/01 Head/01 Menu'
import Sushiten from 'src/common/components/elements/01 Head/02 SecondaryMenu'
import Footer from 'src/common/components/elements/03 Footer/25 Footer'
import Meta from 'src/common/components/elements/00 Header/00 Meta'


export default function Home() {
  return (
    <div>
      <Meta />
      <Sushisho />
      <Sushiten />
      <CoolErrorExport />
      <Footer />
    </div>
  )
}

