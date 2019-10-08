import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import schema from './validation/schema';

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