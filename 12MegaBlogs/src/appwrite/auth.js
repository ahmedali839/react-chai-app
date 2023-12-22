import conf from "../conf/conf"; 
import { Client, Account, ID } from "appwrite" 

export class AuthService { 
client = new Client() ;
account;
 

constructor() { 
    this.client             
    .setEndpoint(conf.appwriteUrl)  
    .setProject(conf.appwriteProjectId) 

    this.account = new Account(this.client)
}
 
 
 
 
async createAccount({email, password, name}) { 
 try {
   const userAccount =  await this.account.create(ID.unique(), email, password, name);
 
   if (UserAccount) {
    return this.login({email, password});
   } else {
    return userAccount;
   }

 } catch (error) {
  throw error;
 }

}  


async Login({email, password}) { 
    try {
       return  await this.account.createEmailSession(email, password);
    } catch (error) {
        throw error
    }
}  


async getCurrentUsers()  {
    try {
       return await this.account.get()
    } catch (error) {
        console.log("Appwrite is not :: getCurrentUsers :: error ", error)
    } 
     return null;
}

async Logout() {
    try {
         await this.account.deleteSession();
    } catch (error) {
        console.log("Appwrite is no :: Logout :: error ", error)
    }

}
 
}  
 

const authService = new AuthService();



export default authService
