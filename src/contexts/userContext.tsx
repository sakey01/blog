import { createContext, useState, type ReactNode } from "react";

type UserContextType = {
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);

  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>;
};

export default UserContext;
