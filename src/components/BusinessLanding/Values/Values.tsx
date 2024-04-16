import React from 'react';
import Image from 'next/image';
import { actionCardDetails } from './utils';
import valuesCover from './assets/Coverimg.png';
import ActionCards from './ActionCards/ActionCards';
import valuesstyle from './values.module.css';
import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import clsx from 'clsx';
import { Divider } from '@/ui-components/divider/Divider';

function Values() {
    return (
        <article
            className={clsx(
                'flex flex-col justify-center max-w-[1440px] md:mt-12 mt-12',
                valuesstyle.main
            )}
        >
            <GenericLayout
                heading={'Some popular quests'}
                subheading={
                    <div className='w-[400px] md:w-[900px]'>
                        <span style={{ color: 'rgba(255, 255, 255, 0.80)' }}>
                            Enriching experiences, meaningful rewards, and
                            empowering tools
                        </span>{' '}
                        that prioritize and enhance the journey of each
                        individual explorer within our platform
                    </div>
                }
            />
            <div className={valuesstyle.image_style}>
                <Image
                    src={valuesCover}
                    className={clsx(
                        'rounded-[16px] xs:mt-[24px] md:mt-[56px] w-full object-cover min-h-[230px] md:h-[400px] block'
                    )}
                    alt={'values-cover'}
                ></Image>
            </div>
        </article>
    );
}

export default Values;
