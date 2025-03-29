const data = [
    {
        date: 'Oct 15',
        "Comments": 4000,
        "Post Views": 2400,
        "Engagement": 2400,
    },
    {
        date: 'Oct 16',
        "Comments": 3000,
        "Post Views": 1398,
        "Engagement": 2210,
    },
    {
        date: 'Oct 17',
        "Comments": 2000,
        "Post Views": 9800,
        "Engagement": 2290,
    },
    {
        date: 'Oct 18',
        "Comments": 2780,
        "Post Views": 3908,
        "Engagement": 2000,
    },
    {
        date: 'Oct 19',
        "Comments": 1890,
        "Post Views": 4800,
        "Engagement": 2181,
    },
    {
        date: 'Oct 20',
        "Comments": 2390,
        "Post Views": 3800,
        "Engagement": 2500,
    },
    {
        date: 'Oct 21',
        "Comments": 3490,
        "Post Views": 4300,
        "Engagement": 2100,
    },
    {
        date: 'Oct 22',
        "Comments": 2490,
        "Post Views": 4300,
        "Engagement": 1100,
    },
    {
        date: 'Oct 23',
        "Comments": 1890,
        "Post Views": 4800,
        "Engagement": 2181,
    },
    {
        date: 'Oct 24',
        "Comments": 2000,
        "Post Views": 9800,
        "Engagement": 2290,
    },
    {
        date: 'Oct 25',
        "Comments": 2300,
        "Post Views": 7800,
        "Engagement": 2390,
    },
    {
        date: 'Oct 26',
        "Comments": 2500,
        "Post Views": 1800,
        "Engagement": 2290,
    },
    {
        date: 'Oct 27',
        "Comments": 2500,
        "Post Views": 9200,
        "Engagement": 1290,
    },
    {
        date: 'Oct 28',
        "Comments": 500,
        "Post Views": 3200,
        "Engagement": 1290,
    },
    {
        date: 'Oct 29',
        "Comments": 4500,
        "Post Views": 9200,
        "Engagement": 590,
    },
    {
        date: 'Oct 30',
        "Comments": 2500,
        "Post Views": 1500,
        "Engagement": 1790,
    },
];

import { XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar, BarChart } from 'recharts';
const EngagementChart = () => {
    return (
        <div className='bg-white px-4 py-7 md:px-6 md:py-10 shadow-lg rounded-lg'>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-semibold text-[#202224]">Engagements</h3>
                    <select className="text-gray-400 px-3 py-1 rounded-[6px] border-gray-200 bg-slate-100 border outline-none">
                        <option value="oct">October</option>
                        <option value="nov">November</option>
                        <option value="dec">December</option>
                    </select>
                </div>
            </div>

            {/* Charts */}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Post Views" stackId="a" fill="#01CC92" />
                    <Bar dataKey="Engagement" stackId="a" fill="#00328580" />
                    <Bar dataKey="Comments" stackId="a" fill="#0032851A" />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default EngagementChart;