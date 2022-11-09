import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

import s from './StickyBar.module.scss';

const OPENING_HEIGHT = 50;

const StickyBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const onScroll = (e) => {
            setScrolling(e.target.documentElement.scrollTop > OPENING_HEIGHT);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeSticky = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible &&
                (<div className={clsx(s.stickyBar, 'annoyance', { [s.stickyBarOpen]: scrolling })}>
                    <div className={s.stickyBarIn}>
                        <div className={s.stickyBarContent}>
                            <div className={s.stickyBarIntro}>
                                <Translate
                                    id="sticky_bar.promo.dns"
                                    description="String used for DNS promo in sticky bar"
                                >
                                    Make the Internet safe for everyone at home or at work
                                </Translate>
                            </div>

                            <a
                                className={s.stickyBarBtn}
                                href={`/welcome.html?lbl=knowledge_base`}
                            >
                                <Translate
                                    id="sticky_bar.btn.text"
                                    description="String used for sticky bar btn"
                                >
                                    Try AdGuard DNS
                                </Translate>
                            </a>
                        </div>

                        <button
                            type='button'
                            className={s.stickyBarCloseBtn}
                            onClick={closeSticky}
                        >
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default StickyBar;
