//This is a Youtube class

class youTubeVideo{
    [x: string]: any;
    getAge(): any {
        throw new Error("Method not implemented.");
    }

    //properties of the class youTubeVideo

    public videoTitle : String;
    public videoViews : Number;
    public videoLikes : Number;
    public videoDislikes : Number;
    public videoChannelName : String;
    public commentsCount : Number;
    public commentByUsers : String;
    public RepliesToComments : String;
    public autoPlay : boolean;
    public videoDuration : Number;
    public subtitle : String;
    public annotations : boolean;


    //constructor of the class youTubeVideo
    
    constructor(public video_Title: string, public video_Views : Number, public video_Likes : Number,
        public video_Dislikes : Number, public video_ChannelName : String, public comments_Count : Number,
        public comment_ByUsers : String, public Replies_ToComments : String, public auto_Play : boolean,
        public video_Duration : Number, public sub_title : String, public annotation : boolean
      ){

        this.videoTitle = video_Title;
        this.videoViews = video_Views;
        this.videoLikes = video_Likes;
        this.videoDislikes = video_Dislikes;
        this.videoChannelName =video_ChannelName;
        this.commentsCount = comments_Count;
        this.commentByUsers = comment_ByUsers;
        this.RepliesToComments = Replies_ToComments;
        this.autoPlay = auto_Play;
        this.videoDuration = video_Duration;
        this.subtitle =sub_title;
        this.annotations = annotation;

    } //end of constuctor

     getNumberOfViews = () =>{
    
        return ("The number of views are :"+ this.videoViews)
         
     }

     getRelatedVideos = () =>{
         return ("These are the related videos")
     }

     getNumberOfLikes =() =>{
         return this.videoLikes
     }

     setNumberOfDislikes =(dilikes:number)=>{
         
         return this.videoDislikes = dilikes;
     }

     getVideoChannelName = () =>{
         return this.videoChannelName;
     }

}//end of class youTubeVideo


class netflix extends youTubeVideo{       //class netflix inherits youTubeVideo class

    constructor(public video_Title: string, public video_Views : Number, public video_Likes : Number,
        public video_Dislikes : Number, public video_ChannelName : String, public comments_Count : Number,
        public comment_ByUsers : String, public Replies_ToComments : String, public auto_Play : boolean,
        public video_Duration : Number, public sub_title : String, public annotation : boolean)
        
        {
        super(video_Title,video_Views,video_Likes, video_Dislikes, video_ChannelName, comments_Count, comment_ByUsers, 
           Replies_ToComments, auto_Play, video_Duration, sub_title, annotation);
    }

    getOriginals=() =>{

        return ("This is a netflix original");
    }

    setNameOfVideo =(videoName: string) => {
        return this.videoTitle = videoName;
    } 
}

let user = new youTubeVideo("Channa Mereya", 1234566, 312324, 21, "T-Series",2134, "Good Song", "nice", true, 4, "English", true)

let user1 =new netflix("Don't bring me down", 1234456, 2342324, 22, "Vivo",2134, "Good Song", "nice", true, 4, "English", true)

console.log(user.getNumberOfViews());

console.log(user.getRelatedVideos());

console.log(user.getNumberOfLikes());

console.log(user.setNumberOfDislikes(56));

console.log(user.getVideoChannelName());

console.log(user1.getOriginals());

console.log(user1.setNameOfVideo("Milegi Milegi"));


