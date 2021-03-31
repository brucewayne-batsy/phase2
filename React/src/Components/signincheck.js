
let Signin=null;


 export const signincheck=class signincheck{

    static signin(){

        Signin=true;
        return Signin;

    }
    static signout(){
        Signin=false;
        return Signin;
    }

    static check(){
        return Signin;
    }
}
