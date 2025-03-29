const staticsContainerData = [
    {
        id: 1,
        title: 'Total React',
        icon: 'https://i.ibb.co.com/twy7cx3m/s1.png',
        visitor: '40,689',
        upto: '8.5%',
        upArrow: 'https://i.ibb.co.com/ZzmCG36w/upArrow.png'
    },
    {
        id: 2,
        title: 'Comments',
        icon: 'https://i.ibb.co.com/mVd8spWs/s2.png',
        visitor: '10293',
        upto: '1.5%',
        upArrow: 'https://i.ibb.co.com/ZzmCG36w/upArrow.png'
    },
    {
        id: 3,
        title: 'Share',
        icon: 'https://i.ibb.co.com/0VRfVqhy/s3.png',
        visitor: '2040K',
        upto: '1.2%',
        upArrow: 'https://i.ibb.co.com/ZzmCG36w/upArrow.png'
    },
    {
        id: 4,
        title: 'Profile View',
        icon: 'https://i.ibb.co.com/5xccFRVR/s4.png',
        visitor: '9064K',
        upto: '2.8%',
        upArrow: 'https://i.ibb.co.com/ZzmCG36w/upArrow.png'
    },
    {
        id: 5,
        title: 'Following',
        icon: 'https://i.ibb.co.com/mVd8spWs/s2.png',
        visitor: '100K',
        upto: '2.3%',
        upArrow: 'https://i.ibb.co.com/ZzmCG36w/upArrow.png'
    },
    {
        id: 6,
        title: 'Followers',
        icon: 'https://i.ibb.co.com/5xccFRVR/s4.png',
        visitor: '964K',
        upto: '0.8%',
        upArrow: 'https://i.ibb.co.com/ZzmCG36w/upArrow.png'
    },
]
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const StaticsContainer = () => {
    return (
        <Carousel className='mb-10'>
            <CarouselContent className='px-5 mx-10 space-x-3 sm:space-x-5'>
                {
                    staticsContainerData.map(data =>
                        <CarouselItem key={data.id} className="bg-white sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-5 rounded-lg shadow">
                            <div className="flex mb-5 justify-between items-center">
                                <div className="">
                                    <p className="font-medium sm:mb-2 opacity-70 text-[#202224]">{data.title}</p>
                                    <h3 className="font-semibold text-[#202224] text-2xl sm:text-3xl">{data.visitor}</h3>
                                </div>
                                <figure>
                                    <img src={data.icon} alt="icon" className="" />
                                </figure>
                            </div>
                            <div className="flex text-sm sm:text-base gap-1 items-center">
                                <img src={data.upArrow} alt="upArrow" />
                                <p className="text-[#606060]"><span className="text-primaryGreen">{data.upto}</span> up from yesterday</p>
                            </div>
                        </CarouselItem>)
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default StaticsContainer;