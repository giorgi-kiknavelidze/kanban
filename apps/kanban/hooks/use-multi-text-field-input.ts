import { useCallback, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MultiTextFieldItemValue } from '../components/multi-inputs';

interface AddAction {
  type: 'add';
  payload: MultiTextFieldItemValue;
}

interface DeleteAction {
  type: 'delete';
  payload: {
    id: string;
  };
}

interface EditAction {
  type: 'edit';
  payload: {
    id: string;
    value: string;
  };
}

interface UpdateErrorsAction {
  type: 'update-errors';
  payload: { errors: Record<string, string | undefined> };
}

interface ClearAction {
  type: 'clear';
}

type MultiTextFieldReducerAction =
  | AddAction
  | DeleteAction
  | EditAction
  | UpdateErrorsAction
  | ClearAction;

const multiTextFieldReducer = (
  prev: MultiTextFieldItemValue[],
  action: MultiTextFieldReducerAction,
) => {
  if (action.type === 'add') return [...prev, action.payload];
  if (action.type === 'delete')
    return prev.filter((item) => item.id !== action.payload.id);
  if (action.type === 'edit')
    return prev.map((item) =>
      item.id === action.payload.id
        ? { ...item, value: action.payload.value }
        : item,
    );
  if (action.type === 'update-errors')
    return prev.map((item) => ({
      ...item,
      errorMessage: action.payload.errors[item.id],
    }));
  if (action.type === 'clear') return [];
  return prev;
};

export const useMultiTextFieldInput = () => {
  const [input, dispatch] = useReducer(
    multiTextFieldReducer,
    undefined,
    () => [],
  );

  const addItem = useCallback(
    (value: Omit<MultiTextFieldItemValue, 'id'> & { id?: string }) => {
      dispatch({
        type: 'add',
        payload: { ...value, id: value.id ?? uuidv4() },
      });
    },
    [],
  );

  const deleteItem = useCallback((id: string) => {
    dispatch({
      type: 'delete',
      payload: { id },
    });
  }, []);

  const editItem = useCallback((id: string, value: string) => {
    dispatch({
      type: 'edit',
      payload: {
        id,
        value,
      },
    });
  }, []);

  const updateErrors = useCallback(
    (errors: Record<string, string | undefined>) => {
      dispatch({
        type: 'update-errors',
        payload: { errors },
      });
    },
    [],
  );

  const clearItems = useCallback(() => {
    dispatch({ type: 'clear' });
  }, []);

  return { input, addItem, deleteItem, editItem, updateErrors, clearItems };
};
