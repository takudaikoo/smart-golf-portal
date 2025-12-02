'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Paper from '@mui/material/Paper';
import { useRouter, usePathname } from 'next/navigation';

export default function BottomNav() {
    const router = useRouter();
    const pathname = usePathname();
    const [value, setValue] = React.useState(pathname);

    React.useEffect(() => {
        setValue(pathname);
    }, [pathname]);

    return (
        <Box sx={{ pb: 7 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        router.push(newValue);
                    }}
                >
                    <BottomNavigationAction label="ホーム" value="/" icon={<HomeIcon />} />
                    <BottomNavigationAction label="クーポン" value="/coupons" icon={<LocalOfferIcon />} />
                    <BottomNavigationAction label="予約" value="/reservations" icon={<CalendarMonthIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
