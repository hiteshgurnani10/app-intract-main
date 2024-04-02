import { Divider } from '@/ui-components/divider/Divider';
import React, { useState } from 'react';
import GemsAtoms from './atoms/gemsAtoms';
import clsx from 'clsx';
import styles from './explore.module.css';
import Button from '@/ui-components/button/Button';
import img from './assets/BG.png';
import Image from 'next/image';
import Pair from './Pair';
import base from './partnerLogos/base.png';
import blast from './partnerLogos/blast.png';
import linea from './partnerLogos/Linea.png';
import zksync from './partnerLogos/zksync.png';
import mode from './partnerLogos/mode.png';
import polygon from './partnerLogos/polygon.png';
import Marquee from 'react-fast-marquee';
import hero from './assets/Hero.png';
import image1 from '../../BusinessLanding/assets/ecosystemLogos/Linea.svg';
import image2 from '../../BusinessLanding/assets/ecosystemLogos/blast.png';
import image3 from '../../BusinessLanding/assets/ecosystemLogos/zksync.svg';
function Explore() {
    const [play, setPlay] = React.useState(false);
    const [hovered, setHovered] = useState(false);
    return (
        <div className={styles.exploreSection}>
            <div className={clsx(styles.content, 'relative')}>
                <div className={styles.bg_image}></div>
                <p className={styles.headline}>
                    Unleash your <br /> Web3 Growth
                </p>
                <p className={styles.description}>
                    Access world’s first bot-less community of 5M+ <br />{' '}
                    On-Chain users with our quest platform
                </p>
                <Button
                    className={clsx(styles.exploreButton, 'cursor-pointer')}
                    name='Explore'
                ></Button>
                <section className={styles.base_network_logos}>
                    <div className={styles.left_transparent_gradient} />
                    <div className={styles.right_transparent_gradient} />

                    <Marquee autoFill speed={50}>
                        {[base, blast, linea, zksync, mode, polygon].map(
                            (logo, index) => (
                                <Image
                                    onMouseOver={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    key={index}
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                    className={styles.logo_image}
                                    src={logo}
                                    alt={'logo'}
                                />
                            )
                        )}
                    </Marquee>
                </section>
            </div>
        </div>
    );
}

export default Explore;
