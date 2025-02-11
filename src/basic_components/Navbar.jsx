import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 4),
  },
}));

const LogoCircle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '1.2rem',
}));

const BrandName = styled('span')(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
  fontSize: '1.2rem',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  transition: 'background-color 0.3s ease',
}));

const ContactButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  transition: 'background-color 0.3s ease',
}));

const Navbar = () => {
  const theme = useTheme();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'Enquiry Form', path: '/admission' },
    { label: 'Results', path: '/result' },
    // { label: 'Gallery', path: '/gallery' },
  ];

  return (
    <AppBar position="sticky" elevation={2}>
      <StyledToolbar>
       {/* Logo and Brand */}
<Box display="flex" alignItems="center">
  <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    <LogoCircle>
      <img src="https://res.cloudinary.com/drl7llkoc/image/upload/v1738159048/logo_uwktyk.jpg" alt="" />
    </LogoCircle>
    <BrandName>
      VidhyaEducation
    </BrandName>
  </a>
</Box>
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
          {navItems.map((item) => (
            <NavButton
              key={item.label}
              href={item.path}
              variant="text"
            >
              {item.label}
            </NavButton>
          ))}
          <Box sx={{ height: '24px', width: '1px', bgcolor: 'rgba(255,255,255,0.3)' }} /> {/* Divider */}
          <ContactButton href="/contact">
            <ContactMailIcon sx={{ fontSize: 20 }} />
            Contact Us
          </ContactButton>
          <ContactButton href="tel:+919825629314">
            <PhoneIcon sx={{ fontSize: 20 }} />
            (+91) 9825629314
          </ContactButton>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'primary.contrastText' }}
          onClick={handleMobileMenuOpen}
          edge="end"
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.primary.main,
              width: '200px',
            },
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={handleMobileMenuClose}
              component="a"
              href={item.path}
              sx={{
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                },
                transition: 'background-color 0.3s ease',
                padding: '8px 16px',
              }}
            >
              {item.label}
            </MenuItem>
          ))}
          <Box sx={{ height: '1px', bgcolor: 'rgba(255,255,255,0.1)', mx: 2, my: 1 }} /> {/* Divider */}
          <MenuItem
            onClick={handleMobileMenuClose}
            component="a"
            href="/contact"
            sx={{
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
              display: 'flex',
              gap: 1,
              padding: '8px 16px',
            }}
          >
            <ContactMailIcon sx={{ fontSize: 20 }} />
            Contact Us
          </MenuItem>
          <MenuItem
            onClick={handleMobileMenuClose}
            component="a"
            href="tel:+919825629314"
            sx={{
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
              display: 'flex',
              gap: 1,
              padding: '8px 16px',
            }}
          >
            <PhoneIcon sx={{ fontSize: 20 }} />
            (91) 98256 29314
          </MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;