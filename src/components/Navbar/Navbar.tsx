import clsx from 'clsx';
import navbarStyles from './navbar.module.css';
import { useLocation } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
import intractImg from './assets/intract.svg';
import Button from '@/ui-components/button/Button';
import { useRouter } from 'next/navigation';
export const Navbar = () => {
    const router = useRouter();
    const handleButtonClick = () => {
        window.open('https://app.intract.io/', '_blank');
    };
    return (
        <>
            <header
                className={clsx(
                    navbarStyles.navbar_container,
                    'flex justify-between relative'
                )}
                style={{ zIndex: 1000 }}
            >
                <div className={clsx(navbarStyles.navbar_content_section)}>
                    <Link
                        href='/'
                        aria-current='page'
                        aria-label='home'
                        className='shrink-0'
                        // onClick={() => {
                        // 	pathname == '/' && handleScrollToTop();
                        // }}
                    >
                        <Image
                            src={intractImg}
                            className='flex w-[97px] h-[20px]'
                            alt={''}
                        ></Image>
                    </Link>
                </div>
                <div className='flex gap-4 absolute md:right-[120px] xs:right-1'>
                    {/* <Button
                        className={navbarStyles.singin_button}
                        name={'Sign in'}
                    /> */}
                    <Button
                        onclick={handleButtonClick}
                        className={navbarStyles.create_quest_button}
                        name={'Sign in'}
                    >
                    </Button>
                </div>
            </header>
        </>
    );
};
