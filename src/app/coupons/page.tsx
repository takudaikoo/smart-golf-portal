'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

const COUPONS = [
    {
        id: 1,
        title: '次回予約 50% OFF',
        description: '次回のゴルフ予約が半額になります。今月中の予約に有効です。',
        expiry: '有効期限: 2025年12月31日',
    },
    {
        id: 2,
        title: 'ドリンク無料',
        description: 'ラウンジでのドリンクが1杯無料になります。',
        expiry: '有効期限: 2026年1月15日',
    },
    {
        id: 3,
        title: '1時間延長無料',
        description: 'セッションを無料で1時間延長できます。',
        expiry: '有効期限: 2026年2月28日',
    },
];

export default function CouponsPage() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
            <Container maxWidth="sm" sx={{ pt: 4 }}>
                <Box sx={{ mb: 3 }}>
                    <Link href="/" passHref style={{ textDecoration: 'none' }}>
                        <Button startIcon={<ArrowBackIcon />}>ホームに戻る</Button>
                    </Link>
                </Box>

                <Typography variant="h4" component="h1" gutterBottom fontWeight="700" color="primary">
                    保有クーポン
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {COUPONS.map((coupon) => (
                        <Card key={coupon.id} sx={{ bgcolor: 'white' }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom fontWeight="600">
                                    {coupon.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                                    {coupon.description}
                                </Typography>
                                <Typography variant="caption" color="secondary.main" fontWeight="500">
                                    {coupon.expiry}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="secondary">クーポンを使う</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
