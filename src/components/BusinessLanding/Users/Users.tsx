import React from 'react';
import userstyle from './users.module.css';
import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import clsx from 'clsx';
function Users() {
    return (
        <article className={clsx('relative', userstyle.main_users_article)}>
            <div className={userstyle.left_transparent_gradient}></div>
            <div className={userstyle.right_transparent_gradient}></div>
            <GenericLayout
                heading={'(Y)OUR Success Story'}
                subheading={
                    <div className='xs:max-w-[100%] mx-auto xs:mb-24'>
                        <span style={{ color: 'rgba(255, 255, 255, 0.80)' }}>
                            Real Stories, Real Experiences
                        </span>
                        {/* <span>Our Users Share Their Quest Journeys</span> */}
                    </div>
                }
            />
            <section className={userstyle.glow_effect} />
            <div className={userstyle.users}>
                <div className={userstyle.content}>
                    <div className={userstyle.text}>5M+</div>
                    <div className={userstyle.user_text}>Users</div>
                </div>
            </div>
        </article>
    );
}

export default Users;
