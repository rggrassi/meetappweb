import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';

export default function SignIn() {
    return (
        <Fragment>
            <img src={logo} alt='Meetapp'></img>
            <Form noValidate>
                <Input name='email' type='email' placeholder='Digite seu e-mail' autoComplete="off" autoFocus="on" autoCorrect="off" />
                <Input name='password' type='password' placeholder='Sua senha secreta' autoComplete="off"/>
                <button type="submit">Acessar</button>
                <Link to='/register'>Criar conta gratuita</Link>
            </Form>
        </Fragment>
    )
}