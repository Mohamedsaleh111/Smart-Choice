import { connect } from "mongoose";


export async function dbconnection  (){
    await connect(process.env.DATABASE_DB as string).then(()=>{
        console.log('db connectedddd successfully');
        
    }).catch(()=>{
        console.log('failed to connected to db');
        
    })
}
