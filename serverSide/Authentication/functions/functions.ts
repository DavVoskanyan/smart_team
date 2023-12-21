export function comparePasswordAndHash(userPassword: string, hash: string): Promise<boolean> {
   const bcrypt = require('bcrypt');

   return (new Promise((res, rej) => {
       bcrypt.compare(userPassword, hash, (error: Error | null, result: boolean): void => {
           if(error) { rej(error); }
           else { res(result); }
       });
   }));
}