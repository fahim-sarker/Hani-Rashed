const data = [
    {
        date: 'Oct 15',
        2022: 4000,
        2023: 7000,
        2024: 15000,
    },
    {
        date: 'Oct 16',
        2022: 50000,
        2023: 6000,
        2024: 25000,
    },
    {
        date: 'Oct 17',
        2022: 2000,
        2023: 5000,
        2024: 35000,
    },
    {
        date: 'Oct 18',
        2022: 15000,
        2023: 12000,
        2024: 25000,
    },
    {
        date: 'Oct 19',
        2022: 28888,
        2023: 2000,
        2024: 5000,
    },
    {
        date: 'Oct 20',
        2022: 4000,
        2023: 1000,
        2024: 15000,
    },
    {
        date: 'Oct 21',
        2022: 1000,
        2023: 500,
        2024: 8000,
    },
    {
        date: 'Oct 22',
        2022: 7000,
        2023: 2000,
        2024: 33000,
    },
    {
        date: 'Oct 23',
        2022: 8000,
        2023: 21000,
        2024: 13000,
    },
    {
        date: 'Oct 24',
        2022: 10000,
        2023: 500,
        2024: 15000,
    },
    {
        date: 'Oct 25',
        2022: 5675,
        2023: 8000,
        2024: 25000,
    },
    {
        date: 'Oct 26',
        2022: 2323,
        2023: 6000,
        2024: 5000,
    },
    {
        date: 'Oct 27',
        2022: 6865,
        2023: 3000,
        2024: 3000,
    },
    {
        date: 'Oct 28',
        2022: 2323,
        2023: 3000,
        2024: 65000,
    },
    {
        date: 'Oct 29',
        2022: 54355,
        2023: 2000,
        2024: 5000,
    },
    {
        date: 'Oct 30',
        2022: 54355,
        2023: 2000,
        2024: 15000,
    },
];

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { curveCardinal } from 'd3-shape';

const ProfileViewingChart = () => {
    const cardinal = curveCardinal.tension(0.2);
    return (
        <div className='bg-white px-4 py-7 md:px-6 md:py-10 shadow-lg rounded-lg'>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-semibold text-[#202224]">Profile Overview</h3>
                    <select className="text-gray-400 px-3 py-1 rounded-[6px] border-gray-200 bg-slate-100 border outline-none">
                        <option value="oct">October</option>
                        <option value="nov">November</option>
                        <option value="dec">December</option>
                    </select>
                </div>
            </div>

            {/* Charts */}
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    <Area type={cardinal} dataKey="2022" stroke="#118d57" fill="rgba(17, 141, 87, 0.5)" fillOpacity={0.5} />
                    <Area type={cardinal} dataKey="2023" stroke="#fea11f" fill="rgba(254, 161, 31, 0.5)" fillOpacity={0.5} />
                    <Area type={cardinal} dataKey="2024" stroke="#ffedd8" fill="#ffedd8" fillOpacity={0.5} />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    );
};

export default ProfileViewingChart;