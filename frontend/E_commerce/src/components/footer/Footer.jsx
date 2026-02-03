import React from 'react'
import { Box, Container, Divider, Link, Typography } from '@mui/material'

export function Footer() {
  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Settings', href: '#' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        py: 3, // py-6
        px: 2, // px-4
        mt: 'auto',
        borderTop: '1px solid rgba(var(--border-dark), 0.5)',
      }}
    >
      <Divider sx={{ mb: 3, opacity: 0.5 }} />

      <Container
        maxWidth="lg" // ~1200px
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="none"
              sx={{
                fontSize: '0.75rem', 
                fontWeight: 500, 
                color: 'slate.500',
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'primary.main', 
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'slate.500',
          }}
        >
          © 2026 E-commerce Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
