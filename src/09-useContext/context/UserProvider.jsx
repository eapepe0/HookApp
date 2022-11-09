import { useState } from "react";
import { UserContext } from "./UserContext";

/**
 * Podemos inicializar los valores que vamos a compartir
 */
/* const user = {
    id: 123,
    name: 'Coloso12',
    password: '123456',
    mail : 'eapepe0@gmail.com'
} */
export const UserProvider = ({ children }) => { // lo que enviamos como argumento quedara para compartir 
const [user, setUser] = useState(); // estado
  return (
    <UserContext.Provider value={{ user, setUser }}> {/* lo que estamos compartiendo */}
      {children}
    </UserContext.Provider>
  );
};
