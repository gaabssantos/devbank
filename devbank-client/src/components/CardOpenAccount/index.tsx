import { Link } from 'react-router-dom';

import { SpecialTitle } from '..';

import themes from '../../styles/themes.json';
import Button from '../Button';
import CardDesign from '../Images/CardDesign';
import { Container } from './styles';

const CardOpenAccount = () => {
  return (
    <Container>
      <div>
        <CardDesign />
        <h2>
          Inicie sua jornada financeira com o{' '}
          <SpecialTitle>DevBank hoje</SpecialTitle>!
        </h2>
        <p>
          Pronto para assumir o controle de suas finanças? Junte-se ao DevBank
          agora e deixe-nos ajudá-lo a atingir seus objetivos financeiros com
          nossas soluções personalizadas e atendimento ao cliente excepcional
        </p>
      </div>
      <Button variant="green">
        <Link
          to={'/cadastrar'}
          style={{
            color: `${themes.absolutes.black}`,
          }}
        >
          Abrir conta
        </Link>
      </Button>
    </Container>
  );
};

export default CardOpenAccount;
