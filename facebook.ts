
// This is a facebook about section class

class faceBookAbout{

    public birthday : string;
    public aboutYou : string;
    public nickName : string;
    public collegeDetails : string;
    public professionalSkill:string;
    public workPlace: string;
    public mobilePhone : number;
    public address : string;
    public relationship: string;


    constructor(public birth_day:string, public about_You : string, public nick_Name : string, public college_Details : string
     , public professional_Skill: string, public work_Place: string, public mobile_Phone : number, public add_ress : string
     , public relation_ship: string)
     {
        this.birthday= birth_day;
        this.aboutYou= about_You;
        this.nickName= nick_Name;
        this.collegeDetails= college_Details;
        this.professionalSkill= professional_Skill;
        this.workPlace= work_Place;
        this.mobilePhone= mobile_Phone;
        this.address= add_ress;
        this.relationship= relation_ship;

    }//end of constructor

    getAge = () => {
        return this.birthday;
    }
    getWorkAndEducation = () => {
        return this.professionalSkill;

    }
    setContactInfo = (mobileNumber:number) => {
        return this.mobilePhone = mobileNumber;
    }

    getFamilyAndRelationships=() =>{
        return this.relationship;
    }

    getCollegeDetails = () =>{
        return this.collegeDetails;
    } 


} //end of class faceBookAbout

class twitter extends faceBookAbout{

    getDetailsAboutYou = () =>{
        return this.nickName;
    }
    setDetailsAboutYou =(name:string) => {
        return this.nickName=name;
    }
} //end of subclass twitter

let user= new faceBookAbout("15th April 1990", "Mean stack developer", "Minku", "Delhi University", 
"IT professional", "noida", 123456789, "New Delhi", "single" )

let user1 = new twitter("15th April 1992", "Mean Full stack developer", "Pinku", "Sikkim Manipal University", 
"IT professional", "Greater noida", 87834456789, "New Delhi", "single" )

console.log(user.getAge());
console.log(user.getWorkAndEducation());
console.log(user.setContactInfo(145263789));
console.log(user.getFamilyAndRelationships());
console.log(user1.getDetailsAboutYou());
console.log(user1.setDetailsAboutYou("Vikas"));
console.log(user1.getCollegeDetails());


