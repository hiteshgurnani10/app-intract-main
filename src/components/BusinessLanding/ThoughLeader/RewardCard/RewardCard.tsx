import { ReactNode, cloneElement, useEffect, useRef, useState } from 'react';
import rewardCardStyles from './rewardCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'next/image';
import mic from '../assets/Mic.svg';
import marketing from '../assets/marketing-blog.svg';
import diagonal from '../assets/diagonal-arrow.svg';
import clsx from 'clsx';
export const RewardCard = ({
    key,
    title,
    description,
    image,
    link
}: {
    key: number;
    title: ReactNode;
    description: ReactNode;
    image: any;
    link:any;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const descriptionRef = useRef<any>(null);
    const imgref = useRef<any>(null);

    const handleButtonClick = () => {
        window.open(link, '_blank');
    };
    

    useEffect(() => {
        onHoverOut();
    }, []);

    const onHoverIn = () => {
        setIsHovered(true);
        descriptionRef.current.style.marginBottom = `0px`;
        descriptionRef.current.style.opacity = `1`;
    };

    const onHoverOut = () => {
        setIsHovered(false);
        descriptionRef.current.style.marginBottom = `0px`;

        const descriptionHeight =
            descriptionRef.current.getBoundingClientRect().height;

        descriptionRef.current.style.marginBottom = `-${
            descriptionHeight + 8
        }px`;
        descriptionRef.current.style.opacity = `0`;
    };

    return (
        <div
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
            className={rewardCardStyles.container}
            onClick={handleButtonClick}
        >
            {/* {image && cloneElement(image, { isHovered })} */}
            <div className={rewardCardStyles.content_container}>
                <div className={rewardCardStyles.content_section}>
                    <div>
                        <Image
                            src={image}
                            alt='mic'
                            className={rewardCardStyles.card_img}
                        />

                        <div className={rewardCardStyles.title}>
                            <div className='flex flex-col'>
                                <div
                                    className={clsx(rewardCardStyles.divider)}
                                ></div>
                                <div className='flex md:mt-[16px] gap-[4px] '>
                                    {title}
                                    <Image
                                        alt='diagonal'
                                        src={diagonal}
                                        ref={imgref}
                                        width={20}
                                        height={20}
                                        className={
                                            rewardCardStyles.related_image
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={descriptionRef}
                            className={rewardCardStyles.description}
                        >
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
