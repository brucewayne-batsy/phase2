let adding=[];

export const sending =class sending{
  
    constructor(){
    console.log("constructor")
    } 


    static add(index,item){
        if(index===0){

            adding=[]
        }
        
        adding[index]=item;
        console.log(adding);
    }

    static final( ){
        return adding
    }
}