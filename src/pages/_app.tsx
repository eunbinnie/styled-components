import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components'

const Component = styled.main`
  background-color: '#FA5858';
`;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
