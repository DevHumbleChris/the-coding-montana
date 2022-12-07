import "../styles/globals.css";
import Layout from "../components/Layout";
import { store } from "../store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import "@tremor/react/dist/esm/tremor.css";
import 'react-toastify/dist/ReactToastify.css';

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
