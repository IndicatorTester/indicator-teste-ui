'use client';

import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

const App = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return <Link href="/api/auth/login">Login</Link>;
    return <div>Hello {user.name}, <Link href="/api/auth/logout">Logout</Link></div>;
}

export default App