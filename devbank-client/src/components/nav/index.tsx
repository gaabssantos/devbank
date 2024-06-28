import {
  Box,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
};

const Nav = ({ active }: NavProps) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', balance: 0 });

  const navigate = useNavigate();
  const { isUserLogged, getBalance } = useFetchAPI();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getBalance();

      setUser(data);
    };

    fetchUser();
  }, [getBalance]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
      {!isUserLogged ? (
        <ResponsiveHidden>
          <Button variant="none">
            <Link to={'/cadastrar'}>Cadastrar</Link>
          </Button>
          <Link to={'/logar'}>
            <Button variant="green">Logar</Button>
          </Link>
        </ResponsiveHidden>
      ) : (
        <p>Olá, {user.name}!</p>
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
