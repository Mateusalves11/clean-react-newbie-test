"use client"

import { useEffect, useState } from 'react';
import { BoxLinks, Container, Image, Line, Link, HeaderBase, Title } from './header.style';
export function Header() {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
      setHasToken(true);
      return
    }
    setHasToken(false);
  }, []);

  return (
    <HeaderBase>
      <Container>
        <Title>GW Junior</Title>
        <BoxLinks>
          {hasToken ?
            <>
              <Image src='https://reqres.in/img/faces/7-image.jpg' alt="user" />
              <Link style={{ fontSize: '24px' }} color='Black'>Logout</Link>
            </>
            : (
              <>
                <Link onClick={() => { window.location.href = "/"; }} color='Blue'>Login</Link>
                <Line />
                <Link onClick={() => { window.location.href = "/Register"; }} color='Black'>Register</Link>
              </>
            )}

        </BoxLinks>
      </Container>
    </HeaderBase >
  );
}