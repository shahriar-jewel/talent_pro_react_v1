import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
import { GlobalDataProvider } from "./GlobalState";

function App() {
  return (
    // wrapping the Layout with context api for fetcheing data everywhere 
    <GlobalDataProvider>
      <Layout>
        <div className="px-16 md:px-28 lg:px-36 py-20 flex flex-col items-center justify-center">
          <LandingPage />
        </div>
      </Layout>
    </GlobalDataProvider>
  );
}

export default App;
