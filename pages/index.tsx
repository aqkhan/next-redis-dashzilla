import Head from 'next/head'
import UserForm from '../lib/UserForm';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>DashZilla basic Redis example</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Create User
        </h1>
        <UserForm />
      </main>
    </div>
  )
}
