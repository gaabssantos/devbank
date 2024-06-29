import {
  Box,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useFetchAPI } from '../../hooks/useFetchAPI';
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

type NavProps = {
  active: string;
  userName: string;
};

const Nav = ({ active, userName }: NavProps) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { isUserLogged, logoutUser } = useFetchAPI();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    logoutUser();
    toast.success(`Até mais, ${userName}!`);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Carreiras', 'Sobre', 'Segurança'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate('/')}>
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
          <Item $active={active === '/'}>
            <Link to={'/'}>Home</Link>
          </Item>
          <Item $active={active === '/carreiras'}>Carreiras</Item>
          <Item $active={active === '/sobre'}>Sobre</Item>
          <Item $active={active === '/segurança'}>Segurança</Item>
        </Items>
      </ResponsiveHidden>
      {!isUserLogged() ? (
        <ResponsiveHidden>
          <Button variant="none">
            <Link to={'/cadastrar'}>Cadastrar</Link>
          </Button>
          <Link to={'/logar'}>
            <Button variant="green">Logar</Button>
          </Link>
        </ResponsiveHidden>
      ) : (
        <>
          <p>Olá, {userName}!</p>
          <Button variant="none" onClick={handleLogout}>
            Sair
          </Button>
        </>
      )}
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
