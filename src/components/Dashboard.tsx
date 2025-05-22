type UserProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  hasUnreadMessages: boolean;
  isBanned: boolean;
};

export function Dashboard({
  isLoggedIn,
  isAdmin,
  hasUnreadMessages,
  isBanned,
}: UserProps) {
  if (!isLoggedIn) return <p>Please log in to continue.</p>;
  if (isBanned) return <p>Your account has been banned.</p>;
  const message = isAdmin ? ", Admin." : " back!";
  if (hasUnreadMessages)
    return <p>Welcome{message} You have unread messages.</p>;
  return <p>Welcome{message} No new messages.</p>;
}
