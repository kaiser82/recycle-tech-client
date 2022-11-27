import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertises = () => {

    const url = 'http://localhost:5000/advertises';

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            const res = await fetch(url, {

            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <>
            {
                advertises.length > 0 &&
                <div className=' py-5'>
                    <h2 className='text-4xl font-bold text-center py-5'>Advertised Products : {advertises.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            advertises.map(advertise => <AdvertiseCard key={advertise._id} advertise={advertise}></AdvertiseCard>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Advertises;