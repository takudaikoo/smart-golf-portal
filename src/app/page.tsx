'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        pb: 4,
      }}
    >
      <Container maxWidth="sm" sx={{ pt: 6, pb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" fontWeight="700">
          SMART GOLF
        </Typography>
      </Container>

      <Container maxWidth="sm" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ bgcolor: 'white', color: 'text.primary', p: 3, borderRadius: 2 }}>
          <Typography variant="h3" color="primary.main">
            ブロンズ会員
          </Typography>
        </Box>

        <Link href="/coupons" passHref style={{ textDecoration: 'none', width: '100%' }}>
          <Button variant="contained" fullWidth>
            クーポンを見る
          </Button>
        </Link>
        <Link href="/reservations" passHref style={{ textDecoration: 'none', width: '100%' }}>
          <Button variant="contained" fullWidth>
            予約する
          </Button>
        </Link>
      </Container>
    </Box>
  );
}