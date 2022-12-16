import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input'
import { IForm, IUserData } from './types';
import { login } from '../../services/login';

import { api } from '../../api';

function Home() {

  const [userData, setUserData] = useState<null | IUserData>()

  useEffect(() => {
    const getData = async() => {
      const data: any | IUserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Esse campo é obrigatório'),
    password: yup.string().min(6, 'Insira ao menos 6 caracteres').required('Esse campo é obrigatório')
  })

  const { 
    control, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  function onSubmit(): void {
    const loginForm = document.getElementById('formLogin')
    const formData = new FormData(loginForm as HTMLFormElement);
    
    const email = formData.get('email')
    const password = formData.get('password')
    
    login(email as string, password as string)
  }

  return (
    <>
    <Header />
    <main className='container mx-auto mt-3 flex flex-col bg-white p-3 justify-between rounded-lg'>

      { userData === null || userData === undefined && <h1 className='text-3xl'>Loading...</h1> }

      <h1 className='text-center text-blue-900 text-3xl font-semibold underline'>Faça o login</h1>
      <form className='w-1/2 mx-auto mt-3 flex flex-col' onSubmit={handleSubmit(onSubmit)} id='formLogin'>
        <Input
          control= {control}
          errorMessage = {errors.email ? errors.email.message : null}

          name='email' 
          id='email' 
          type='email'
          required
          placeholder='JohnDoe@gmail.com'
          className='border-solid border-2 border-blue-600 rounded-md p-1 focus:outline-none focus:border-blue-700 focus:border-[3px]'

          label='E-mail:' 
          labelStyles='text-blue-800 text-lg'
        />
        <Input
          control= {control}
          errorMessage = {errors.password ? errors.password.message : null}

          name='password'
          id='password'
          type='password'
          required
          className='border-solid border-2 border-blue-600 rounded-md p-1 focus:outline-none focus:border-blue-700 focus:border-[3px]'

          label='Senha'
          labelStyles='text-blue-800 text-lg mt-3'
        />
        <Button
          text='Entrar'
          extraStyle='mx-auto mt-3'
          disabled={!isValid}
          /> 
      </form>
    </main>
    </>
  )
}

export default Home
