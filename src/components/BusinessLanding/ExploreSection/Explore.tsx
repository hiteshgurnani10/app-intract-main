import { Divider } from '@/ui-components/divider/Divider';
import React from 'react';
import GemsAtoms from './atoms/gemsAtoms';
import clsx from 'clsx';
import styles from './explore.module.css';
import Button from '@/ui-components/button/Button';
import Image from 'next/image';
import img from './assets/BG.png';
import Pair from './Pair';
import Marquee from 'react-fast-marquee';
import image1 from '../../BusinessLanding/assets/ecosystemLogos/Linea.svg';
import image2 from '../../BusinessLanding/assets/ecosystemLogos/blast.png';
import image3 from '../../BusinessLanding/assets/ecosystemLogos/zksync.svg';
function Explore() {
    const [play, setPlay] = React.useState(false);
    const ecosystemLogos = [image1, image2, image3];
    return (
        <div className={styles.exploreSection}>
            <section className={styles.glow_effect} />
            <div className={clsx(styles.content, 'relative')}>
                <h1 className={styles.headline}>
                    Unleash your <br /> Web3 Growth
                </h1>
                <p className={styles.description}>
                    Access world’s first bot-less community of 5M+ <br />{' '}
                    On-Chain users with our quest platform
                </p>
                <Button
                    className={styles.exploreButton}
                    name='Explore'
                ></Button>
            </div>
        </div>
    );
}

export default Explore;
