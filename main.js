//This is a Youtube class
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
var youTubeVideo = /** @class */ (function () {
    //constructor of the class youTubeVideo
    function youTubeVideo(video_Title, video_Views, video_Likes, video_Dislikes, video_ChannelName, comments_Count, comment_ByUsers, Replies_ToComments, auto_Play, video_Duration, sub_title, annotation) {
        var _this = this;
        this.video_Title = video_Title;
        this.video_Views = video_Views;
        this.video_Likes = video_Likes;
        this.video_Dislikes = video_Dislikes;
        this.video_ChannelName = video_ChannelName;
        this.comments_Count = comments_Count;
        this.comment_ByUsers = comment_ByUsers;
        this.Replies_ToComments = Replies_ToComments;
        this.auto_Play = auto_Play;
        this.video_Duration = video_Duration;
        this.sub_title = sub_title;
        this.annotation = annotation;
        this.getNumberOfViews = function () {
            return ("The number of views are :" + _this.videoViews);
        };
        this.getRelatedVideos = function () {
            return ("These are the related videos");
        };
        this.getNumberOfLikes = function () {
            return _this.videoLikes;
        };
        this.setNumberOfDislikes = function (dilikes) {
            return _this.videoDislikes = dilikes;
        };
        this.getVideoChannelName = function () {
            return _this.videoChannelName;
        };
        this.videoTitle = video_Title;
        this.videoViews = video_Views;
        this.videoLikes = video_Likes;
        this.videoDislikes = video_Dislikes;
        this.videoChannelName = video_ChannelName;
        this.commentsCount = comments_Count;
        this.commentByUsers = comment_ByUsers;
        this.RepliesToComments = Replies_ToComments;
        this.autoPlay = auto_Play;
        this.videoDuration = video_Duration;
        this.subtitle = sub_title;
        this.annotations = annotation;
    } //end of constuctor
    return youTubeVideo;
}()); //end of class youTubeVideo
var netflix = /** @class */ (function (_super) {
    __extends(netflix, _super);
    function netflix(video_Title, video_Views, video_Likes, video_Dislikes, video_ChannelName, comments_Count, comment_ByUsers, Replies_ToComments, auto_Play, video_Duration, sub_title, annotation) {
        var _this = _super.call(this, video_Title, video_Views, video_Likes, video_Dislikes, video_ChannelName, comments_Count, comment_ByUsers, Replies_ToComments, auto_Play, video_Duration, sub_title, annotation) || this;
        _this.video_Title = video_Title;
        _this.video_Views = video_Views;
        _this.video_Likes = video_Likes;
        _this.video_Dislikes = video_Dislikes;
        _this.video_ChannelName = video_ChannelName;
        _this.comments_Count = comments_Count;
        _this.comment_ByUsers = comment_ByUsers;
        _this.Replies_ToComments = Replies_ToComments;
        _this.auto_Play = auto_Play;
        _this.video_Duration = video_Duration;
        _this.sub_title = sub_title;
        _this.annotation = annotation;
        _this.getOriginals = function () {
            return ("This is a netflix original");
        };
        _this.setNameOfVideo = function (videoName) {
            return _this.videoTitle = videoName;
        };
        return _this;
    }
    return netflix;
}(youTubeVideo));
var user = new youTubeVideo("Channa Mereya", 1234566, 312324, 21, "T-Series", 2134, "Good Song", "nice", true, 4, "English", true);
var user1 = new netflix("Don't bring me down", 1234456, 2342324, 22, "Vivo", 2134, "Good Song", "nice", true, 4, "English", true);
console.log(user.getNumberOfViews());
console.log(user.getRelatedVideos());
console.log(user.getNumberOfLikes());
console.log(user.setNumberOfDislikes(56));
console.log(user.getVideoChannelName());
console.log(user1.getOriginals());
console.log(user1.setNameOfVideo("Milegi Milegi"));
