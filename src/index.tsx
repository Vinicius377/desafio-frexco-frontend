import ReactDOM from 'react-dom/client'
import App from './App'
import './style/style.global.css'
import { ProviderUser } from './context/user-context'
import { ProviderProduct } from './context/product-context'
import { ProviderCart } from './context/cart-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ProviderProduct>
    <ProviderCart>
      <ProviderUser>
        <App />
      </ProviderUser>
    </ProviderCart>
  </ProviderProduct>
)
