import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export function NavLinks({ links }) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', gap: 4 }}>
      {links.map((link) => (
        <Link
          key={link.label}
          component={RouterLink}
          to={link.to}
          underline="none"
          color="text.primary"
          className="hover:text-primary text-sm font-semibold"
        >
          {link.label}
        </Link>
      ))}
    </Box>
  )
}
