'use client';
import { getUsersAction } from '@/redux/user/action.user';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div className="container mx-auto mt-3">
      <h2 className="text-center">Users List</h2>
      <table className="w-100 text-center">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr className="" key={user.id}>
              <td>{index + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
