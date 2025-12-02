'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const SLOTS = [
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '12:00', available: true },
    { time: '13:00', available: true },
    { time: '14:00', available: false },
    { time: '15:00', available: true },
];

export default function ReservationsPage() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
            <Container maxWidth="sm" sx={{ pt: 4 }}>
                <Box sx={{ mb: 3 }}>
                    <Link href="/" passHref style={{ textDecoration: 'none' }}>
                        <Button startIcon={<ArrowBackIcon />}>ホームに戻る</Button>
                    </Link>
                </Box>

                <Typography variant="h4" component="h1" gutterBottom fontWeight="700" color="primary">
                    予約
                </Typography>

                <Paper sx={{ p: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        時間を選択
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        日付: 12月2日 (今日)
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {SLOTS.map((slot) => (
                            <Box key={slot.time} sx={{ width: '30%', flexGrow: 1 }}>
                                <Button
                                    variant={slot.available ? 'outlined' : 'contained'}
                                    disabled={!slot.available}
                                    fullWidth
                                    color={slot.available ? 'primary' : "inherit"}
                                    sx={{ py: 1.5 }}
                                >
                                    {slot.time}
                                </Button>
                            </Box>
                        ))}
                    </Stack>
                </Paper>

                <Button variant="contained" size="large" fullWidth disabled>
                    予約を確定する
                </Button>
            </Container>
        </Box>
    );
}
