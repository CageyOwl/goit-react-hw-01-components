import Profile from "./Profile/Profile";
import user from "user.json";

import Statistics from "./Statistics/Statistics";
import data from 'data.json';

import friends from 'friends.json';
import FriendsList from "./FriendsList/FriendsList";

import transactions from 'transactions.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        gap: '40px',
        gridTemplateRows: '1fr',
        padding: '40px 0',
        justifyItems: 'center',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
