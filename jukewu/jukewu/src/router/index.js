import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bootPage from '@/components/bootPage'
import Nav from '@/components/Nav'
import HomePage from '@/components/HomePage'
import Recommend from '@/components/Recommend'
import MyCenter from '@/components/MyCenter'
import wangdaiRecommend from '@/components/wangdaiRecommend'
import CreditCardService from '@/components/CreditCardService'
import MoneyIntroduce from '@/components/MoneyIntroduce'
import DefaultSort from '@/components/DefaultSort'
import TopShelf from '@/components/TopShelf'
import Hottest from '@/components/Hottest'
import Commission from '@/components/Commission'
import Register from '@/components/Register'
import ZhiFubao from '@/components/ZhiFubao'
import BankCardDetails from '@/components/BankCardDetails'
import SET from '@/components/SET'
import FinancialDetails from '@/components/FinancialDetails'
import Loans from '@/components/Loans'
import Earnings from '@/components/Earnings'
import MessageCenter from '@/components/MessageCenter'
import Service from '@/components/Service'
import IShop from '@/components/IShop'
import LiCai from '@/components/LiCai'
import DaiKuan from '@/components/DaiKuan'
import CreditCard from '@/components/CreditCard'
import ApplyFor from '@/components/ApplyFor'
import MonthRanking from '@/components/MonthRanking'
import DayRank from '@/components/DayRank'
import DaiKuanRecord from '@/components/DaiKuanRecord'
import Audit from '@/components/Audit'
import HasPassed from '@/components/HasPassed'
import NotPass from '@/components/NotPass'
import ServeSort from '@/components/ServeSort'
import ServePutaway from '@/components/ServePutaway'
import ServeHot from '@/components/ServeHot'
import ServeRate from '@/components/ServeRate'
import Register_one from '@/components/Register_one'
import ForgetThePassword from '@/components/ForgetThePassword'
import Member from '@/components/Member'
import MyTeam from '@/components/MyTeam'
import PromotionOfRecord from '@/components/PromotionOfRecord'
import wangDai from '@/components/wangDai'
import CreditCardOne from '@/components/CreditCardOne'
import CardApplication from '@/components/CardApplication'
import AmendShop from '@/components/AmendShop'
import Course from '@/components/Course'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bootPage',
      component: bootPage,
    },
    {
      path: '/Register_one',
      name: 'Register_one',
      component: Register_one,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/ForgetThePassword',
      name: 'ForgetThePassword',
      component: ForgetThePassword,
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member,
    },
    {
      path: '/MyTeam',
      name: 'MyTeam',
      component: MyTeam,
    },
    {
      path: '/AmendShop',
      name: 'AmendShop',
      component: AmendShop,
    },
    {
      path: '/PromotionOfRecord',
      name: 'PromotionOfRecord',
      component: PromotionOfRecord,
      redirect:'/wangDai',
      children:[
        {
          path: '/wangDai',
          name: 'wangDai',
          component: wangDai,
        },
        {
          path: '/CreditCardOne',
          name: 'CreditCardOne',
          component: CreditCardOne,
        },
        {
          path: '/CardApplication',
          name: 'CardApplication',
          component: CardApplication,
        }
      ]
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav,
      redirect:'/HomePage',
      children:[
        {
          path: '/HomePage',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: '/Recommend',
          name: 'Recommend',
          component: Recommend,
          redirect:'/wangdaiRecommend',
          children:[
            {
              path: '/wangdaiRecommend',
              name: 'wangdaiRecommend',
              component: wangdaiRecommend,
              redirect:'/DefaultSort',
              children:[
                {
                  path: '/DefaultSort',
                  name: 'DefaultSort',
                  component: DefaultSort,
                },
                {
                  path: '/TopShelf',
                  name: 'TopShelf',
                  component: TopShelf,
                },
                {
                  path: '/Hottest',
                  name: 'Hottest',
                  component: Hottest,
                },
                {
                  path: '/Commission',
                  name: 'Commission',
                  component: Commission,
                }
              ]
            },
            {
              path: '/CreditCardService',
              name: 'CreditCardService',
              component: CreditCardService,
              redirect:'/ServeSort',
              children:[
                {
                  path: '/ServeSort',
                  name: 'ServeSort',
                  component: ServeSort,
                },
                {
                  path: '/ServePutaway',
                  name: 'ServePutaway',
                  component: ServePutaway,
                },
                {
                  path: '/ServeHot',
                  name: 'ServeHot',
                  component: ServeHot,
                },
                {
                  path: '/ServeRate',
                  name: 'ServeRate',
                  component: ServeRate,
                }
              ]
            },
            {
              path: '/MoneyIntroduce',
              name: 'MoneyIntroduce',
              component: MoneyIntroduce,
            }
          ]
        },
        {
          path: '/MyCenter',
          name: 'MyCenter',
          component: MyCenter,
        }
      ]
    },
    {
      path: '/ZhiFubao',
      name: 'ZhiFubao',
      component: ZhiFubao,
    },
    {
      path: '/BankCardDetails',
      name: 'BankCardDetails',
      component: BankCardDetails,
    },
    {
      path: '/SET',
      name: 'SET',
      component: SET,
    },
    {
      path: '/FinancialDetails',
      name: 'FinancialDetails',
      component: FinancialDetails,
    },
    {
      path: '/Loans',
      name: 'Loans',
      component: Loans,
    },
    {
      path: '/Earnings',
      name: 'Earnings',
      component: Earnings,
    },
    {
      path: '/MessageCenter',
      name: 'MessageCenter',
      component: MessageCenter,
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service,
    },
    {
      path: '/IShop',
      name: 'IShop',
      component: IShop,
      redirect:'/DaiKuan',
      children:[
        {
          path: '/DaiKuan',
          name: 'DaiKuan',
          component: DaiKuan,
        },
        {
          path: '/LiCai',
          name: 'LiCai',
          component: LiCai,
        },
        {
          path: '/CreditCard',
          name: 'CreditCard',
          component: CreditCard,
        }
      ]
    },
    {
      path: '/ApplyFor',
      name: 'ApplyFor',
      component: ApplyFor,
      redirect:'/MonthRanking',
      children:[
        {
          path: '/MonthRanking',
          name: 'MonthRanking',
          component: MonthRanking,
        },
        {
          path: '/DayRank',
          name: 'DayRank',
          component: DayRank,
        }
      ]
    },
    {
      path: '/DaiKuanRecord',
      name: 'DaiKuanRecord',
      component: DaiKuanRecord,
      redirect:'/Audit',
      children:[
        {
          path: '/Audit',
          name: 'Audit',
          component: Audit,
        },
        {
          path: '/HasPassed',
          name: 'HasPassed',
          component: HasPassed,
        },
        {
          path: '/NotPass',
          name: 'NotPass',
          component: NotPass,
        }
      ]
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course,
    }
  ]
})
