import AllCampaigns from "./component/AllCampaigns";
import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useAllCampaigns from "./hooks/useAllCampaigns";

function App() {
    const campaigns = useAllCampaigns();
    console.log(campaigns);
    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <CreateCampaign />
                <AllCampaigns />
            </main>
        </div>
    );
}

export default App;
