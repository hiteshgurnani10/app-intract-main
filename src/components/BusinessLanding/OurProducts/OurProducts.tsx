import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import React from 'react';
import ourproductStyles from './ourproducts.module.css';
import Image from 'next/image';
import image from '../assets/Grids.png';
import questing from './assets/goliveforfree.png';
import clsx from 'clsx';
import { Divider } from '@/ui-components/divider/Divider';
import SingleSubCard from './SingleSubCard';
import SubCards from './SubCards';
import SliderComponent from './SliderComponent/SliderComponent';
import ProgressComponent from './SliderComponent/ProgressComponent';
import Marketing from './Marketing/Marketing';
function OurProducts() {
    return (
        <div className='max-w-[1440px] h-full md:px-12 sm:px-8 px-4'>
            <GenericLayout
                heading={'What do we offer?'}
                subheading={
                    <div className='md:mb-[56px] md:w-[80%] xs:mb-[32px]'>
                        There is a reason we are called{' '}
                        <span className={ourproductStyles.world_number1}>
                            {' '}
                            World’s No. 1
                        </span>{' '}
                        Questing Platform
                    </div>
                }
            />
            <section className='grid grid-cols-2 overflow-hidden '>
                <div
                    className={clsx(
                        ourproductStyles.card,
                        'col-span-2 md:grid-cols-2 p-4 pt-6 sm:0 sm:pt-6'
                    )}
                >
                    <article
                        className={clsx(
                            ourproductStyles.card_inner,
                            'relative flex-1 flex-shrink-0 min-w-[50%]'
                        )}
                    >
                        <div className={ourproductStyles.card_heading}>
                            Questing
                        </div>
                        <SliderComponent />
                    </article>
                    <Image
                        src={questing}
                        alt='questing'
                        className='w-full h-auto xs:w-full xs:mt-12 object-cover rounded-[8px] sm:mt-12 md:mt-0 relative'
                    />
                </div>
            </section>
            <SubCards />
        </div>
    );
}

export default OurProducts;
