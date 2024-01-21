import { useEffect } from 'react'
import '@/styles/globals.scss'
import '@/styles/cart.scss'
import '@/styles/product.scss'
import '@/styles/TWZipCode.scss'
import '@/styles/game.css'
import '@/styles/profile.scss'
import '@/styles/Modal.scss'
import '@/css/CarouselSwiper.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import '@/css/CarouselSwiper.css'

import DefaultLayout from '@/components/layout/default-layout'
import { AuthContextProvider } from '@/components/contexts/AuthContext'
AuthContextProvider
import { CartProvider } from '@/components/hooks/use-cart-state'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案，對應`components/layout/default-layout/index.js`
  // 或`components/layout/default-layout.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <AuthContextProvider>
      <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    </AuthContextProvider>
  )
}
