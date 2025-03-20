import { DonationsChart } from "@/components/general/DonationsChart";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { name: 'Total Members', value: '2,847', change: '+6%' },
    { name: 'Monthly Donations', value: '$24,500', change: '-2%' },
    { name: 'Active Programs', value: '12', change: '+18%' },
    { name: 'Upcoming Events', value: '8', change: '+1%' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen space-y-6 my-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:text-2xl lg:grid-cols-4 w-full max-w-screen-lg">
        {stats.map((stat) => {
          const isPositive = stat.change.startsWith("+");
          return (
            <div
              key={stat.name}
              className="shadow text-sm md:text-2xl lg:text-4xl rounded-lg p-6 w-[150px] mx-auto md:w-full max-w-xs bg-cyan-50"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
              <dd className="mt-1 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">{stat.value}</dd>
              <div className="flex items-center mt-2 text-sm font-medium text-gray-500">  
                {isPositive ? (
                  <ArrowUpRight className="h-4 w-4 mr-1 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1 text-red-500" />
                )}
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full max-w-screen-lg">
        <DonationsChart />
      </div>
    </div>
  );
}