import React, { useEffect } from 'react'
import { GoVerified } from 'react-icons/go'
import Image from 'next/image'
import Link from 'next/link'

import useAuthStore from '../store/authStore'
import { IUser } from '../types'

const SuggestedAccounts = () => {
  const { fetchAllUsers, AllUsers } = useAuthStore();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div className='xl:border-b-2 border-gray-200 pb-4'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
        Suggested Accounts
      </p>
      <div>
        {AllUsers.slice(0, 6).map((user: IUser) => (
          <Link key={user._id} href={`/profile/${user._id}`}>
            <div className='flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded'>
              <div className='w-8 h-8'>
                <Image
                  src={user.image}
                  width={34}
                  height={34}
                  className='rounded-full'
                  alt='User Profile'
                  layout='responsive'
                />
              </div>
              <div className='hidden xl:block'>
                <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                  {user.userName.replaceAll(' ', '_')}
                  <GoVerified className='text-blue-400' />
                </p>
                <p className='text-gray-400 capitalize text-xs'>
                  {user.userName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SuggestedAccounts