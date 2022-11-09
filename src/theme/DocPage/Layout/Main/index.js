import React from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import styles from './styles.module.scss';
import StickyBar from '../../../StickyBar/StickyBar';

export default function DocPageLayoutMain({hiddenSidebarContainer, children}) {
    const sidebar = useDocsSidebar();
    return (
        <main
            className={clsx(
                styles.docMainContainer,
                (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
            )}>
            <div className={'container-outer'}>
                <div
                    className={clsx(
                        'container padding-top--md padding-bottom--lg',
                        styles.docItemWrapper,
                        hiddenSidebarContainer && styles.docItemWrapperEnhanced,
                    )}>
                    {children}
                </div>

                <StickyBar />
            </div>
        </main>
    );
}
