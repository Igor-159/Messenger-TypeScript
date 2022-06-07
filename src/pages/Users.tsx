import React, { FC, useEffect } from 'react';
import Paginator from '../components/common/paginator/Paginator';
import User from '../components/user/User';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Users: FC = () => {
    const {users, 
            currentPage, 
            totalUsersCount, 
            pageSize, 
            followingInProgress} = useTypedSelector(state => state.users);
    const {unfollow, requestUsers, follow} = useActions();

    useEffect(() => {
        requestUsers(currentPage, pageSize)
    }, [currentPage])

    return (
        <div>
            <Paginator 
                currentPage={currentPage} 
                onPageChanged={requestUsers}
                totalItemsCount={totalUsersCount} 
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(user=> <User 
                                        key={user.id} 
                                        follow={follow} 
                                        user={user} 
                                        followingInProgress={followingInProgress}
                                        unfollow={unfollow}
                                    /> 
                    )
                }
            </div>
        </div>
    );
};

export default Users;