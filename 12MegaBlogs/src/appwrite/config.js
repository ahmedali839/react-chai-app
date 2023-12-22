 import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  database;
  Bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredimage, userId, status }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("App write is :: createPost :: error", error);
    }
  } 

  async updatePost (slug, {title,content, featuredimage, userId, status}) {
    try {
        return await this.database.updateDocument( 
            conf.appwriteDatabaseID, 
            conf.appwriteCollectionId, 
            slug, 
         { 
            title,
            content,
            featuredimage,
            status,
         
        } 
        )
    } catch (error) {
        console.log("App write is no :: updatePost :: error", error)
    }
  } 

  async deletePost (slug) {
    try {
        await this.database.deleteDocument( 
            conf.appwriteDatabaseID, 
            conf.appwriteCollectionId, 
            slug 
        ) 
        return true
    } catch (error) {
     console.log("App write is not :: deletePost :: error", error)    
     return false
    } 
  } 
   
   async getPost(slug) { 
    try {
      return await this.database.getDocument(
      conf.appwriteDatabaseID, 
      conf.appwriteCollectionId,
      slug,
      )
    } catch (error) {
      console.log("App write is :: get Post :: error", error);
      return false
    }
   } 

   async getPosts (queries = [Query.equal("status", "active")]) {
    try {
   return await this.database.listDocuments( 
   conf.appwriteDatabaseID, 
   conf.appwriteCollectionId,
   queries,
   )
     } catch (error) {
      console.log("App write :: getList :: error", error);
    }
   } 

   // file upload service 


   async uploadFIle(file) { 
    try {
      return await this.bucket.createFile( 
        conf.appwriteBucketId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log("Appwrite is no :: upload file :: error", error); 
      return false
    }
   } 

   async deleteFile(fileId) {
try {
await this.bucket.deleteFile(
  conf.appwriteBucketId,
  fileId,
  )  
  return true
} catch (error) {
  console.log("Appwrite is no :: deleteFile :: error", error);
}
   } 


   getFilePr(fileId) {
    
return this.bucket.getFilePreview(
  conf.appwriteBucketId, 
  fileId,
)
   } 
   
  }

const service = new Service();

export default service;