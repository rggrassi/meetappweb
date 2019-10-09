import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória')    
})

export default function SignIn() {

    function handleSubmit({ email, password }) {
            
    }

    return (
        <Fragment>
            <img src={logo} alt='Meetapp'></img>
            <Form schema={schema} noValidate>
                <Input name='email' type='email' placeholder='Digite seu e-mail' autoComplete="off" autoFocus="on" autoCorrect="off" />
                <Input name='password' type='password' placeholder='Sua senha secreta' autoComplete="off"/>
                <button type="submit">Acessar</button>
                <Link to='/register'>Criar conta gratuita</Link>
            </Form>
        </Fragment>
    )
}