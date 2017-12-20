import {IGlobalState} from './IGlobalState';
import {IRegisterState} from './IRegisterState';

export interface IAppState extends IGlobalState, IRegisterState {}