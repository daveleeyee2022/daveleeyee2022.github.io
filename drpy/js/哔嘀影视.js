// 30分钟内首次搜索需要输入验证码

var rule = {
    title:'哔嘀影视',
    host:'https://www.bdys01.com',
    url:'/s/fyclass/fypage',
    searchUrl:'/search/**/fypage',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
    },
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    class_parse:'.navbar-nav:eq(1) .nav-item a;a&&Text;a&&href;/s/(\\w+)',
    tab_exclude:'更多',
    // class_name:'全部&电影&电视剧',
    // class_url:'all&all?type=0&all?type=1',

    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.col-4;*;img&&data-src;*;*',
    一级:'.col-lg-8;h3&&Text;img&&src;.badge&&Text;a&&href',
    二级:{
    	"title":"h2&&Text;.mt-1&&Text",
    	"img":".col-md-auto img&&src",
    	"desc":";;;.mb-md-2:eq(3)&&Text;.mb-md-2:eq(1)&&Text",
    	"content":"#synopsis .card-body&&Text",
    	"tabs":".card-header:eq(1) h3",
    	"lists":"#play-list:eq(#id) a"
	},
    搜索:'.row-cards .row-0;.d-inline-block&&title;img&&src;.d-inline-block&&Text;a&&href',
}
