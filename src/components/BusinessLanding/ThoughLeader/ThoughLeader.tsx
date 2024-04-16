import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import gempsDropsPng from '../../assets/gem-drops.png';
import { RewardCard } from './RewardCard/RewardCard';
import mic from './assets/Frame 19.png';
import marketing from './assets/marketing-blog.svg';
import styles from './thoughleader.module.css';
import clsx from 'clsx';
import { Divider } from '@/ui-components/divider/Divider';
const howToEarnGemsArray = [
    {
        title: 'Podcast',
        link:'https://open.spotify.com/show/40sCgrg26jFDN3i3WsHB5D',
        image: mic,
        description:
            'Tune in to our podcasts for insights on Web3 growth from leading voices at Axie, Ava, Sushiswap, Lido, and many more',
    },
    {
        title: 'Leadership Blog',
        link:'https://www.blogs.intract.io/',
        image: marketing,
        description:
            'Explore the latest in Web3 growth with us. Your ultimate guide to mastering web3 growth.',
    },
];

const ThoughLeader = () => {
    return (
        <section
            className={clsx(
                styles.container,
                'max-w-[1440px] mt-[200px] md:mt-[230px]'
            )}
        >
            <Divider className='-mt-16 mb-16 w-full bg-red-300' />
            <GenericLayout
                heading={'Be a Thought Leader'}
                subheading={
                    // <div className='mx-auto'>Thought Leadership Blogs</div>
                    <></>
                }
            />
            <div className={styles.cards_section}>
                {howToEarnGemsArray.map((howToEarnGems, index) => (
                    <RewardCard
                        key={index}
                        image={howToEarnGems.image}
                        link={howToEarnGems.link}
                        title={<div>{howToEarnGems.title}</div>}
                        description={<div>{howToEarnGems.description}</div>}
                    />
                ))}
            </div>
        </section>
    );
};

export default ThoughLeader;
