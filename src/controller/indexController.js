/**
 * Created by long-mac on 2017/4/5.
 */

const indexController = {
    index() {
        return async(ctx, next) => {
            await ctx.render('index/pages/index.html', {
                page_title: 'DOTA传奇',
                list: [
                    { title: '中国IG战队获得2016年度 DOTA2 TI6冠军。',
                      content: '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，' +
                      '中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，中国IG战队首次获得TI冠军，'
                    },
                    { title: '中国dota2竞技水平位居世界前茅。',
                      content: '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，' +
                      '中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，中国dota2就是牛逼牛逼，'
                    },
                    { title: 'newbee战队这次没能进入决赛。',
                      content: '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，' +
                      '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，' +
                      '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，' +
                      '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，' +
                      '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，' +
                      '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，' +
                      '中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，中国前几年厉害的战队现在不行了，'
                    },
                    { title: '欧洲站队实力不可小觑。' ,
	                    content: '欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，'+
	                    '欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，'+
	                    '欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，'+
	                    '欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，'+
	                    '欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，'+
	                    '欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，欧洲老外今年比赛中奋起直追，'
                    },
                    { title: '韩国DOTA2就是个渣。',
                    content: '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'+
                    '韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，韩国DOTA2水平不行，呵呵哒，'
                    },
                    { title: '我自豪，我骄傲！' },
                ],
	              main: [
		              {
		              	img: '/assets/images/ig.jpeg',
			              content: 'IG电子竞技俱乐部是一家以电子竞技及周边业务为核心、以打造全球顶级电竞俱乐部为目标的电子竞技俱乐部。' +
			              '北京普思投资董事长、万达集团董事王思聪于2011年8月2日凌晨在微博上宣布，自己将强势进入电子竞技，并整合电子竞技，' +
			              '同时收购国内新豪门CCM战队，更名为iG（Invictus Gaming）。'
		              },{
		              	img: '/assets/images/ig2.jpeg',
			              content: 'IG电子竞技俱乐部是一家以电子竞技及周边业务为核心、以打造全球顶级电竞俱乐部为目标的电子竞技俱乐部。' +
			              '北京普思投资董事长、万达集团董事王思聪于2011年8月2日凌晨在微博上宣布，自己将强势进入电子竞技，并整合电子竞技，' +
			              '同时收购国内新豪门CCM战队，更名为iG（Invictus Gaming）。'
		              }, {
			              img: '/assets/images/ig3.jpeg',
			              content: 'IG电子竞技俱乐部是一家以电子竞技及周边业务为核心、以打造全球顶级电竞俱乐部为目标的电子竞技俱乐部。' +
			              '北京普思投资董事长、万达集团董事王思聪于2011年8月2日凌晨在微博上宣布，自己将强势进入电子竞技，并整合电子竞技，' +
			              '同时收购国内新豪门CCM战队，更名为iG（Invictus Gaming）。'
		              },

	              ]
            });
            // ctx.body = 'This is a koa2 test!';
        };
    },
};
export default indexController;

