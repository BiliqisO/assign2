import { formatEther } from "ethers";
import useAllCampaigns from "../hooks/useAllCampaigns";
import { formatDate } from "../utils";

const AllCampaigns = () => {
    const campaigns = useAllCampaigns();

    return (
        <div className="flex flex-wrap justify-center gap-10 px-5 py-10">
            {!!campaigns &&
                campaigns.map((campaign, index) => (
                    <div
                        key={index}
                        className="bg-white w-[30%] sm:max-w-sm border-2 border-blue-200 shadow-lg rounded-xl overflow-hidden py-8"
                    >
                        <div className="px-6 py-4">
                            <h2 className="text-2xl text-blue-400 font-semibold mb-5">
                                {campaign.title}
                            </h2>
                            <p className="mt-2 font-bold text-gray-500">
                                Expire on - {formatDate(campaign?.durationTime)}
                            </p>
                            <p className="mt-2 font-bold text-gray-500">
                                Balance -{" "}
                                {formatEther(campaign?.fundingBalance)} ETH
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 px-6 pt-2 pb-2">
                            <span className="w-fit bg-blue-400 text-white text-sm px-4 py-2 rounded-full">
                                {formatEther(campaign?.fundingGoal)} ETH
                            </span>
                            <span
                                className={`${
                                    campaign.isActive
                                        ? "bg-green-400 text-white"
                                        : "bg-red-400 text-white"
                                } w-fit text-sm px-4 py-2 rounded-full`}
                            >
                                {campaign.isActive ? "Active" : "Inactive"}
                            </span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default AllCampaigns;
