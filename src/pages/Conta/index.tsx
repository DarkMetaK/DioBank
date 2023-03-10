import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { LoginContext } from '../../context/auth'

import InfoCard from '../../components/InfoCard'

import { api } from '../../api'
import { IUserData, IUserDataStorage } from '../../types/api.types'
import Spinner from '../../components/Spinner'

function Conta() {

  const [userData, setUserData] = useState<IUserDataStorage>();

  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(LoginContext);
  !isLoggedIn && navigate('/')

  useEffect((): void => {
    (async() => {
      const {id, email, balance, name}: IUserData = await api;
      setUserData({id, email, balance, name});
    })()
  }, []);

  if(userData && id !== userData.id) {
    navigate('/');
  }

  const acessDate = new Date()

  return (
    <>
    <div className='flex flex-col w-[90%] mx-auto mt-3 justify-between gap-2 md:w-1/2 md:flex-row'>
      {
        userData === undefined || userData === null ?
        (
          <span className='w-full flex justify-center h-[80vh] items-center'>
            <Spinner />
            <h1 className='ml-3'>Carregando...</h1>
          </span>
        ) :
        (
        <>
        <InfoCard
          title={`Bem vindo ${userData?.name}`}
          content={`${acessDate.getDay().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}/${acessDate.getMonth().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}/${acessDate.getFullYear()} ${acessDate.getHours().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${acessDate.getMinutes().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`}
        />
        <InfoCard 
          title='Saldo'
          content={userData.balance.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        />
        </>
        )
      }
    </div>
    </> 
  )
}

export default Conta