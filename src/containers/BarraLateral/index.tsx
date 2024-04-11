import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluidas" contador={3} />
        <FiltroCard legenda="Urgentes" contador={1} />
        <FiltroCard legenda="Importantes" contador={1} />
        <FiltroCard legenda="Normal" contador={4} />
        <FiltroCard ativo legenda="Todas" contador={10} />
      </S.Filtros>
    </div>
  </S.Aside>
)
export default BarraLateral
