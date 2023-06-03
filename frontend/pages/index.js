import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const index = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div>
      
      {!user && (
        <a href="/api/auth/login">Login</a>
      )}
      {isLoading && (
        <div>Loading...</div>
      )}
      {
        user && (
          <>
            <a href="/api/auth/logout">Logout</a>
            <div>user: {user.name}</div>
          </>
        )
      }
    </div>
  )
}

export default index