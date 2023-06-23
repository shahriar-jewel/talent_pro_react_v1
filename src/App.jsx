import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <div className="px-16 md:px-28 lg:px-36 py-20 flex flex-col items-center justify-center">
        <LandingPage />
      </div>
    </Layout>
  );
}

export default App;
