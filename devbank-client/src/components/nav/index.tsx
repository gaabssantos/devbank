import {
  Box,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

import Button from '../Button';
import ResponsiveBar from '../ResponsiveBar';
import {
  Container,
  Item,
  Items,
  Logo,
  Responsive,
  ResponsiveHidden,
  Title,
} from './styles';

import logo from '/logo.png';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Carreiras', 'Sobre', 'Segurança'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container>
      <Logo>
        <div>
          <img src={logo} alt="logo-devbank" />
        </div>
        <Title>DevBank</Title>
      </Logo>
      <ResponsiveHidden>
        <Items>
          <Item active>Home</Item>
          <Item>Carreiras</Item>
          <Item>Sobre</Item>
          <Item>Segurança</Item>
        </Items>
      </ResponsiveHidden>
      <ResponsiveHidden>
        <Button variant="none">Cadastrar</Button>
        <Button variant="green">Logar</Button>
      </ResponsiveHidden>
      <Responsive>
        <ResponsiveBar onClick={toggleDrawer(true)} />
      </Responsive>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Container>
  );
};

export default Nav;
