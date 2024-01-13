import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      {/**
        O atributo `titleTemplate` dentro do componente Helmet é configurado com a string "%s | pizza.shop",
        * onde "%s" é um espaço reservado que será substituído pelo título específico da página ou pelo título
        * padrão, caso nenhum título específico seja fornecido.
      **/}
      <Helmet titleTemplate="%s | pizza.shop" />

      <Toaster richColors />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
