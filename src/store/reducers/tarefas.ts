import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar Java',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar Java'
    },
    {
      id: 2,
      descricao: 'LAvar a louça',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Limpar a cozinha'
    },
    {
      id: 3,
      descricao: 'Estudar FC',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Jogar Fifa'
    },
    {
      id: 4,
      descricao: 'Estudar ',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Python'
    }
  ]
}

const tarefesSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefesSlice.actions

export default tarefesSlice.reducer
