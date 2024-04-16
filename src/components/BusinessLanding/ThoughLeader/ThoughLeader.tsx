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
        image: mic,
        description:
            'Refer and earn gems effortlessly by inviting friends to join the adventure! and watch your gem collection grow infinitely',
    },
    {
        title: 'Leadership Blog',
        image: marketing,
        description:
            'Earn Gems by completing weekly streaks and unlock exclusive rewards',
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
            <Divider className='my-32 w-full bg-red-300' />
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
                        title={<div>{howToEarnGems.title}</div>}
                        description={<div>{howToEarnGems.description}</div>}
                    />
                ))}
            </div>
        </section>
    );
};

export default ThoughLeader;
