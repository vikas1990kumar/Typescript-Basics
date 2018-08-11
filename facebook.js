// This is a facebook about section class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var faceBookAbout = /** @class */ (function () {
    function faceBookAbout(birth_day, about_You, nick_Name, college_Details, professional_Skill, work_Place, mobile_Phone, add_ress, relation_ship) {
        var _this = this;
        this.birth_day = birth_day;
        this.about_You = about_You;
        this.nick_Name = nick_Name;
        this.college_Details = college_Details;
        this.professional_Skill = professional_Skill;
        this.work_Place = work_Place;
        this.mobile_Phone = mobile_Phone;
        this.add_ress = add_ress;
        this.relation_ship = relation_ship;
        this.getAge = function () {
            return _this.birthday;
        };
        this.getWorkAndEducation = function () {
            return _this.professionalSkill;
        };
        this.setContactInfo = function (mobileNumber) {
            return _this.mobilePhone = mobileNumber;
        };
        this.getFamilyAndRelationships = function () {
            return _this.relationship;
        };
        this.getCollegeDetails = function () {
            return _this.collegeDetails;
        };
        this.birthday = birth_day;
        this.aboutYou = about_You;
        this.nickName = nick_Name;
        this.collegeDetails = college_Details;
        this.professionalSkill = professional_Skill;
        this.workPlace = work_Place;
        this.mobilePhone = mobile_Phone;
        this.address = add_ress;
        this.relationship = relation_ship;
    } //end of constructor
    return faceBookAbout;
}()); //end of class faceBookAbout
var twitter = /** @class */ (function (_super) {
    __extends(twitter, _super);
    function twitter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getDetailsAboutYou = function () {
            return _this.nickName;
        };
        _this.setDetailsAboutYou = function (name) {
            return _this.nickName = name;
        };
        return _this;
    }
    return twitter;
}(faceBookAbout)); //end of subclass twitter
var user = new faceBookAbout("15th April 1990", "Mean stack developer", "Minku", "Delhi University", "IT professional", "noida", 123456789, "New Delhi", "single");
var user1 = new twitter("15th April 1992", "Mean Full stack developer", "Pinku", "Sikkim Manipal University", "IT professional", "Greater noida", 87834456789, "New Delhi", "single");
console.log(user.getAge());
console.log(user.getWorkAndEducation());
console.log(user.setContactInfo(145263789));
console.log(user.getFamilyAndRelationships());
console.log(user1.getDetailsAboutYou());
console.log(user1.setDetailsAboutYou("Vikas"));
console.log(user1.getCollegeDetails());
