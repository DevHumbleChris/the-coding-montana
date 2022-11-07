import "../styles/globals.css";
import Layout from "../components/Layout";
import { store } from "../store";
import { Provider } from "react-redux";
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, session, pageProps }) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </Layout>
  );
}

export default MyApp;
