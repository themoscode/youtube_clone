(this.webpackJsonpyoutube_clone=this.webpackJsonpyoutube_clone||[]).push([[0],{48:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),l=a.n(r),o=a(20),c=a(21),s=a(26),u=a(25),m=a(105),d=a(100),p=a(106),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={searchTerm:""},e.handleChange=function(t){e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){var a=e.state.searchTerm;(0,e.props.onFormSubmit)(a),t.preventDefault()},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{elevation:6,style:{padding:"25px"}},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(p.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),a}(i.a.Component),v=a(104),b=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%",height:"0"}},i.a.createElement("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameBorder:"0",width:"100%",height:"100%",title:"Video Player",src:a})),i.a.createElement(d.a,{elevation:6,style:{padding:"15px"}},i.a.createElement(v.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),i.a.createElement(v.a,{variant:"subtitle1"},t.snippet.channelTitle),i.a.createElement(v.a,{variant:"subtitle2"},t.snippet.description)))},f=function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(d.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},i.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),i.a.createElement(v.a,{variant:"subtitle1"},t.snippet.title)))},E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return i.a.createElement(f,{onVideoSelect:a,key:t,video:e})}));return i.a.createElement(m.a,{container:!0,spacing:10},n)},g=a(44),y=a.n(g),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(t){y.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"AIzaSyBtAasotd_DO5LZOdOH00z072l70MdEkYU",part:"snippet",q:t}}).then((function(t){console.log(t.data.items),e.setState({videos:t.data.items,selectedVideo:t.data.items[0]}),console.log(e.state)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit("react js")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return i.a.createElement("div",{style:{padding:"40px"}},i.a.createElement(m.a,{justify:"center",container:!0,spacing:0},i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(m.a,{container:!0,spacing:5},i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(h,{onFormSubmit:this.handleSubmit})),i.a.createElement(m.a,{item:!0,xs:8},i.a.createElement(b,{video:t})),i.a.createElement(m.a,{item:!0,xs:4},i.a.createElement(E,{videos:a,onVideoSelect:this.onVideoSelect}))))))}}]),a}(i.a.Component);l.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.64e3039d.chunk.js.map