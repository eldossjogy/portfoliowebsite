import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import MUISwitch from '../components/MUISwitch';
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";
import style from '../styles/Nav.module.css'
import { useRouter } from 'next/router';
import { signOut } from "next-auth/react"

export default function PrimarySearchAppBar(props) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const [checked, setChecked] = useState(theme === 'dark' ? true : false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  useEffect(() => {
    setMounted(true)
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (matched && theme === "system") {
      setChecked(true)
    }
  }, [])


  if (!mounted) return null

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => router.push("/projects")} >
        <p>Project</p>
      </MenuItem>
      <MenuItem onClick={() => router.push("/contact")}>
        <p>Contact</p>
      </MenuItem>
      <div className={` ${props.page === "admin" ? style.canSee : style.cantSee}`}>
        <MenuItem onClick={() => signOut({ callbackUrl: '/admin' })}>
          <p>Logout</p>
        </MenuItem>
      </div>

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={false} tablet={3} md={3} lg={3} xl={4}>
        </Grid>
        <Grid item xs={12} tablet={6} md={6} lg={6} xl={4}>
          <AppBar position="static" color="primary" className={style.navbar}>
            <Toolbar>
              <Typography
                onClick={() => router.push("/")}
                variant="h6"
                noWrap
                component="div"
                className="yourName"
                sx={{ display: { xs: 'block', sm: 'block' }, cursor: "pointer" }}>
                <a className={"links"} href="." rel="noopener noreferrer">Eldoss</a>
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', fold: "flex", sm: 'flex', md: 'flex' } }} >
                <Button
                  color="secondary"
                  variant={props.page === "projects" ? "contained" : "null"}
                  onClick={() => router.push("/projects")}
                  sx={{ display: 'block' }}
                >
                  Projects
                </Button>
                <Button
                  color="secondary"
                  variant={props.page === "contact" ? "contained" : "null"}
                  onClick={() => router.push("/contact")}
                  sx={{ ml: 1, mr: 1, display: 'block' }}
                >
                  Contact
                </Button>
                <div className={` ${props.page === "admin" ? style.cantSee : style.canSee}`}>
                  <MUISwitch sx={{ display: 'flex' }} checked={checked}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={` ${props.page === "admin" ? style.canSee : style.cantSee}`}>
                  <Button
                    color="secondary"
                    variant={props.page === "admin" ? "contained" : "null"}
                    sx={{ ml: 2, display: 'block' }}
                    onClick={() => signOut({ callbackUrl: '/admin' })}>
                    Logout
                  </Button>
                </div>
              </Box>
              <Box sx={{ display: { xs: 'flex', fold: "none", sm: 'none', md: 'none' } }}>
                <MUISwitch sx={{ display: 'flex', my: 2 }} checked={checked}
                  onChange={handleChange} />
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </Grid>
        <Grid item xs={false} tablet={3} md={3} lg={3} xl={4}>
        </Grid>
      </Grid>

    </Box>
  );
}
