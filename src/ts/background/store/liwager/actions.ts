import { Action } from 'redux';

export type LiwagerActionTypes = 'CHANGE_PAGE';
export type LiwagerPayload = string;

export type LiwagerActions = Action<LiwagerActionTypes, LiwagerPayload>;

export const change_page = (payload: LiwagerPayload) => ({ type: 'CHANGE_PAGE', payload });
