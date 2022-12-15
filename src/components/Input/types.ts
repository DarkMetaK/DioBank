import { InputHTMLAttributes } from "react";
import { Control } from 'react-hook-form'

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    labelStyles?: string;
    control ?: Control<any, any>;
    name: string;
    errorMessage?: string | null;
}