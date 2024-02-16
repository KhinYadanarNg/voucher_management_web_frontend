'use client';
import React from 'react'
import Container from '../Container'
import FormWrap from '../common/FormWrap'
import PasswordResetUi from './PasswordResetUi'

const page = () => {
  return (
    <Container>
        <FormWrap>
            <PasswordResetUi/>
        </FormWrap>
    </Container>
  )
}

export default page