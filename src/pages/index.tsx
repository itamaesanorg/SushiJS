import Meta from 'ui/common/00_Header/01_Meta'
import Sushisho from 'ui/common/01_Head/02_Menu'
import Sushiten from 'ui/common/01_Head/03_SecondaryMenu'
import Footer from 'ui/common/02_Footer/07_Footer'
import BigTextExport from 'ui/uncommon/03_Body/15_BigTextExport/BigTextExport'

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

