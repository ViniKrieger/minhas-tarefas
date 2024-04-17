import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtros'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
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
}
export default BarraLateral
