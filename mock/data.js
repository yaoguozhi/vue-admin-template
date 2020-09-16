/*
 * @Author: Neil.yao
 * @Date: 2020-09-15 22:38:36
 * @LastEditTime: 2020-09-15 23:15:10
 * @Description: 
 * @FilePath: /vue-admin-template/mock/data.js
 */
import Mock from 'mockjs';
const {
  param2Obj
} = require('@/utils')

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  login(req) {
    const {
      username
    } = JSON.parse(req.body)
    const token = tokens[username]

    return {
      code: 20000,
      data: token
    }
  },
  userInfo(req) {
    const {
      token
    } = param2Obj(req.url)
    const info = users[token]
    return {
      code: 20000,
      data: info
    }
  },
  logout() {
    return {
      code: 20000
    }
  },
  tabData() {
    return {
      "code": 20000,
      "data": {
        "total": 30,
        "items": [{
          "id": "210000200208228377",
          "title": "Wtmcvrcjep kzob tmqmfj drqhypnibn edpecupy dim yxcnrwz kpbfuev epfqh zmnoeera ogqskrwpnu ackkfgnag.",
          "status": "deleted",
          "author": "name",
          "display_time": "2015-01-15 23:27:33",
          "pageviews": 4465
        }, {
          "id": "710000201508284066",
          "title": "Pmhq wcxlk obkkglc ebmz totbpsh tvvjclgi zpfuvuhw ksbxuht ekqrkwy xsfejr jksepi zgdzh msyrqlna.",
          "status": "published",
          "author": "name",
          "display_time": "1984-04-22 18:54:52",
          "pageviews": 1440
        }, {
          "id": "320000197401149663",
          "title": "Bbanfixc vefmtyvk sfck beidamwxl cjacwanvt qwel pdqjtdap pdjize wzghdjeo kyuaujlu wqwdbdg xkwr tols eku pbwaayn gybbvtj.",
          "status": "published",
          "author": "name",
          "display_time": "1989-08-05 00:27:51",
          "pageviews": 3611
        }, {
          "id": "210000198810118277",
          "title": "Couulk tkjebmr ctypsyoxd wtwrl vdgq ycc qulqmg veo njhrgwe ksktsmhks pttspqjh sjwjkqh lme rknmj brcic dsliq mnnur.",
          "status": "published",
          "author": "name",
          "display_time": "1997-01-24 23:07:25",
          "pageviews": 353
        }, {
          "id": "710000201812112883",
          "title": "Irxe prxglgs uoo lck qfjl vpmxtgmgp wfjxp nclpz bkymhupd fzmxiwgr wywpb bnoq nuqrq foiouhxdie dpqvlhfnye liqljhk klnfhyf.",
          "status": "draft",
          "author": "name",
          "display_time": "2005-12-20 19:20:09",
          "pageviews": 1488
        }, {
          "id": "140000197305285928",
          "title": "Ackwhvlqx efbssn ncieyo hgvsd ymptlxsw lowq ohafqx ncjd ior hmfyjmb uqjfj.",
          "status": "published",
          "author": "name",
          "display_time": "1988-11-17 04:56:45",
          "pageviews": 1798
        }, {
          "id": "640000198907184342",
          "title": "Cqioygwl trlnu pxeeqb gxrkwf lzkpfihljm nvwzgivge xupaoxexr ckajfdkh hygjii uhafmhljb ibsgh zhwh todhixloe odcju gcbt fqcqxe hwmzpcup gdimy.",
          "status": "draft",
          "author": "name",
          "display_time": "2009-11-10 05:00:24",
          "pageviews": 3174
        }, {
          "id": "410000200104244433",
          "title": "Rqmmv kykdoqq ajqkot jjokut bsxdmx ethrix oavuboi oyin igiynzxoq skcr owhhps.",
          "status": "draft",
          "author": "name",
          "display_time": "1981-07-24 12:09:51",
          "pageviews": 3230
        }, {
          "id": "310000201806266814",
          "title": "Ghzxb jnhfcxohz mdooqwwyj cekbf pihl yoh ewzum biob noqcdw vgjyrst nddftckcj.",
          "status": "deleted",
          "author": "name",
          "display_time": "1991-01-27 19:35:22",
          "pageviews": 2080
        }, {
          "id": "320000201708255355",
          "title": "Svkezmcspd wbj xmjvp gxgmivd mblnrxd mjmvecp zrroqtvx gkwyigy sofypsth csytw acjs ylhyoqktb rdcjwuj hnfjfpuup kjwmtmkjo urh.",
          "status": "draft",
          "author": "name",
          "display_time": "1993-07-25 04:15:48",
          "pageviews": 1027
        }, {
          "id": "64000019850824378X",
          "title": "Eon bbquofwih ofjdpqwcld xheopm clb lzycpdix scbhydabjo mkqvqgpou xqbur tdez xlehb womdmox.",
          "status": "draft",
          "author": "name",
          "display_time": "1989-04-12 23:38:00",
          "pageviews": 993
        }, {
          "id": "810000199703271264",
          "title": "Qjpb hmwivnt ipanswf ceemil myfg wfmlsru kumx nshpsffd uomyojts bsw mnkbymt asii mvppgvvyly oapwjj dlbcjjbx kiwb qydat udfnrtkcz stbp milxel.",
          "status": "published",
          "author": "name",
          "display_time": "1979-12-30 23:24:11",
          "pageviews": 1449
        }, {
          "id": "52000020050301645X",
          "title": "Olubm mtqjted enikk koynu xtjkoxlcf vkf eer sexlb pytlrx bqkgvjnm hyyb yxkupw tuglbwvcy xsdgvgiwvv bbcumpp.",
          "status": "draft",
          "author": "name",
          "display_time": "1973-05-10 15:34:31",
          "pageviews": 332
        }, {
          "id": "440000199411096557",
          "title": "Zyprhv xcqkocds genycjhrz koivui hhpr vojvnkmz nhkef logfxbk wtqc dbksl igbhuc cvmb nppgfitu pdbhhyz lwvqr ielapd nwldvtro jluwpuijuh rjs.",
          "status": "draft",
          "author": "name",
          "display_time": "1996-06-04 14:50:54",
          "pageviews": 4152
        }, {
          "id": "500000200912175861",
          "title": "Pwp wdinvdv rgyasglm fudrki hwhmci qgnv ochjqezso wexsfrjfeq hmdv hbzjk xvvmng wyxaughel tgrpob kbbiwcwx mhcrpq ivdgjroe jsr.",
          "status": "deleted",
          "author": "name",
          "display_time": "1978-07-17 20:40:09",
          "pageviews": 1182
        }, {
          "id": "450000198711111285",
          "title": "Kwhbay veryhibswu exwtkmhi eorfso nejoxzvjm abaulac hubrgs bjbvdew zrpuusuw gkwevdctd krtw paxz.",
          "status": "draft",
          "author": "name",
          "display_time": "1980-08-17 15:09:26",
          "pageviews": 4167
        }, {
          "id": "810000200801072758",
          "title": "Txkibcd bbebsjnn xfblmf blilg ieitekbsc zviphmtvy cdqbfclao vbuehtcj xjej xywurbkj kixthrxdv qbfllgmtg gfuflilgpi vpgzpxm yzmz jbl.",
          "status": "draft",
          "author": "name",
          "display_time": "1975-08-14 13:22:33",
          "pageviews": 1231
        }, {
          "id": "430000198101217441",
          "title": "Rutw epdpenyt gjhh pdn uljp ffok pws vionrgui bpgmyi siulyyoq qbul ajjmvwbt yrwlri yjlyf.",
          "status": "draft",
          "author": "name",
          "display_time": "1972-01-28 13:53:08",
          "pageviews": 3139
        }, {
          "id": "410000200810205423",
          "title": "Knorprfkl otkmr arvnsjg xeomv qetpmibp rtzvtm kmbor lpqcxk pidsianqbb dezhbkml wkclkwuui ulfdgfiaj nwwneri uiefduim xgnirbjfsn.",
          "status": "draft",
          "author": "name",
          "display_time": "1996-01-20 06:21:22",
          "pageviews": 2174
        }, {
          "id": "130000200407193728",
          "title": "Imxg wcbahctf tfpxfxw ktqu oygurhxh kvk ldkumq ykdc ecoprbg kmqixcm bfnj mtwxm sfbtrkr.",
          "status": "deleted",
          "author": "name",
          "display_time": "2006-11-01 00:19:00",
          "pageviews": 3679
        }, {
          "id": "150000201108197321",
          "title": "Oqtti goscpfyjr bppgkdb pqxltvyrz rptetl gvsbj tdfqybilko ykcw wzvrbwlk lhbwc xrqx amifmukf reow bliubew djssyfi hejbr spsx.",
          "status": "published",
          "author": "name",
          "display_time": "1979-08-16 00:15:42",
          "pageviews": 921
        }, {
          "id": "530000199907068113",
          "title": "Mcew tghptho xtcf aspnbbndv vtkjr arheipbdyw soqeb oqqp kanqzj ypsf fbrw mmcej pintpe epxhhhw iglkcuds ofwta mwbsdexl oaevec vaolova.",
          "status": "published",
          "author": "name",
          "display_time": "2001-12-04 22:20:26",
          "pageviews": 1555
        }, {
          "id": "430000197909141174",
          "title": "Sygcnm rohbivkt idlu ijdlwgyk jxdrfvf ilnyn zyfowxxu kruffnid kffmprrxp eancrqd byf.",
          "status": "deleted",
          "author": "name",
          "display_time": "1982-09-28 07:47:18",
          "pageviews": 4744
        }, {
          "id": "340000200702278168",
          "title": "Tnxcgvbi lcsmoe xrofbnlgz hqcw gmmfctxre mjvd rnirjp wuuypflzi hbtrw fgnrxnvns bih joerulx vcblfo bvzweyr mxcvb.",
          "status": "draft",
          "author": "name",
          "display_time": "1991-07-31 23:09:30",
          "pageviews": 687
        }, {
          "id": "420000197308037724",
          "title": "Mtmbavkxwz dvjtru gjh orhvnnklqa whwymhcd vbbjr iggfq bsdc wftkn hqqq tmdfvfhy bqwkoo urdbgtcdw jibxerd nnakbflu iqlmlvs jjuthlzvyd dwprqqm cxtonjese neobdytrh.",
          "status": "draft",
          "author": "name",
          "display_time": "1996-12-24 16:41:07",
          "pageviews": 484
        }, {
          "id": "220000201001317723",
          "title": "Ehirelfs gped laouwbbq tsrtz zleomqw dsmptv rwffcm yfbbs qkijlos lrllnxgf wgvh.",
          "status": "draft",
          "author": "name",
          "display_time": "1985-11-21 05:32:18",
          "pageviews": 928
        }, {
          "id": "440000201712175179",
          "title": "Bitljsmfk rxst xnggk uwycrp ewbb nqkudghb ehgwsez mrbpv rktysw ybvxf yrfzyjmom tbiejetyh rfgecp.",
          "status": "draft",
          "author": "name",
          "display_time": "1977-06-25 13:24:21",
          "pageviews": 4109
        }, {
          "id": "410000201809156470",
          "title": "Rlcipvnlu ygxnrjbjol cfseit lrmaqfy hol uytrxmfat ihx dmivdrowv ictlxpkln xdytyhhvw cteevu wqlqn isqodtwcj lsllutzv slchmlent pllmapo hpkbrfw xpeh.",
          "status": "draft",
          "author": "name",
          "display_time": "2007-04-12 06:51:16",
          "pageviews": 1759
        }, {
          "id": "610000201403273965",
          "title": "Fonjeubrp dvdgbmwl axxvg svlhvuku wtfmhk nirxvphqs lfkytlzgf iffiunn eofd snfrxs llxkow xtcd.",
          "status": "draft",
          "author": "name",
          "display_time": "2009-08-30 00:49:37",
          "pageviews": 3012
        }, {
          "id": "320000200801227362",
          "title": "Yfuf ekddlux dyr bgicuh xozlkgqdjz ygrj shytbin zgyr hvu hjdkqenb lgcrz kuom fnjgatpt nkxbgnt.",
          "status": "published",
          "author": "name",
          "display_time": "2006-03-03 01:57:59",
          "pageviews": 4106
        }]
      }
    }
  },
}
