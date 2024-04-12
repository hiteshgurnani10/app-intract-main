//@ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';
import singlepointstyle from './singlepoint.module.css';
import clsx from 'clsx';
interface ISinglePoint {
    title: React.ReactNode;
    index: number;
    activeIndexValue: number;
    setActiveIndexValue: (a: number) => void;
    progress: number;
    setProgress: (a: number) => void;
}
const ProgressBar = ({ progress }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.36)',
            }}
        >
            <div
                style={{
                    height: '1px',
                    width: `${progress}%`,
                    backgroundColor: '#6435E9',
                    transition: 'width 0.1s linear',
                }}
            ></div>
        </div>
    );
};
const SinglePoint: FC<ISinglePoint> = (props) => {
    const { title, index, setActiveIndexValue, progress, setProgress } = props;
    useEffect(() => {
        let intervalId: any;
        const increment = 100 / 300;

        if (progress < 100) {
            intervalId = setInterval(() => {
                setProgress((prevProgress) => {
                    const updatedProgress = prevProgress + increment;
                    return updatedProgress > 100 ? 100 : updatedProgress;
                });
            }, 50);
        } else {
            clearInterval(intervalId);
            setProgress(0);
            setActiveIndexValue((current) => (current + 1) % 5);
        }

        return () => clearInterval(intervalId);
    }, [progress, setActiveIndexValue, setProgress]);

    const handleClick = (index: number) => {
        setActiveIndexValue(index);
        setProgress(0);
    };
    return (
        <article
            className='flex flex-col md:gap-[8px] xs:gap-[12px] cursor-pointer'
            onClick={() => handleClick(index)}
            key={index}
        >
            <div className='flex justify-between'>
                <p
                    className={clsx(
                        singlepointstyle.title,
                        `${
                            index == props.activeIndexValue
                                ? singlepointstyle.title_active
                                : ''
                        }`
                    )}
                >
                    {title}
                </p>
                <Image src={arrow} width={12} height={16} alt={'arrow'}></Image>
            </div>
            {index === props.activeIndexValue && (
                <ProgressBar progress={progress} />
            )}
            {index != props.activeIndexValue && (
                <div className={singlepointstyle.progress}></div>
            )}
        </article>
    );
};

export default SinglePoint;
