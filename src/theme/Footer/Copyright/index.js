import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';

export default function CopyrightWrapper() {
    const copyrightText = `© AdGuard DNS, ${new Date().getFullYear()}`;

    return <Copyright copyright={copyrightText} />;
}
