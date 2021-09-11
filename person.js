class person {
     constructor(name,age,gender){
         this.name=name;
         this.age=age;
         this.gender=gender;
     }
     getName(){
         console.log(this.name);
     }
     getAge(){
         console.log(this.age);
     }
     getGender(){
         console.log(this.gender);
     }
 }
 var qq=new person("Aravindan",25,"male");
 qq.getName();
 qq.getAge();
 qq.getGender();
