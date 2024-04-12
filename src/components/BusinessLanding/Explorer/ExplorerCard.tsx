import React from 'react';
import bend from '../assets/bend.svg';
import Image from 'next/image';
import explorercss from './explorercard.module.css';
import profile from '../assets/Male 1.svg';
import img from './assets/Vector 1.png';
import ss from './assets/Inner Card.png';
const Profile = ({
    imgUrl,
    name,
    designation,
}: {
    imgUrl: string;
    name: string;
    designation: string;
}) => {
    return (
        <article className='flex justify-start ml-[14px] xs:gap-x-[38px]'>
            <Image
                src={imgUrl}
                className='rounded-full w-22 h-22'
                alt={'profile-image'}
            ></Image>
            <div className='flex flex-col'>
                <span className={explorercss.explorer_name}>{name}</span>
                <span className={explorercss.explorer_designation}>
                    {designation}
                </span>
            </div>
        </article>
    );
};
function ExplorerCard({img , name , designation}:{img:any , name:string , designation:string}) {
    return (
        <div className={explorercss.explorercss}>
            <div className={explorercss.inner_card}>
                <Image className='w-full h-full' src={img} alt={''}></Image>
                <div className={explorercss.glow_effect}></div>
                <div className={explorercss.glow_effect_top}></div>
            </div>
            <div className={explorercss.bend}>
                <Image src={bend} alt='bend' />
            </div>
            <div>
                <Profile
                    imgUrl={profile}
                    name={name}
                    designation={designation}
                />
            </div>
        </div>
    );
}

export default ExplorerCard;
