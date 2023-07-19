import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import NLink from 'next/link'

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" component={NLink} href="/">
          Our Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }